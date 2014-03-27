// Author's jQuery - Chris Eisenbraun
// Testing creating a variable to be called later.
var $biosSpan = $("figcaption").find("span");
// Using variable (not concerned about ugly css injection)
$biosSpan.css({"display": "block", "background": "black", "color": "teal"});
//Traversing
$( "h2" ).nextAll("p").css("color", "rgb(63, 177, 248)");
//Examples of DOM manipulation Add class AND FLAMES!!!!
$( "h1,  h1 a" ).addClass( "why font-effect-fire-animation").css("color", "black");
// Use of Event Delegation
$( "a" ).closest( "h4" ) .css( "background-color", "#d4644c" );


//Leveraging the assignment from Day I, add more jQuery awesome.
//
//Things I am looking for:
//
//Examples of DOM manipulation -ok
//Use of Event Delegation - ok
//Clear use of vars and the `this` keyword
//Reading, writing and saving content nodes from the DOM
//Comparative if statements
//String concatenation

