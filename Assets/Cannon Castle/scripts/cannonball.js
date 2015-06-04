static var combo: int = 0;
var comboReset = combo;

var CB: GameObject;

function Start () {

	}


function Update () {

	//DESTROY


	if (transform.position.x >= 5.88) {

			Destroy(CB); 
		}

	if (transform.position.x <= -5.88) {

			Destroy(CB); 
		} // end Destroy

}

// 

function OnCollisionEnter2D(coll: Collision2D){
  
    if (coll.gameObject.tag == "ground"){
      
      	if (combo >= 2) {
      	 gameScript.Score += combo * 10;
      	 Debug.Log(combo * 10);
      	 }
      	 yield WaitForSeconds (0.08);
      	 combo = comboReset;
      	 Destroy(gameObject); 

    }
}