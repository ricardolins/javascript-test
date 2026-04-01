// alert('hi recardo welcome to javascript');

// console.log('hello world');

// let recardo = 'amazingd';

// console.log(recardo);

// let age = 20;

//////1. we cant use number before variable name
// let 3age = 20;

//////2. we never use & sign in variable name
// let waseem&ricardo = 'web developer';

//////3. we never use some reserved words
// let new = 27;

// /////////we can use this type of syntax for writing a variable name
// let firstName = 'malik';

// let last_name = 'abdullah';

// let $hello = 29;

// ///////////we have to choose meaningfull variable names
// let job1 = 'programmer';
// let job2 = 'teacher';

// let firstJob = 'programmer';
// let currentJob = 'teacher';

///////////////////////////////Data type//////////////////

/*

/////// In every programming language there are different types of values
////// In js there are total 5 types of DATA TYPES

//////1. Number: Floating point numbers (used for decimals and integers)
let age1 = 23;

//////2. String: Sequence of Characters (Used for text)
let firstName1 = "waseem";

//////3. Boolean: Logical type that can only be true or false (Used for taking decisions)
let fullAge = true;

//////4. Undefined: Value taken by a variable that is not yet defined ('enpty value')
let children;

//////5. Null Also means empty value
let country = null;

let javascriptIsFun = 'ali';
console.log(javascriptIsFun, typeof javascriptIsFun);

*/

/////////////////////////var, let and const////////////////////////

/*

///////var
var name1 = 'malik';
console.log(name1);

var name1 = 'recardo';
console.log(name1);

name1 = 'abdullah';
console.log(name1);

////////let
let name2 = 'malik';
console.log(name2);

// let name2 = 'recardo'; /////we cant rediclare the let variable
// console.log(name2);

name2 = 'abdullah';
console.log(name2);

///////const
const name3 = 'malik';
console.log(name3);

// const name3 = 'recardo'; /////we cant rediclare the const variable
// console.log(name3);

// name3 = 'abdullah'; //////we cant reassign new value to const variable
// console.log(name3);

*/

///////////////////////////Basic operators

let a = 10;
let b = 5;

console.log(a + b); /////addition
console.log(a - b); //////subtraction
console.log(a * b); ////// multiplication
console.log(a / b);////// division
console.log(a % b); //////remainder
console.log(a ** b); /////// power

let ageMalik = 2026 - 1994;
console.log(ageMalik);

let firstName = 'malik';
let lastName = 'abdullah';
console.log(my name is ${firstName} ${lastName});

////////////comparison operators (>, <, = )

let age1 = 30;
let age2 = 30;

console.log(age1 == age2);

const now = 2026;
let ageMalik1 = now - 1994;

console.log(ageMalik1);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

Store Mark's and John's mass and height in variables
Calculate both their BMIs using the formula (you can even implement both versions)
Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK
*/

//////test data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

//////test data 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);