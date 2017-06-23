//bronze
function live(city, state){
	console.log("I am from "+city + " "+state+".");
}

live("Indianapolis", "Indiana");



//silver
function printBills(rent, wireless, water, electricity){
	var totalBills = rent + wireless + water + electricity;
	console.log(totalBills);
}
printBills(500, 30, 89, 13)

//gold
function printOddorEven(x){
	if(x%2===0) {
		console.log("the number is even")
	}else{
		console.log("the number is odd")
	}
}
printOddorEven(3);