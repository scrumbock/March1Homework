// Homework Assignment: JS Basics Mini Challenges
/* 1.) Create a script with two variables, each assigned to a number.
 Add them together and output the result to the console. */
var blue = 3
var red = 7
console.log(blue + red);
// Now do the same with two strings.
var blue = ("Vanilla Almond")
var red = ("Mocha Chip")
console.log(blue + " " + red);

//2.) Create a multidimensional array related to a subject that interests you
var teaTypes = ["Earl Grey", "Buddha Cup", "Russian Caravan"];
var whiskeyTypes = ["Irish", "Bourbon", "Scotch"];
var hotToddy = [teaTypes, whiskeyTypes];
//Output two of the items in sub-arrays to the console.
var hotToddies = [ ["Earl Grey", "Buddha Cup", "Russian Caravan"], ["Irish", "Bourbon", "Scotch"]];
console.log(hotToddies[0][2]);
console.log(hotToddies[1][2]);

//3.) Write a script that checks if a variable is less than 100.
a = 2
a < 100
/* If it is, alert the user that their variable is less than 100.
If it is not, alert the user of what the value was
and that it was greater than 100. */
var a = 20
if(a<100) {
	alert("Your Variable Is Less Than 100!");
	}
else {
	alert("Your variable was:" + " " + a + " " + "That's More Than 100!");
} 

/*4.) Declare a function that takes a name as an argument 
and tells the user what name they've entered */
function aName(nameOne) {
	return alert(nameOne)
};
//Try running it after it has been declared. 
aName("Brad");

/* 5.) Declare a function that depending upon which virtual 'door' was entered 
tells the user they've received a different 'prize' in an alert. */
var Door = 1
function gameShow(Door){
if(Door === 1) {
	alert("You've chosen Door # " + Door + " You've won a brand new car!");
}
else if(Door === 2) {
	alert("You've chosen Door # " + Door + " You've won a pet octopus!");
}
else if(Door === 3) {
	alert("You've chosen Door # " + Door + " You've won a trip to Wellington, New Zealand!");
}
else  {
	alert("You chose Door # " + Door +  " This is not a winning door, so you get an audit on your income tax return!");
}
};
gameShow(3);
/*After declaring the function, try running it with different options. 
There must be at least 3 doors. */
gameShow(1);
gameShow(2);
gameShow(9);


