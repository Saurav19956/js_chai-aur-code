'use strict' 
/* after introducing ECMA Sript new thing like class, arrow function, Module, let, const --> it's newer js version if someone still have old code without Ecma script wala

also if varibale is defined without keyword it will throw error(ReferenceError: accountId is not defined)

*/

// this alert is is only wroking in browser console not in node becoz in browser there is dom manipulation which change structute , content and style , alternative in node console.log()
//alert("hello this is diaglog box for acknowledging by user and then will be access other step or code(in the context of deveopler)")


/* null and undefined 

null --> intensionally given vaule , called standalone value

undefined --> just declare variable and not assign any value

typeof null --> object
typeof undefined --> undefined
*/

accountId = 12345;
console.log(accountId)
console.table([typeof null, undefined]);

// primitive Datatype

/*

number range define
string --> ""
boolean --> true/false
bigInt. --> Range defined 

*/