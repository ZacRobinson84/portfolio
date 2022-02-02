function dropMenu() {
  var x = document.getElementById("dropNav");
  var y = document.getElementById("exitMenu");
  if (x.className === "nav-items") {
    x.className += " enter";
  } else if (x.className === "nav-items enter") {
    x.className = "nav-items exit";
  } else {
    x.className = "nav-items enter";
  }
  if (y.className === "menu-icon") {
    y.className += " responsive";
  } else {
    y.className = "menu-icon";
  }
}

function closeDropMenu() {
  var x = document.getElementById("dropNav");
  var y = document.getElementById("exitMenu");
  x.className = "nav-items";
  y.className = "menu-icon";
}

window.addEventListener("resize", closeDropMenu);
