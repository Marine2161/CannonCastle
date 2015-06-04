var DSImg: GameObject;
var TSImg: GameObject;
var MegaC: GameObject;

static var remove1: boolean = false;
static var remove2: boolean = false;
static var remove3: boolean = false;

static var HealCost = 1;
static var MaxCost = 1;

var purchase: AudioSource;
var healed: AudioSource;

function OnGUI () {

    GUI.Box(new Rect(240, 120, 45, 60), "\n" + gameScript.Score);

//TRIPLE SHOT

if (launcher2.doubleShot == false)
{

  if (GUI.Button (Rect (820,105,105,30), "500")) 
    {

        if (gameScript.Score >= 500) 
        {

                gameScript.Score -= 500;
                launcher2.doubleShot = true;
                remove1 = true;
                purchase.Play();

                gameScript.tripleShotButton = true;

        }
    }
}

if (remove1 == true){
  Destroy(DSImg);
}

if (gameScript.tripleShotButton == true)
{
  TSImg.transform.position.x = -0.176;
  TSImg.transform.position.y = 1.922;

  if (GUI.Button (Rect (820,105,105,30), "3000")) 
    {

        if (gameScript.Score >= 1000) 
        {

                gameScript.Score -= 1000;
                launcher2.tripleShot = true;
                purchase.Play();
                remove2 = true;
                gameScript.tripleShotButton = false;
        }
    }
}

if (remove2 == true){
  Destroy(TSImg);
}

// MEGA CANNON

if (gameScript.MegaBought == false)
  {

    if (GUI.Button (Rect (820,190,105,30), "1500")) 
      {

       if (gameScript.Score >= 750) 
           {

                gameScript.MegaBought = true;
                remove3 = true;
                purchase.Play();
                gameScript.Score -= 750;
           }
      }
   }

if (remove3 == true){
  Destroy(MegaC);
}
// MAX HEALTH UPGRADE

    if (GUI.Button (Rect (820,275,105,30), "Max Health +\n" + (2000*MaxCost))) 
    {
      if (gameScript.Score >= 1000 * MaxCost) 
         {
                gameScript.Score -= 1000 * MaxCost;
                healed.Play();
                gameScript.HealthUpg = true;
                gameScript.MaxHealth += 5;
                MaxCost += 1;
         }
    }

  // HEAL 

  if (GUI.Button (Rect (820,360,105,30), "Restore HP\n" + (250*HealCost))) 
    { 
      if (gameScript.Score >= 250 * HealCost) 
         {
                gameScript.Score -= 250 * HealCost;
                healed.Play();
                gameScript.Health += 5;
                HealCost += 1;

                  if (gameScript.MaxHealth < gameScript.Health)
                  {
                     gameScript.Health = gameScript.MaxHealth;
                  }
         }
    }

}