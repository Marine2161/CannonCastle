var anim:Animator;
public var speed: double;
public var jumpHeight: double;
public var jumpTime: double;
private var point: int = 12;
private var attack: int = 1;
var reset: int;

reset = jumpTime;
function Start () {

  speed = Random.Range(.8,1.8);
  anim = GetComponent.<Animator>();
  anim.Play("walk3");

}

  function Update () {


//SPEED & JUMP

   GetComponent.<Rigidbody2D>().velocity.x = -(speed);

   jumpTime -= Time.deltaTime;

   if (jumpTime <= 0) 
     {
        GetComponent.<Rigidbody2D>().AddForce(transform.up * jumpHeight * 100);
        jumpTime = reset; 
     }
    
}


//COLLISION DETECTION

function OnCollisionEnter2D(coll: Collision2D){
  
      if (coll.gameObject.tag == "cannonball")
      {
        gameScript.Score += point;
        gameScript.spawnTimeE3 -= 10;
        cannonball.combo += 1;
        gameScript.spawnTimeE3 -= 30;
        soundPlayer.enemy3Play = true;
        Debug.Log("cannon hit enemy3");
        Destroy(gameObject);
      }

      if (coll.gameObject.tag == "castle"){

        gameScript.Health -= attack;
        soundPlayer.hitCastle = true;
        Debug.Log("Enemy3 hit castle");
        Destroy(gameObject); 
        
      }

  if (coll.gameObject.tag == "MegaCannonball")
      {
        
        gameScript.Score += point;
        soundPlayer.enemy3Play = true;
        Debug.Log("cannon hit enemy3");
        Destroy(gameObject);
              
          
      }
}





  

  


     