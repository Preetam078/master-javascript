const myInt = 5; 
const myFloat = 6.667;
console.log(typeof(myFloat)); //it will return "number" in both cases
//This is because JavaScript treats all numeric values, whether they are whole numbers or floating-point numbers, as the "number" data type.


if (true) {
    var test = true; // use "var" instead of "let"
  }
  alert(test); // true, the variable lives after if  (var has no block scope)

  if (true) {
    let test = true; // use "let"
  }
  alert(test); // ReferenceError: test is not defined


/**
 * 
 * Note :
 * Type coercion in JavaScript can sometimes lead to unexpected results, so it's mostly recommended to use the strict equality operator === instead of the loose equality operator ==.
 */


/**
 * You get NaN when the value cannot be computed or as a result of attempted number coercion (type conversion) of non-numeric value (such that undefined) 

const foo = 7 + undefined;
const too  = 7/0;
console.log(foo); // NaN
console.log(too); // Infinity 
 */
