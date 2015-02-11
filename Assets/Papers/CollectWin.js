	  /// created by MasterDevelopers ///
	    #pragma strict
    @script RequireComponent( AudioSource )
     
    var papers : int = 0;
    var papersToWin : int = 8;
    var distanceToPaper : float = 2.5;
     
    public var paperPickup : AudioClip;
     
    var theEnemy : EnemyScript;
     
     
     
     
    function Start()
    {
    Screen.lockCursor = false;
     
    // find and store a reference to the enemy script (to reduce distance after each paper is collected)
    if ( theEnemy == null )
    {
    theEnemy = GameObject.Find( "Enemy" ).GetComponent( EnemyScript );
    }
    }
     
     
    function Update()
    {
    //if ( Input.GetMouseButtonUp(0) ) // use E in editor as LockCursor breaks with left mouseclick
    if ( Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.E) )
    {
    //var ray = Camera.main.ScreenPointToRay( Input.mousePosition ); // always cast ray from center of screen
    var ray = Camera.main.ScreenPointToRay( Vector3( Screen.width * 0.5, Screen.height * 0.5, 0.0 ) );
    var hit : RaycastHit;
    if ( Physics.Raycast( ray, hit, distanceToPaper ) )
    {
    //if ( hit.collider.gameObject.tag == "Paper" )
    if ( hit.collider.gameObject.name == "Paper" )
    {
    papers += 1;
    //Debug.Log( "A paper was picked up. Total papers = " + papers );
     
    audio.PlayClipAtPoint( paperPickup, transform.position );
     
    Destroy( hit.collider.gameObject );
     
    // make enemy follow closer
    theEnemy.ReduceDistance();
    }
    }
    }
    }
     
     
    function OnGUI()
    {
    if ( papers < papersToWin )
    {
    GUI.Box( Rect( (Screen.width * 0.5) - 60, 10, 120, 25 ), "" + papers.ToString() + " Pages" );
    }
    else
    {
    GUI.Box( Rect( (Screen.width/2)-100, 10, 200, 35 ), "All Pages Collected!" );
    Application.LoadLevel( "Main Menu" );
    }
    }