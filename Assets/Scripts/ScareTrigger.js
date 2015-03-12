#pragma strict
var face : GameObject;
private var enterTrigger = false;
private var hasPlayed = false;
var screamingSound : AudioClip;

var player : GameObject;
private var startPos: Vector3;
private var endPos: Vector3;
var speed = 30.0;
private var startTime: float;
private var distance: float;	

function Start () {
	enterTrigger = false;
	startPos = face.transform.position;
	face.GetComponent.<Renderer>().enabled = false;
}

function Update () {
	if (enterTrigger == true && hasPlayed == false) {
		GetComponent.<AudioSource>().PlayOneShot(screamingSound);
		
		var distCovered = (Time.time - startTime) * speed;
		var fracJourney = distCovered / distance;
		face.transform.position = Vector3.Lerp(startPos, endPos, fracJourney);
		
		if (fracJourney > 1.0) {
			face.GetComponent.<Renderer>().enabled = false;
			hasPlayed = true;
		}
	}
}

function OnTriggerEnter(other : Collider) {
	enterTrigger = true;
	startTime = Time.time;
	endPos = player.transform.position;
	distance = Vector3.Distance(startPos, endPos);
	face.GetComponent.<Renderer>().enabled = true;
}