function deletenotes() {
    let notesdata = `${localStorage.getItem('posts')}`;
    let gooddata = notesdata.replace(/\//, "");

    let circles = gooddata.length;

    var step;
    for (step = 0; step < circles+1; step++) {
        let elemdata = gooddata[step]['name'];
        
        let $newLi = document.createElement('li');
        $newLi.textContent = elemdata;
        let $items = document.querySelector('#items');
        $items.appendChild($newLi);
    }

// const
}