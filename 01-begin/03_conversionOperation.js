let score = 'saurav';

//console.log(typeof score)

let scoreNumber = Number(score);
//console.log(scoreNumber)

/*
'33' --> number, type number
'33abc' --> NaN, type number
null --> 0, type Object
undefined --> NaN, undefined
boolean --> 1/0 for true and false, type boolean
'saurav' --> NaN, type string
*/


//convertv to boolean 

let isLogged = '33abc';
let booleanValue = Boolean(isLogged)
console.table([typeof(isLogged), booleanValue])

/*
 1/0 --> true/false, type number
  "" --> false, type string
  null --> false, type object
  undefined --> false, undefined
 'saurav'. --> true, string
 33abc --> true, string
*/


// convertion to string

// *********************************Operation*************************************

/*
2=3;
2-3;
2*3;
2**3;
2%3;
2/3;

*/

/*
4+3+'7' --> 77;
'4'+3+7 --> 437
*/
console.log('2'+4)

