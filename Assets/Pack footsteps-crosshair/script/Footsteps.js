var forest : AudioClip[];
var wood : AudioClip[];

var pause : float;

var step : boolean;
var player : Transform;

function Awake () {
	step = true;
}

function Update () {
	var hit : RaycastHit;
	if(Physics.Raycast(transform.position, transform.forward, hit, 2)) {
		if(Input.GetAxis("Vertical") || Input.GetAxis("Horizontal")) {
			if(player.GetComponent(CharacterController).isGrounded) {
				if(hit.transform.tag == "Forest" && step) {
					playForestSound();
				}
				if(hit.transform.tag == "Wood" && step) {
					playWoodSound();
				}
			}
		}
	}
}

function playForestSound () {
	step = false;
	audio.clip = forest[Random.Range(0, forest.Length)];
	audio.volume = 1;
	audio.Play();
	yield WaitForSeconds (pause);
	step = true;
}

function playWoodSound () {
	step = false;
	audio.clip = wood[Random.Range(0, wood.Length)];
	audio.volume = 1;
	audio.Play();
	yield WaitForSeconds (pause);
	step = true;
}
