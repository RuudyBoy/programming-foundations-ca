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

for (var i =0; i < games.length; i++) {
    var title= games[i].title;
    var rating= games[i].rating;

    if (rating < 3.5) {
        console.log(title);
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

function hvemErDummest (dum,dummere) {

	var veldigDum = parseFloat(dum);
	var ekstremtDum = parseFloat(dummere);

	if (isNaN (veldigDum) || isNaN (ekstremtDum)) {
		return "Invalid argument(s)"
	} else {
		return ekstremtDum - veldigDum;
	}
}

var dumt =document.querySelector("div [id]");

dumt.innerHTML = hvemErDummest(10,20);





// Question 6 

var heading = document.querySelector ("h1");
var button = document.querySelector(".page");

function changeDesign () {

	heading.style.color = "green";
	heading.style.fontFamily = "impact";

	var body =document.querySelector("body");
	body.style.backgroundColor = "yellow";

	document.title = "Updated title";

}

button.onclick = changeDesign;


