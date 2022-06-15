function enabler() {
  document.getElementsByClassName('send-post')[0].style = "background: none";
  document.getElementsByClassName('form-inner')[0].style = "background: darkgray";
  document.getElementsByClassName('body')[0].style = "background-color: black";
  document.getElementsByClassName('top-bar')[0].style = "background: #2f2b2b";
  document.getElementsByClassName('main-text')[0].style = "color: white";
  document.getElementsByClassName('main-text')[0].style = "color: white";
  document.getElementsByClassName('linkadd')[0].style = "color: white";
  document.getElementsByClassName('linkadd')[0].style = "background: gray";
  document.getElementsByClassName('btn-gtk-left')[0].style = "background: gray";
  document.getElementsByClassName('btn-gtk-right')[0].style = "background: gray";
  document.getElementsByClassName('btn-gtk-right-right')[0].style = "background: gray";

  let ilems = document.querySelectorAll('.notetext');
  for (let ilem of ilems) {
    ilem.style = "background: slategray";
  }

  let olems = document.querySelectorAll('.text-r');
  for (let olem of olems) {
    olem.style = "color: white";
  }

  localStorage.setItem('mode', '1');
}

document.getElementsByClassName('dm')[0].onclick = function darkmode() {
  if (checkMode == '0') {
    enabler();
    document.location.reload(true);
  } else {
    localStorage.setItem('mode', '0');
    document.location.reload(true);
  }
}

let checkMode = localStorage.getItem('mode');
if (checkMode == '1') {
  enabler();
}