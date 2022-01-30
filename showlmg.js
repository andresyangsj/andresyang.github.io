function howdy(yourFirstName) {
    alert("Howdy "+ yourFirstName);
}

function evalNumber(){
    var inputValue = prompt("Enter any five-digit number withou commas")
    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.")
    } else if (inputValue % 2 == 0){
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}

function changeTitle(){
    let selecteElement = document.getElementById("time display")
    selecteElement.innerText = new Date()
}

function hideFunction() { 
	document.getElementById("paragraph").style.display="none"; 
}