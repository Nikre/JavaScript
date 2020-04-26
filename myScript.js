let stringVar = "Sting in a variable";
alert(stringVar);

// Is allowed also a desclaretion like this:
let intVar = 65, 
    floatVar = 28.78;

// This is a constant 
const pi = 3.14; // this value can't change

// Like Python, but strange this quotes
let name = "Nicolo", 
    sentence = `Hello ${name}`,
    surname = "Monarca";

console.log(sentence);
console.log(name + " " + surname);

// null and undefined 
let num; //undefined
num = null; //null now is equal to null

// If statement

num = 5;
if(num >= 5){
    console.log("num is grater and equal to 5");
}
if(num === 5){// this is more stricted
console.log("num is equal to 5");
}
    
if(1 == "1"){ //converts 1.num in string
    console.log(true);
}else{
    console.log(false);    
}
