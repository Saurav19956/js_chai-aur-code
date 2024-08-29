// merging array 3 ways 1. concat(), push(), spred ope ...
const arr1 = [ 1,23,4,true,'hitesh'];
const arr2 = [10,16,'sam','dam','ram'];

   // just copy and add entire array which is treated as index ;
   const myPushArr = arr1.push(arr2);  // push method return the new length of array  as we storing into variable

/*
console.log(myPushArr); // length 6
console.log(arr1); // return merging array 

// to access elemet here 
console.log(arr1[5][1]);

*/

/*

console.log('A', arr1.concat(arr2)); // if not storing into variable result wil same as push() like
const myconcat = arr1.concat(arr2)
console.log(myconcat);

*/

// using spread operator can add more than 2 array with ease syantax

const mySpread = [...arr1, ...arr2]
console.log(mySpread);

// to flatten the array 

const arrInsideArr = [1,2,34,[123,4,5,[1,3,5,6,7]]]
console.log(arrInsideArr.flat());

// chck of(), from(), isArray() method


