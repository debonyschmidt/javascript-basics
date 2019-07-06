function results() {
	const shoe_size = document.getElementById ("shoe_size").value;
	const year = document.getElementById ("year").value;
	const count = ((((shoe_size * 2)+5)*50)-year)+1766;
	document.write("The total is: "+count);	

}