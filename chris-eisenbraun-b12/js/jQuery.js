// Author's jQuery - Chris Eisenbraun
// Testing creating a variable to be called later.
var $biosSpan = $("figcaption").find("span");
// Using variable (non concerned about ugly css injection)
$biosSpan.css({"display": "block", "background": "black", "color": "teal"});
//Traversing
$( "h2" ).nextAll("p").css("color", "rgb(63, 177, 248)");
// Add class AND FLAMES!!!!
$( "h1,  h1 a" ).addClass( "why font-effect-fire-animation").css("color", "black");

