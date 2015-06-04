var CB: GameObject;
var newCB: GameObject;
static var doubleShot: boolean = false;
static var tripleShot : boolean = false;
static public var ShotPower: float;



function Start () {

    newCB.transform.position.x = -3.251647;
    newCB.transform.position.y = -0.06339259;
  

} 



function Update () {

    //moves launcher sprite in direction of mouse

     var posAim = Camera.main.WorldToScreenPoint(transform.position);
     var dirAim = Input.mousePosition - posAim;
     var angleAim = Mathf.Atan2(dirAim.y, dirAim.x) * Mathf.Rad2Deg;
     transform.rotation = Quaternion.AngleAxis(angleAim, Vector3.forward); 
 

        //Shoots when click is released
       if (Input.GetMouseButtonUp(0))
        {
            
            //shot power requirement > 5.1 requires atleast 1 notch on the powerbar
            if (ShotPower >= 5.1) 
             {
             var pos = Input.mousePosition;
             pos.z = transform.position.z - Camera.main.transform.position.z;
             pos = Camera.main.ScreenToWorldPoint(pos);
 
             var q = Quaternion.FromToRotation(Vector3.up, pos - transform.position);
             var go = Instantiate(newCB, transform.position, q);

             go.GetComponent.<Rigidbody2D>().AddForce(go.transform.up * ShotPower * 10);

                if (doubleShot == true)
                   {
                    var go2 = Instantiate(newCB, transform.position, q);
                    go2.GetComponent.<Rigidbody2D>().AddForce(go.transform.up * ShotPower * 10 * 0.95);
                   }
                //triple shot
                if (tripleShot == true) 
                   {
                    var go3 = Instantiate(newCB, transform.position, q);
                    go3.GetComponent.<Rigidbody2D>().AddForce(go.transform.up * ShotPower * 10 * 0.90);
                   }

                    // MAX SHOT sfx 
                     if (ShotPower != 70)
                     {
                       GetComponent.<AudioSource>().Play();
                     }
                     else {
                        soundPlayer.maxShotPlay = true;
                     }
    
          Debug.Log("fire" + ShotPower * 10);
  
             } // End Shot Power requirement
        } // End get mouse button up


} // End Update





