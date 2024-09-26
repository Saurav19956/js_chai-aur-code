
const accountId = 12324;

//let email = "saurav@gmail.com";
let email = "sam@gmail.com"

var password = "123456";

accountCity = 'Jaipur';  // without declaring key (const,var, let) reverse memory space ;

let accountState;  // only declare but not assign value will be undefined


// accountId= 12  Not allowed

email = "sam@gmail.com" // allowed

password = "123344"

accountCity = "bangluru"

console.table([accountId, email, password, accountCity, accountState]);


// only use let for functional and block scope , block scope is like {}, avoid var

// var create problem if same variable is define inside the function or block scope value will be changed through out file with same variable

