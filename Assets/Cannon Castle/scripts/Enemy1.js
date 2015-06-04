var anim:Animator;
public var speed: double;
private var point: int = 5;
private var attack: int = 1;



function Start () {
  
  speed = Random.Range(.8,1.8);
  anim = GetComponent.<Animator>();
  anim.Play("walk");

}


  function Update () {


//SPEED

   GetComponent.<Rigidbody2D>().velocity.x = -(speed);

}


function OnCollisionEnter2D(coll: Collision2D)
  {
  
    if (coll.gameObject.tag == "cannonball")
      {
        
        gameScript.Score += point;
        gameScript.spawnTimeE1 -= 5;
        cannonball.combo += 1;
        soundPlayer.enemy1Play = true;
        Debug.Log("cannon hit enemy1");
        Destroy(gameObject);
              
          
      }

      if (coll.gameObject.tag == "castle")
        {

          gameScript.Health -= attack;
          soundPlayer.hitCastle = true;
          Debug.Log("Enemy1 hit castle");
          Destroy(gameObject); 

        }
        
        if (coll.gameObject.tag == "MegaCannonball")
      {
        
        gameScript.Score += point;
        soundPlayer.enemy1Play = true;
        Debug.Log("cannon hit enemy1");
        Destroy(gameObject);
              
          
      }
  
   } 