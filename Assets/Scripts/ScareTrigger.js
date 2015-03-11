#pragma strict
var face : GameObject;
var enterTrigger = false;
var hasPlayed = false;
var screamingSound : AudioClip;

var startPos: Vector3;
var endPos: Vector3;
// Movement speed in units/sec.
var speed = 0.000001;
// Time when the movement started.
private var startTime: float;
// Total distance between the markers.
private var journeyLength: float;	

function Start () {
	enterTrigger = false;
	startPos = face.transform.position;
	endPos = transform.position;
	face.GetComponent.<Renderer>().enabled = false;
}

function Update () {
	if (enterTrigger == true && hasPlayed == false) {
		GetComponent.<AudioSource>().PlayOneShot(screamingSound);
		
		var distCovered = (Time.time - startTime) * speed;
		var fracJourney = distCovered / journeyLength;
		face.transform.position = Vector3.Lerp(startPos, endPos, fracJourney);
		
		if (fracJourney > 1.0) {
			RemoveOverTime();
		}
	}
}

function OnTriggerEnter(other : Collider) {
	enterTrigger = true;
	startTime = Time.time;
	face.GetComponent.<Renderer>().enabled = true;
}

function RemoveOverTime() {
	//yield WaitForSeconds(1.0);
	face.GetComponent.<Renderer>().enabled = false;
	hasPlayed = true;
}