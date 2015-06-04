#pragma strict

// GAME OBJECTS

var CB: GameObject;
var newCB: GameObject;
var Enemy1: GameObject;
var Enemy2: GameObject;
var Enemy3: GameObject;
var Enemy4: GameObject;
var Castle: GameObject;
var powerBar: GameObject;
var Launcher: GameObject;	
var Ground: GameObject;
var MegaCannon: GameObject;
var Clouds: GameObject;
static var tripleShotButton: boolean = false;



// GUI VARIABLES

static public var Score = 0;
static public var Health = 10;
static public var currLevel = 1;
static var currlevel = currLevel;
static var health = Health;
static var MaxHealth = Health;
static var score = Score;
public var CloudSpawn = 380;
private var CloudReset = CloudSpawn;


// TIME VARIABLES

 static var spawnTimeE1 = 100;
 static var spawnTimeE2 = 100;
 static var spawnTimeE3 = 125;
 static var spawnTimeE4 = 150;
 static var resetE1: int;
 static var resetE2: int;
 static var resetE3: int;
 static var resetE4: int;
 public var LevelTime: double = 97.0;

 //RESETS SPAWN TIME TO FULL PLUS RANDOM INT
 resetE1 = spawnTimeE1 + Random.Range(25,150);
 resetE2 = spawnTimeE2 + Random.Range(25,150);
 resetE3 = spawnTimeE3 + Random.Range(25,200);
 resetE4 = spawnTimeE4 + Random.Range(50,400);


// UPGRADES
private var MegaCooldown: double;
static var MegaBought: boolean = false;
static var HealthUpg: boolean = false;

//Creates a mute toggle button 

function OnGUI() {	

	GUI.Box(new Rect(655, 550, 35, 60), "\n" + gameScript.Health); 
	GUI.Box(new Rect(883, 550, 45, 60), "\n" + gameScript.Score); 
	GUI.Box(new Rect(1102, 550, 33, 60), "\n" + gameScript.currLevel); 
		 
		if (MegaCooldown <= 0)
		{
		  if (MegaBought == true) 
		   {
		 	  if (GUI.Button (Rect (340,540,120,80), "MEGA CANNON"))
		      {
    		    Debug.Log("MEGA CANNON");
    		    Instantiate(MegaCannon);
    		    MegaCooldown = 45;
    	      }
    	    }
    	 }

		if(GUI.Button(Rect(20, 20, 100, 25), "Music On/Off")) {

			if (GetComponent.<AudioSource>().volume == 1.0) {
				GetComponent.<AudioSource>().volume = 0.0;
			}
			else{
				GetComponent.<AudioSource>().volume = 1.0;
			}
		}
}


function Start () 
{
 	 Instantiate(powerBar);
 	 Instantiate(Launcher);
 	 Instantiate(Castle);
 	 Instantiate(Ground); 
 	 Instantiate(Clouds);

  if (HealthUpg == true) 
	{
      gameScript.Health = gameScript.MaxHealth;
	}
}

function Update () 
{

CloudSpawn -= Time.deltaTime;

if(CloudSpawn <= 0)
	{
		Instantiate(Clouds);
		CloudSpawn = CloudReset;
	}

	if (Health <= 0)
	{
		Application.LoadLevel("lose");
	}
	
	//SPAWNING
	//DIFFICULTY IS DETERMINED BY SPAWN TIME
	spawnTimeE1 -= Time.deltaTime;
	spawnTimeE2 -= Time.deltaTime;
	spawnTimeE3 -= Time.deltaTime;
	spawnTimeE4 -= Time.deltaTime;
	MegaCooldown -= Time.deltaTime;
	

		//ENEMY 1
			if (spawnTimeE1 <= 0) 
			 {
				Instantiate(Enemy1);
				spawnTimeE1 = resetE1;
			 }

		//ENEMY 2
			 if (spawnTimeE2 <= 0) 
			 {
				Instantiate(Enemy2);
				spawnTimeE2 = resetE2;
			 }

		//ENEMY 3

		   	if (spawnTimeE3 <= 0) 
			 {
			 	if (currLevel >= 2)
			   	  {
					Instantiate(Enemy3);
					spawnTimeE3 = resetE3;
				  }
			 }
		//ENEMY 4

			if (spawnTimeE4 <= 0) 
			   {
			   	if (currLevel >= 3)
			   	  {
			   	  	 Instantiate(Enemy4);
			   	     spawnTimeE4 = resetE4;
			      }
			   }


			//when music is finished, level ends
			LevelTime -= Time.deltaTime;
		if (LevelTime <= 0){

			currLevel += 1;
			spawnTimeE1 = spawnTimeE1 - 5;
			spawnTimeE2 = spawnTimeE2 - 5;
			spawnTimeE3 = spawnTimeE3 - 5;
			spawnTimeE4 = spawnTimeE4 - 5;

			
			Application.LoadLevel("shop");
		}

}
