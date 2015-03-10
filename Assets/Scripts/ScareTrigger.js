#pragma strict
var face : GameObject;
var enterTrigger = false;
var hasPlayed = false;
var screamingSound : AudioClip;

function Start () {
	enterTrigger = false;
	face.GetComponent.<Renderer>().enabled = false;
}

function Update () {
	if (enterTrigger == true && hasPlayed == false) {
		face.GetComponent.<Renderer>().enabled = true;
		GetComponent.<AudioSource>().PlayOneShot(screamingSound);
		RemoveOverTime();
	}
}

function OnTriggerEnter(other : Collider) {
	enterTrigger = true;
}

function RemoveOverTime() {
	yield WaitForSeconds(1.0);
	face.GetComponent.<Renderer>().enabled = false;
	hasPlayed = true;
}