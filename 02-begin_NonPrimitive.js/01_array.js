// declartion os array , access array element thgrough index, and array's property like length can aces by dot or square bracket
// prptotype like method
const arr1 = [1,2,3,'hitesh',true];

const arr2 = new Array(1,2,3,4)
console.table([arr1,arr2, arr1[0], arr1.push(101), arr1.pop()]);

// shift(), unshift(), 
// slice and splice diff 
//1. slice -> return original array splice not 
// 2. slice(start, endIndsex), in slice --> endIndex(exclude), in splice include 

const arr3 = [ 1,4,56,6,7,8,8,5,5,6,6,565];

// const mySlice = arr3.slice(3, 7);
// console.log('slice', mySlice);
// console.log('original', arr3);


const mySplice = arr3.splice(3, 7);
console.log('splice', mySplice);
console.log('originalartyChanged', arr3); // return after remove from 3 to 7 index element(incuding 7)


