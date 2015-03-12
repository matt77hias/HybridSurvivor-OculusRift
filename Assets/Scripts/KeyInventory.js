    
    var theEnemy : EnemyScript;
    
    var keyText : KeyText;
    var keys = 0;
    var nb_keys = 3;
     
    function Start() {
    	Screen.lockCursor = false;
    	
    	// find and store a reference to the enemy script (to reduce distance after each paper is collected)
    	if (theEnemy == null) {
    		theEnemy = GameObject.Find( "Enemy" ).GetComponent( EnemyScript );
    	}
    	
    	if (keyText == null) {
    		keyText = GameObject.Find( "Keys Text" ).GetComponent( KeyText );
    	}
    	UpdateText();
    }
     
     
    function Update() {
    	// make enemy follow closer
    	// theEnemy.ReduceDistance();
    }
     
     
    function UpdateText() {
	    if (keys < nb_keys) {
    		keyText.SetText("      " + keys.ToString() + " Keys");
    	} else {
    		keyText.SetText("All Keys Collected!");
    	}
    }