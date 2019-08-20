//Double Events
$(document).ready(function() {
  $("#welcome").on("mouseenter mouseleave", function(e) {
    if (e.type === "mouseenter") {
      $("#welcome").html("Welcome! Stay forever!");
    } else if (e.type === "mouseleave") {
      $("#welcome").html("Don't leave me this way!");
    }
  });
});

export default function() {}
