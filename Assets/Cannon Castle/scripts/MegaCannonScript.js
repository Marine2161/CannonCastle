var MegaCB: GameObject;
var newMegaCB: GameObject;

function Start () {
	Instantiate(newMegaCB);
	 yield WaitForSeconds (2.0);
      	  Destroy(gameObject); 
}

