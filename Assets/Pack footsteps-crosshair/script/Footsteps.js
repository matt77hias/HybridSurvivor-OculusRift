var forest : AudioClip[];
var wood : AudioClip[];

var lunghezzaPausa : float;

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
					CamminaSuForest();
				}
				if(hit.transform.tag == "Wood" && step) {
					CamminaSuWood();
				}
			}
		}
	}
}

function CamminaSuForest () {
	step = false;
	audio.clip = forest[Random.Range(0, forest.Length)];
	audio.volume = 1;
	audio.Play();
	yield WaitForSeconds (lunghezzaPausa);
	step = true;
}

function CamminaSuWood () {
	step = false;
	audio.clip = wood[Random.Range(0, wood.Length)];
	audio.volume = 1;
	audio.Play();
	yield WaitForSeconds (lunghezzaPausa);
	step = true;
}
