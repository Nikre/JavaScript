function logMessage(){
    console.log("message");
}

// This is  another method for declaring a function
let anotherLogMessage = function(){
    console.log("message2");
}

let num = 0;
//I'm verifing that the reference passing 
function adder(number){
    number += 2;
    console.log(number);
}

function getText(){
    console.log(document.getElementById("textId").textContent);
}

console.log(num);
adder(num)
console.log(num);