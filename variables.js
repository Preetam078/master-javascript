let message;
message = 'Hello';
console.log(message)

//use multiple declaration at same time (Not recommended)
let user = 'John', age = 25, message1 = 'Hello';

//OR  it is Recommended
let user1 = 'John';
let age1 = 25;
let message2 = 'Hello';

//define multiple variables in this multiline style
let user2 = 'John',
  age3 = 25,
  messagr4 = 'Hello';


// change value as many times as we want
let message4;
message4 = 'Hello!';
message4 = 'World!'; // value changed
alert(message);

//Limitation of Naming..
/*
 1. Only letters, digits, or the symbols $ and _
 2. first character must not be a digit
*/
let userName; //use Camelcase.S
let test123;

//the dollar sign '$' and the underscore '_' can also be used in names
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
console.log($ + _); // 3


//It is possible to use any language (Not recommended)
let имя = '...';
let 我 = '...';

//list of reserved words, which cannot be used as variable name
//let let = 5; // can't name a variable "let", error!
//let return = 5; // also can't name it "return", error!


//An assignment without "use strict"
num = 5; // the variable "num" is created if it didn't exist (Not recommended)
console.log(num); // 5


"use strict"; //Recommended
num = 5; // error: num is not defined 

//CONSTANT = value not change
const myBirthday = '18.04.1982';

//some use case of const 
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE; //donot need to remember the hexadecimal
alert(color); // #FF7F00
//capital-named constants are only used as aliases for “hard-coded” values.



