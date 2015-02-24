    
    var theEnemy : EnemyScript;
    var keys = 0;
    var nb_keys = 3;
     
    function Start() {
    	Screen.lockCursor = false;
    	
    	// find and store a reference to the enemy script (to reduce distance after each paper is collected)
    	if (theEnemy == null) {
    		theEnemy = GameObject.Find( "Enemy" ).GetComponent( EnemyScript );
    	}
    }
     
     
    function Update() {
    	// make enemy follow closer
    	// theEnemy.ReduceDistance();
    }
     
     
    function OnGUI() {
	    if (keys < nb_keys) {
	    	GUI.Box(Rect((Screen.width * 0.5) - 60, 10, 120, 25), "" + keys.ToString() + " Keys");
	    } else {
	    	GUI.Box(Rect((Screen.width/2)-100, 10, 200, 35), "All Keys Collected!");
	    	//Application.LoadLevel( "Main Menu" );
	    }
    }