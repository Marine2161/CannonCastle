var CLICK: AudioSource;

function OnMouseDown () {
		CLICK.Play();
		yield WaitForSeconds (1);
		Application.LoadLevel ("cannonCastle");
	}