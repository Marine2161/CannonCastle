public var shotPower: float;
var anim:Animator;
var power: float;
public var Gauge: boolean;

function PrintFloat (power : float) {

    
    launcher2.ShotPower = power;
}

function Start () {
anim = GetComponent.<Animator>();
}