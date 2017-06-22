//functions

//Declaration of a function 
function hello(){
	console.log("Hello!!!");
}

hello();


var hey= function(){
	console.log("hey!");
}

hey();

//functions 

function name(){
	console.log("SpongeBob SquarePants");
}
name();

//finction 

function add(){
	console.log("2+2");
}

add();



//functions
function addTwos(){
	var x=2;
	var y=2;
	console.log(x+y);
}

addTwos();

//functions
function multiply(){
	var x=2;
	var y=3;
	console.log(x*y);
}


function numberEntered(x){
	console.log("the number entered is:", x);
}

numberEntered(5);
numberEntered(7);
numberEntered(1000000);


function anyNumber(x, y){

	console.log("sum is:", x+y);
}

anyNumber(16, 22);
anyNumber(14, 19);
anyNumber(1, 2993843576);

//Print first and last name

function fullName(first, last){
	console.log("Welcome"+first + " "+last);
}

fullName("Jazmin", "Olea");


function petNameAndBreed(name, breed){
	var details = name +", "+breed;
	console.log(details);
	return details;
	
}

petNameAndBreed("Rufus", "weiner dog");


//Sales Tax 0.07

function PriceOfCandy(Amount, price){
	var tax= 0.07
	var totalTax = amount * price * tax;
	var totalPrice =totalTax+ amount* price;
	return totalPrice;
}
console.log("Chipotle:", PriceOfCandy(5,2))






























































