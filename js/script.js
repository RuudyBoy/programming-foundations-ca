//* Question 1 *//

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

//* Question 3 *//

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