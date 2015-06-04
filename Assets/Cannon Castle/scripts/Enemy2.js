#pragma strict

var anim:Animator;
public var speed: double;
private var point: int = 8;
private var attack: int = 1;



function Start () {

  speed = Random.Range(.8,1.8);
  anim = GetComponent.<Animator>();
  anim.Play("walk2");

}

function Update () {

//SPEED

  GetComponent.<Rigidbody2D>().velocity.x = -(speed);

}

//COLLISION DETECTION

function OnCollisionEnter2D(coll: Collision2D){
  if (coll.gameObject.tag == "cannonball")
    {
    
        gameScript.Score += point;
        gameScript.spawnTimeE2 -= 8;
        cannonball.combo += 1;
        soundPlayer.enemy2Play = true;
        Debug.Log("cannon hit enemy2");
        Destroy(gameObject);
          
    }
  
      if (coll.gameObject.tag == "castle"){

        gameScript.Health -= attack;
        soundPlayer.hitCastle = true;
        Debug.Log("Enemy2 hit castle");
        Destroy(gameObject); 
      
      }

      if (coll.gameObject.tag == "MegaCannonball")
      {
        
        gameScript.Score += point;
        soundPlayer.enemy2Play = true;
        Debug.Log("cannon hit enemy2");
        Destroy(gameObject);
              
          
      }
}
