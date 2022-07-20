function deletenotes() {
    var notesdata = JSON.parse(localStorage.getItem('posts'));
    countcircles(notesdata.length, notesdata);
}
    
function countcircles (circles, gooddata) {
    var step;
    for (step = 0; step < circles+1; step++) {
        let elemdata = gooddata[step]['name'];
        
        let $newLi = document.createElement('li');
        $newLi.textContent = elemdata;
        let $items = document.querySelector('#items');
        $items.appendChild($newLi);
    }
}