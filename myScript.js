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
