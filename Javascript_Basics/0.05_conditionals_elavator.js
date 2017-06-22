var elevatorUp= true;
var elevatorDown= true;
var elevatorBroken= true;
var evevatorIsStuckWhileWeAreInIt= true; 
var elevatorNumber= 13; 

if(elevatorUp=== true){
	console.log("Going Up!");
} else {
	console.log("Going Down!");
}

if(elevatorBroken===true){
	console.log("You're gonna die!");
}else{
	console.log("Moving Now")
}

if(evevatorIsStuckWhileWeAreInIt){
	console.log("This is where we part out ways...");
}

if(elevatorBroken || elevatorDown){
	console.log("Ohh Noo!!");
}

if(elevatorNumber ===13 && evevatorIsStuckWhileWeAreInIt){
	console.log("MUAHAHAHAHAHAHAHHAHAHAHAHHA!!!!");
}

