static public var enemy1Play: boolean;
static public var enemy2Play: boolean;
static public var enemy3Play: boolean;
static public var enemy4Play: boolean;
static public var maxShotPlay: boolean;
static public var hitCastle: boolean;

var hit1: AudioSource;
var hit2: AudioSource;
var hit3: AudioSource;
var hit4: AudioSource;
var maxShot: AudioSource;
var HitCastle: AudioSource;

function Start () {
}

function Update () {

	if (enemy1Play == true) {
		hit1.Play();
		enemy1Play = false;
	}

	if (enemy2Play == true) {
		hit2.Play();
		enemy2Play = false;
	}

	if (enemy3Play == true) {
		hit3.Play();
		enemy3Play = false;
	}

	if (enemy4Play == true) {
		hit4.Play();
		enemy4Play = false;
	}

	if (maxShotPlay == true) {
		maxShot.Play();
		maxShotPlay = false;
	}
	if (hitCastle == true) {
		HitCastle.Play();
		hitCastle = false;
	}
	

}