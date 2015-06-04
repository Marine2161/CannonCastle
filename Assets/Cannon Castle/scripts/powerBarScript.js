public var shotPower: float;
var anim:Animator;
var power: float;
public var Gauge: boolean;
public var rapidfire: int= 3;
public var rapid: boolean = false;

function PrintFloat (power : float) {

    
    launcher2.ShotPower = power;
}

function Start () {
anim = GetComponent.<Animator>();
}

function Update ()
{

  //MOUSE RELEASE
  if(Input.GetMouseButtonUp(0)) 
    {

      Debug.Log("reset power");
      anim.SetBool("Gauge", false );
   }
  

  //MOUSE CLICK
   if(Input.GetMouseButtonDown(0)) 
   {
      Debug.Log("charging power");
      anim.SetBool("Gauge", true );
    }
}