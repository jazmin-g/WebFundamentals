var n=("What number do you want to got to?")
for (i=1; i<=n; i++) {

	if (i%3===0){
		if(i%5===0){
			console.log("FizzBuzz");
		}
		else console.log("Fizz");
	}
	else if(i%5===0){
		console.log("Buzz");
	}
	else{
		console.log("i");
	}
}