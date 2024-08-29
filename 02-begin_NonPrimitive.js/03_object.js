/* declaration of object 

object came into picture in array only one way to access the element by proving arry's in dex and canot store value in pair form

1. object literal by which create multiple instance 
 2. throuigh constructor Object.create() called singleton

 by default key are string system treated as "name" in given ex.


 */

// object literal 
const jsUer = {
   name : "sam",
   "fullName": "sam gupta",
   age : 23,
   email : "sam@gmail.com"
}

/*
access of key's value
1. dot notation will not use more  if name property written as "name" will not access 
2. Square bracket notation ["key"] key must be pass in quote inside bracket

*/

//console.table([jsUer.name, jsUer['email'], jsUer['fullName']])

// update key's value

jsUer.email = "sam@google.com";
//console.log(jsUer.email);

// free object so thet changes will not refleacted 

//Object.freeze(jsUer);

// no chnages will be refected here 

jsUer.name = "suman Gupta";

//console.log(jsUer);

// add method 

jsUer.greeting = function(){
    console.log('Hello everyone');
    
}

// console.log(typeof greeting); // function
 console.log( jsUer.greeting()); // print msg


//  refernce of object's property access ---> this keyword with string interpolation


jsUer.greeting2 = function(){
    console.log(`hello everyone my name is ${this.name}`);
    
}

console.log(jsUer.greeting2());








