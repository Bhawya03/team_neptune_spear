function store() { //stores items in the localStorage
    var fname = document.getElementByclass('fn').value;
    var dob = document.getElementById('db').value;
    var eml = document.getElementById('em').value;
    var mob = document.getElementById('m').value;

    var g = document.getElementById('g').value;

    const car = {
        brand: brand,
        price: price,
    }

    window.localStorage.setItem(key, JSON.stringify(car));
    //converting object to string
}

function retrieveRecords() { //retrieves items in the localStorage
    var key = document.getElementById('retrieveKey').value; //gets key from user
    console.log("retrive records");
    var records = window.localStorage.getItem(key); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem() { //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(key) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage() { //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload = function () { //ensures the page is loaded before functions are executed.
    document.getElementByclass("input-field").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}