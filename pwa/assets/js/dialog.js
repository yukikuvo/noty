document.getElementsByClassName('linkadd')[0].onclick = function linkadd() {
  document.getElementsByClassName('newform')[0].style = "display: block";
}

document.getElementsByClassName('btn-open-settings')[0].onclick = function setting() {
  document.getElementsByClassName('setting')[0].style = "display: block";
}

function allowMe() {
  var txt;
  if (confirm("Do you want to clear all Noty data?")) {
    localStorage.clear();
    document.location.reload(true);
  } else {
    document.location.reload(true);
  }
}

document.getElementsByClassName('reset')[0].onclick = function reset() {
  allowMe();
}

document.getElementsByClassName('btn-gtk')[0].onclick = function closer() {
  document.location.reload(true);
}

document.getElementsByClassName('btn-open-menu')[0].onclick = function openmenu() {
  document.getElementsByClassName('sidemenu')[0].style = "display: block";
}