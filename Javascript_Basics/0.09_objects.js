
//Object Literal

var player ={
	name : "",
	life : 100,
	damage : 0, //attackPoints
	hasSniperRiffle : true,
	hasSword : true,
	hasTearGas : true,
	rank : ["soldier", "mage", "spartan", "barbarian"],

//METHODS
challenge : function(){
	console.log("Sir, would you care to do battle?");
}, 

fightMe : function(){
	console.log("Would you care to fight" + " " +this.name + "?");
},

attack : function(target){
	console.log(this.name + "attacks" + target.name + "for" + this.damage);
	target.life -= this.damage;
},

pickedUpSword : function(){
	if(this.hasSword === true){
		console.log(this.name + "picked up sword ");
	}
}, 

pickedUpTearGas : function(){
	if(this.hasTearGas ===true){
		console.log(this.name + "Tear gas in use")
	}
}

};


var Saul = Object.create(player);
Saul.name="Saul";
Saul.life= 120;
Saul.damage=20;
Saul.hasSniperRiffle=false;
Saul.hasSword=true;
Saul.hasTearGas=false;
Saul.rank="barbarian";
Saul.challenge();
Saul.fightMe();
console.log(Saul.name);
console.log(Saul.life);
console.log(Saul.damage);
console.log(Saul.hasSniperRiffle);
console.log(Saul.hasSword);
console.log(Saul.hasTearGas);
console.log(Saul.rank);
console.log(Saul.challenge);

var Jazmin = Object.create(player);
Jazmin.name="Jazmin";
Jazmin.life= 128;
Jazmin.damage=22;
Jazmin.hasSniperRiffle=true;
Jazmin.hasSword= false;
Jazmin.hasTearGas=true;
Jazmin.rank="soldier";
Jazmin.challenge();
Jazmin.fightMe();
console.log(Jazmin.name); 
console.log(Jazmin.damage);
console.log(Jazmin.hasSniperRiffle);
console.log(Jazmin.hasSword);
console.log(Jazmin.hasTearGas);
console.log(Jazmin.rank);
console.log(Jazmin.challenge);

Saul.attack(Jazmin);
