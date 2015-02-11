#pragma strict

var Luce : Light;

function Start () {

}

function Update () {
	if ( Input.GetMouseButtonDown(1))
	{
		Luce.enabled = !Luce.enabled;
	}
}
