function dropMenu() {
  var x = document.getElementById("dropNav");
  if (x.className === "nav-items") {
    x.className += " responsive";
  } else {
    x.className = "nav-items";
  }
}
