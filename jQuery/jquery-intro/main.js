import * as button from "./button.js";
import * as dropdown from "./dropdown.js";

// JS - document.getElementById("demo").innerHTML = "Hello World";
// JQ - $("#demo").html("Hello World");

$(document).ready(function() {
  $("#demo").html("HI!");
});

// Here is a list of the most commonly used selectors

//$("*") - Wildcard/All Selector: selects every element on the page
//$("p") - Tag: selects every instance of the <p> tag - same with <div>,<section> etc.
//$(".example") - Class: selects every element that has its same class name
//$("#example") - ID: selects a single instance of the unique example ID
//$("[type='text']") - Attribute: selects any element with the text applied to the type
//$("p:first-of-type") - Pseudo-element: Selects the first <p> (Also used with :last-of-type, :nth-of-type(number))
//$("selector").method()

//events
// $(document).ready(function() {
//   $("#trigger").click(function() {
//     $("#demo").html("Hello there");
//   });
// });

// the most commonly used event methods

//click() - Click: executes on a single mouse click
//hover() - Hover: executes when mouse is hovered over an element. also: mouseenter() & mouseleave apply to the same event
//submit() - Submit: executes when a form is submitted
//scroll() - Scroll: executes when the screen is scrolled
//keydown() - you all know what this does and yes ANY KEY!

$(document).ready(function() {
  $("#greeting").on("mouseenter mouseleave", function(e) {
    if (e.type === "mouseenter") {
      $("#greeting").css("color", "red");
    } else {
      $("#greeting").css("color", "black");
    }
  });
});
