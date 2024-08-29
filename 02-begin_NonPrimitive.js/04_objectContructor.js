const jsUser = new Object();  // give  empty object
const user = {}

//console.log(jsUser, user);

// adding key value in object
jsUser.id = "123";
jsUser.name = "Amit";
jsUser.email = "amit@gmail.com"

//console.log(jsUser);

// nested object and how to access

const regularUser = {
    email : "arun@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Arun",
            lastName : "Singh",
        }
    }
}

//console.log(regularUser.fullName.userFullName.lastName);

// if userFullName is not exist --> use opetaional chaninig , it avoid if else condition

// console.log(regularUser.fullName.userFullName?.complteName); //  undefined 
// console.log(regularUser.fullName.userFullName.complteName); // undefined 




// merging of object

const obj1 = {a: 1, b : 2};
const obj2 = {c: 3, d : 4};

const obj3 = {obj1, obj2}
//console.log(obj3); // same result with push ion array 

// using Object.access method becoz it return so store in another variable


//console.log(Object.assign({}, obj1, obj2)); // rare use 

// using spread op

const obj4 = {...obj1, ...obj2} // most use 
//console.log(obj4);

// console.log(Object.keys(jsUser)); // return array's of string convert obj into array
// console.log(Object.values(jsUser));
// console.log(Object.entries(jsUser)) // give keys : valu pair


// object destructing 

const {email, name} = jsUser; // it avoid jsuer.email, jsUser.name by repetation manner

console.log(email, name);

// similar for array 

// Api responsse --> array of object 
[{},{},{}]

// json  --> all keys must be stotre in striong 
// {
//     "key":"value",

// }


