var speed: float;

function Start () {

transform.position.x = 13;
transform.position.y = Random.Range(.9,2.5);
transform.localScale.x = Random.Range( 1,2);
transform.localScale.y = Random.Range( 1,3);
speed = Random.Range(.01 , .025);
}

function Update () {

transform.position.x -= speed;
}