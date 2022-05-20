function generateTxtFile(text) {
  var textFile = null;
  var data = new Blob([text], {
    type: 'text/plain'
  });
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }
  textFile = window.URL.createObjectURL(data);
  return textFile;
}
(function () {
  var btnCreateFile = document.getElementById('export');
  btnCreateFile.addEventListener('click', function () {
    let showexport = localStorage.getItem('posts');
    let mysymbol = `\\`;
    let myexport = showexport.replace(mysymbol, "");
    var linkhref = generateTxtFile(myexport);
    window.location.href = linkhref;
  }, false);
})();

let input = document.querySelector('input');
input.addEventListener('change', () => {
  let files = input.files;
  if (files.length == 0) return;
  const file = files[0];
  let reader = new FileReader();
  reader.onload = (e) => {
    const file = e.target.result;
    localStorage.setItem('posts', file);
    alert("SUCCESS!");
    document.location.reload(true);
  };
  reader.onerror = (e) => alert(e.target.error.name);
  reader.readAsText(file);
});

document.getElementsByClassName('editall')[0].onclick = function editall() {
  maindata = localStorage.getItem('posts');
  let editdata = prompt("Edit notes, then press OK", maindata);
  if (editdata == null) {
    document.location.reload(true);
  } else {
    localStorage.setItem('posts', editdata);
    alert("Success!");
    document.location.reload(true);
  }
}