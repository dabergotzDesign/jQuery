//Drop-down

//FILM1
$(document).ready(function() {
  $(".film1").on("mouseenter mouseleave click active", function(e) {
    if (e.type === "mouseenter") {
      $(".film1").css("color", "cyan");
      $(".film1").css("background-color", "black");
    } else if (e.type === "mouseleave") {
      $(".film1").css("color", "white");
      $(".film1").css("background-color", "transparent");
    } else if (e.type === "click") {
      $(".actorsF1").css("display", "block");
      $(".actorsF2").css("display", "none");
      $(".actorsF3").css("display", "none");
      $(".actorsF4").css("display", "none");
      $(".actorsF5").css("display", "none");
    } else if (e.type === "click") {
      $(".actorsF1").css("display", "none");
    }
  });
});

//FILM2
$(document).ready(function() {
  $(".film2").on("mouseenter mouseleave click", function(e) {
    if (e.type === "mouseenter") {
      $(".film2").css("color", "cyan");
      $(".film2").css("background-color", "black");
    } else if (e.type === "mouseleave") {
      $(".film2").css("color", "white");
      $(".film2").css("background-color", "transparent");
    } else if (e.type === "click") {
      $(".actorsF2").css("display", "block");
      $(".actorsF1").css("display", "none");
      $(".actorsF3").css("display", "none");
      $(".actorsF4").css("display", "none");
      $(".actorsF5").css("display", "none");
    }
  });
});

//FILM3
$(document).ready(function() {
  $(".film3").on("mouseenter mouseleave click", function(e) {
    if (e.type === "mouseenter") {
      $(".film3").css("color", "cyan");
      $(".film3").css("background-color", "black");
    } else if (e.type === "mouseleave") {
      $(".film3").css("color", "white");
      $(".film3").css("background-color", "transparent");
    } else if (e.type === "click") {
      $(".actorsF3").css("display", "block");
      $(".actorsF2").css("display", "none");
      $(".actorsF1").css("display", "none");
      $(".actorsF4").css("display", "none");
      $(".actorsF5").css("display", "none");
    }
  });
});

//FILM4
$(document).ready(function() {
  $(".film4").on("mouseenter mouseleave click", function(e) {
    if (e.type === "mouseenter") {
      $(".film4").css("color", "cyan");
      $(".film4").css("background-color", "black");
    } else if (e.type === "mouseleave") {
      $(".film4").css("color", "white");
      $(".film4").css("background-color", "transparent");
    } else if (e.type === "click") {
      $(".actorsF4").css("display", "block");
      $(".actorsF2").css("display", "none");
      $(".actorsF3").css("display", "none");
      $(".actorsF1").css("display", "none");
      $(".actorsF5").css("display", "none");
    }
  });
});

//FILM5
$(document).ready(function() {
  $(".film5").on("mouseenter mouseleave click", function(e) {
    if (e.type === "mouseenter") {
      $(".film5").css("color", "cyan");
      $(".film5").css("background-color", "black");
    } else if (e.type === "mouseleave") {
      $(".film5").css("color", "white");
      $(".film5").css("background-color", "transparent");
    } else if (e.type === "click") {
      $(".actorsF5").css("display", "block");
      $(".actorsF2").css("display", "none");
      $(".actorsF3").css("display", "none");
      $(".actorsF4").css("display", "none");
      $(".actorsF1").css("display", "none");
    }
  });
});

export default function() {}
