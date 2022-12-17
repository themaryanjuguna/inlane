// portfolio

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnPortfolio = document.getElementById("btnPortfolio");
var btns = btnPortfolio.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// toggle effect on the services images
$(document).ready(function() {
  $("img[alt=printing]").click(function() {
    $(".toggling-a").toggle();
    $(".service-img-a").toggle();
  });
  $(".toggling-a").click(function () {
    $(".service-img-a").show();
    $(".toggling-a").hide();
  });
});

$(document).ready(function() {
  $("img[alt=promotional-Items]").click(function () {
    $(".toggling").toggle();
    $(".service-img").toggle();
  });
  $(".toggling").click(function() {
    $(".service-img").show();
    $(".toggling").hide();
  });
});
