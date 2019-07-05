function results() {
	var shoe_size = document.getElementById ("shoe_size").value;
	var year = document.getElementById ("year").value;
	var count = ((((shoe_size * 2)+5)*50)-year)+1766;
	document.write("The total is: "+count);	

}