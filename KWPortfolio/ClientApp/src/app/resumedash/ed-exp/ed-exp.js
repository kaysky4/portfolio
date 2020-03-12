$(document).ready(function () {
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function () {
      $(this).toggleClass('open');
    });
});

function wguFunction() {
  var x = document.getElementById("wguDetails");
  if (x.style.display === "none") {
  x.style.display = "block";
   } else {
  x.style.display = "none";
  }
}

function tsuFunction() {
  var x = document.getElementById("tsuDetails");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }
}

function ctcFunction() {
  var x = document.getElementById("ctcDetails");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function genclerkFunction() {
  var x = document.getElementById("genclerkDetails");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function mktgIntFunction() {
  var x = document.getElementById("mktgInt");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dev1Function() {
  var x = document.getElementById("dev1Details");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dev2Function() {
  var x = document.getElementById("dev2Details");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function summerFunction() {
  var x = document.getElementById("summerDetails");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function fallFunction() {
  var x = document.getElementById("fallDetails");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function UxFunction() {
  var x = document.getElementById("UxDetails");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  
function wguDetails() {
    var icon = document.getElementById("wguIcon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
  }
}

function tsuDetails() {
    var icon = document.getElementById("tsuIcon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
  }
}

function ctcDetails() {
    var icon = document.getElementById("ctcIcon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
  }
}

function genClerkDetails() {
    var icon = document.getElementById("genClerkIcon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
  }
}

function mktgIntDetails() {
    var icon = document.getElementById("mktgIntIcon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
  }
}

function summerDetails() {
    var icon = document.getElementById("summerIcon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
}
}

function fallDetails() {
    var icon = document.getElementById("fallIcon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
  }
}

function dev1Details() {
    var icon = document.getElementById("dev1Icon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
  }
}

function dev2Details() {
    var icon = document.getElementById("dev2Icon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
  }
}

function UxDetails() {
    var icon = document.getElementById("UxIcon");
    if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
    } else {
    icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
  }
}
