function results() {
	const first_number = document.getElementById ("first_number").value;
	const second_number = document.getElementById ("second_number").value;
	const division = (first_number / second_number);
	const remainder = (first_number % second_number);
	alert ("The division of: "+ first_number + " and " + second_number + " is " + division + "\n" +
 			"The remainder of: "+ first_number + " and " + second_number + " is " + remainder);
}
