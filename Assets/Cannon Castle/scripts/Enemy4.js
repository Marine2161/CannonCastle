var anim:Animator;
public var speed: double;
private var point: int = 15;
private var attack: int = 1;



function Start () {

  speed = Random.Range(.7,1.15);
  anim = GetComponent.<Animator>();
  anim.Play("enemy4");

  transform.position.y = Random.Range(1.25,2.5);

}


  function Update () {


//SPEED

   GetComponent.<Rigidbody2D>().velocity.x = -(speed);

   if (transform.position.x <= -3.5) 
    GetComponent.<Rigidbody2D>().velocity.y -= speed/4;

}


function OnCollisionEnter2D(coll: Collision2D)
  {
  
    if (coll.gameObject.tag == "cannonball")
      {
        
        gameScript.Score += point;
        cannonball.combo += 1;
        gameScript.spawnTimeE4 -= 15;
        soundPlayer.enemy4Play = true;
        Debug.Log("cannon hit enemy4");
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
        Debug.Log("cannon hit enemy4");
        Destroy(gameObject);
              
          
      }
  
   } 