// nature of this in Object 1. use to define current context of object

const userDetail = {
    name : "sam",
    email : "sam@gmail.com",
    phone : 7576566875,
    myName : function(){
        // console.log(`hello my name is , ${name}`); // name is not define
        console.log(`hello my name is , ${this.name}`); 
        
    }
}

// userDetail.myName()

// userDetail.name = "Amit Yadav";
// userDetail.myName()
// console.log(userDetail); 


///// this keyword in node js but in browser console --> window 

console.log(this); // empty object


//// behaviour of this in c ase of function 



function myName(){
    const name = 'YadavJi'
    console.log(`my name is ${this.name}`); // undefined using this
    console.log(this);  // fetch, performance, settimeOut etc
    
    
}

//myName()

 const myName1 = function (){
    const name = 'YadavJi'
    console.log(`my name is ${this.name}`); // undefined using this
    console.log(this);  // fetch, performance, settimeOut etc
    
    
}
//myName1()

const myName2 = ()=>{
    const name = 'YadavJi';
    console.log(`my name is ${this.name}`); // undefined 
    console.log(this); // empty object
    
    
}
//myName2()

// arrow synatx 

// if enclose in curly brace must explicitly mentionn. return keyword

const add = (num1, num2)=> {
    return num1+num2 
}

console.log(add(2,4));

const add1 = (num1, num2)=>  num1+num2  // no need to return for single statment 

console.log(add1(9,5));


const add2 = (num1, num2)=>  (num1+num2) // enclosed in brace 

console.log(add2(8,6));

// return object 

const add3 = (num1, num2)=>  {name: "hitesh "} // undefined 
console.log(add3());

const add4 = (num1, num2)=>  ({name: "hitesh "}) // correct syntax 
console.log(add4());








