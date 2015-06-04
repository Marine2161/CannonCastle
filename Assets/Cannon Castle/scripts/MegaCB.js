#pragma strict

var megaCB: GameObject;
function Start () {

	}


function Update () {
GetComponent.<Rigidbody2D>().velocity.x += .30;



	//DESTROY

	if (transform.position.x >= 5.88) {
			Destroy(megaCB); 
		}
}
