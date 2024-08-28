console.log(Math)// return object with property like random, ciel, floor, round, min, max etc

console.log((Math.random())) // return number in between 0 & 1(exclusoive 1)
console.log(Math.random()*10) // return number between 0 &10(exclusive 10)
console.log(Math.random()*10 +1) // return number between 1 and 10(inclusive 10)

const min =10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1)) +min); // range from 10 to <= 20 , +1 for avoid 0, if floor(0.1) 0, 

console.table([Math.abs(-4), Math.max(3,5,7), Math.floor(0.6), Math.floor(4.9), Math.ceil(4.9), Math.ceil(4.1), Math.round(5.8)]);


