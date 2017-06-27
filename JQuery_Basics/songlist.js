//alert("Hey");

$(document).ready(function(){
//collects value of hte song and stores it in the variable and prints to see in the consol//
	$("#add").on("click", function(){
		var song = $("#song").val();
		console.log(song);
//puts the variable in a list template and stores it in the variable//
		var listItem= "<li>" +  song + "</li>";
		console.log(listItem);
//append lists the item to the unordered list (Thats what makes the list)
		$("#song-list").append(listItem);
//resets the typy thing so you can do it again//
		$("#song").val(" ");

	})
});
