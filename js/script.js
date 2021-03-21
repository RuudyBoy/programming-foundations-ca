// Question 1

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
}

else {
    console.log("In stock");
}

//* Question 2 *//

for (var count = 15; count <=25; count++) {
    if (count == 17 || count == 20){
        console.log(count);
    }
    
}

// Question 3

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var gamesContainer = document.querySelector("ul");

for (var i =0; i < games.length; i++) {
    var title= games[i].title;
    var rating= games[i].rating;
	

    if (rating < 3.5) {
		gamesContainer.innerHTML += "<li>" + games[i].title + " - " + games[i].rating + "</li>";
    }

}

// Question 4 

function whatIDontLike (vaffel) {
	if ( typeof vaffel === "string") {
		console.log("I don`t like vaffel");
	} else {
		console.log("Please send in a string");
	}
}

whatIDontLike(Boolean);

// Question 5 

function changeToNumbers (change1,change2) {

	var firstChange = parseFloat(change1);
	var secondChange = parseFloat(change2);

	if (isNaN (firstChange) || isNaN (secondChange)) {
		return "Invalid argument(s)"
	} else {
		return secondChange - firstChange;
	}
}

var changing = document.getElementById("subtraction");

changing.innerHTML = changeToNumbers (10,20);





// Question 6 

var heading = document.querySelector ("h1");
var button = document.querySelector(".page");
var ulElement = document.querySelector ("ul");

function changeDesign () {

	heading.style.color = "green";
	heading.style.fontFamily = "impact";
	heading.innerHTML = "<a href=\#\>" + heading.innerHTML + "</a>";
	
	var body =document.querySelector("body");
	body.style.backgroundColor = "yellow";

	document.title = "Updated title";
	
	ulElement.style.padding = "0";
	ulElement.style.listStyle = "none";

}

button.onclick = changeDesign;


// Question 7

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];

var button = document.querySelector(".price");

function designChange () {
var toysContainer = document.getElementById("total");

for (var i = 0; i < toys.length; i++) {
	var name = toys[i].name;
	var price = (toys[i].price);
	var lego = toys[i].price = 15.6;
	var motu = toys[i].price = 28.3;
	var potatoHead = toys[i].price = 89.99;

	
    if (!isNaN(price)) {
	console.log(name);
	toysContainer.innerHTML = lego + motu + potatoHead ;
    }
}

}

button.onclick = designChange;