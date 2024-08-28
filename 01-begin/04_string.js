// 2 ways to declare the string 

const name = 'sam';
const name2 = new String('hello-everyone-this- is- saurav') // will get more property like length, toUpperCase, slice, substring , trim etc look at the browser console


/*
// adding string 1. concatinate, 2. String interpolation

console.log(name+ " "+ name2) // this syntax is old nad code redabiity is not good
console.log(`hello my name is ${name} and upper case of my name is ${name.toUpperCase()}`)

*/

// string prototype

let url = 'https://google.com%20sam';
console.log(url.replace('%20' ,'-')) // hover on replace method search value in string and replace with string return string;

let name3 = '          gungun       ';

//console.table([name3, name3.trim()]) // remove whiteSpace and new line char

//console.log(name2.charAt(2)) // find character at index
//console.log(name2.indexOf('o')) // find position of char
console.log(name2.substring(0,6)) // not assume negatibe number
console.log(name2.slice(0,4)) // ignore last index that is 4 
console.log(name2.split('-')) // convert string to array with defined seprator
