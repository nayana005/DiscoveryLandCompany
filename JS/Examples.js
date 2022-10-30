//let and const keywords//
let i = 10;
console.log(i);   

const PI = 3.14;
console.log(PI);  

//Arrow Function//
let sumOfTwoNumbers = (a, b) => a + b;
console.log(sum(10, 20)); 

//Multi-line Strings//
let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`

//Default Parameter//
  //ES6
let calculateArea = function(height = 100, width = 50) {  
    // logic
}

//ES5
var calArea = function(height, width) {  
   height =  height || 50;
   width = width || 80;
   // logic
}              


//Template Literals
let name = `My name is ${firstName} ${lastName}`

//Destructing Assifnments//
//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

//Object Destructuring
let person = {name: "Peter", age: 28};
let {nam, age} = person; // Object destructuring assignment
console.log(name, age);


//Enhanced Object Literals
function getMobile(manufacturer, model, year) {
    return {
       manufacturer,
       model,
       year
    }
 }
 getMobile("Samsung", "Galaxy", "2020");

 
 //Promises
 var asyncCall =  new Promise((resolve, reject) => {
    // do something
    resolve();
 }).then(()=> {   
    console.log('DON!');
 })


 //Classes
 class UserProfile {   
    constructor(firstName, lastName) { 
       this.firstName = firstName;
       this.lastName = lastName;     
    }  
     
    getName() {       
      console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);    
    } 
 }
 let obj = new UserProfile('John', 'Smith');
 obj.getName(); // output: The Full-Name is John Smith


 //Modules
 export var num = 50; 
export function getName(fullName) {   
   //data
};
import {num, getName} from 'module';
console.log(num); // 50


//Higher Order Function
//Function returning another function
const greet =  function(name){
    return function(m){
   
        console.log(`Hi!! ${name}, ${m}`);
    }
}
 
const greet_message = greet('Nayana');
greet_message("Welcome Home")

//Passing function as an argument
function greet(name){
    return `Hi!! ${name} `;
}
 
function greet_name(greeting,message,name){
       console.log(`${greeting(name)} ${message}`);
}
 
greet_name(greet,'Welcome To GeeksForGeeks','JavaScript');


//JS Strings
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

//JS String Methods
//1.String Length
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;

//2.Slice
let str2 = "Apple, Banana, Kiwi";
let part2 = str.slice(7, 13);

//3.SunString
let str3 = "Apple, Banana, Kiwi";
let part3 = str.substring(7, 13);

//4.Replacing string content
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

//5.onverting to Upper N lowerCase
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

//6.String Concat
let text4 = "Hello";
let text5 = "World";
let text3 = text1.concat(" ", text2);

//7.TRim n Smart
let text8 = "      Hello World!      ";
let text7 = text1.trim();
let text6 = text1.trimStart();

//8.CharAt
let tex = "HELLO WORLD";
let char = text.charAt(0);

//9.padStart padEnd
let text12 = "5";
let padded = text.padStart(4,"x");
let text11 = "5";
let padded2 = text.padEnd(4,"x");

//String Search Methods
//1.lastIndexOf
let text13 = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate");
//2.String Search
let str = "Please locate where 'locate' occurs!";
str.search("locate");
//3.String MATCH
let text14 = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
//4.matchAll
const iterator = text.matchAll("Cats");
//5.includes
let text15 = "Hello world, welcome to the universe.";
text.includes("world");
//6.startsWith
let text16 = "Hello world, welcome to the universe.";
text.startsWith("Hello");


//JS Arrays
//Looping Array Elemnys
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text18 = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
//Last Array Element
const fruits13 = ["Banana", "Orange", "Apple", "Mango"];
let fruit15 = fruits[fruits.length - 1];
//First Array Element
const fruits14 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
//Changing element
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
//Adding
const fruits18 = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); 
//New Array
const points12 = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];


//Array Methods
//1.Pop
const fruit12 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2 = fruits.pop();
//2.Push
const fruits21 = ["Banana", "Orange", "Apple", "Mango"];
let length2 = fruits.push("Kiwi");
//3.Shifting Elements
const fruits22 = ["Banana", "Orange", "Apple", "Mango"];
let fruit22 = fruits.shift();
//4.Changing elements
const fruits23 = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
//5.Array Length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
//6.Merging arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
//7,splice to remove
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
//sort reverse
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
//Numeric sort
const points123 = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});


//JS Map
//1.new Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
//2.Set
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
//forEach
let text31 = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
