function exportall() {
    let showexport = localStorage.getItem('posts');
    let mysymbol = `\\`;
    let doneexport = showexport.replace(mysymbol, "");
    alert("YOUR EXPORT IS READY! COPY AND SAVE TEXT IN NEXT WINDOW");
    alert(doneexport);
}

function importall() {
    let sendimport = prompt("Paste here your backup");
    localStorage.setItem('posts', sendimport);
    alert("SUCCESS!");
}

document.getElementsByClassName('export')[0].onclick = function () {
    exportall();
    document.location.reload(true);
}

document.getElementsByClassName('import')[0].onclick = function () {
    importall();
    document.location.reload(true);
}