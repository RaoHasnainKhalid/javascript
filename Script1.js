// JavaScript variable
//let name = 'Hasnain'; //string
//let age = '22'; //number
//let number = 163.5; //number
//let a = false; //boolean
//let lastname = null; // clear storage null
//console.log(name, age, number, a);
// Constant
//const price = 5000;
//console.log(price);

// Object
//let Car = {
    //Company: 'Honda',
    //    Colour: 'Red',
    //Model: '2022'
//}
// dot notation
 //Car.Company = 'audi';
// bracket notation 
 //let select = 'Model';
 //Car[select] = 2023;
// 
 //console.log(Car);

// array
//let person = ['Name', 'Age', 'Contact', 'Address' ];
//person[4] = 'CNIC';
//console.log(person);

//function

// function greet(name) {
//     console.log('Hasnain' + ' ' + name);
// }
// greet('Rao');
// // calculation
// function multiple(num) {
//     return num * num;
// }
// console.log(multiple(3));

//Operator 
// arithmatic +,-,*./
//  let a = 5;
//  let b = 7;
// let sum = a + b;
// let sub = a - b;
// let mul = a * b;
// let dvd = a / b;
// console.log(sum,sub,mul,dvd);

// // assignment operator ( = , +=)
// let x = 5;
// x += 2;
// console.log(x);

// // comparison operator (>,<,=>,<=)
// let y = 5;
// let z = 7;
// console.log(y<z);
// console.log(y>z);
// console.log(y<=z);
// console.log(y>=z);

// // Equality Operator
// let abc = 57;
// //Sronge  Equality (type + value )

// console.log(57 === 57);
// console.log('57' === 57);

// //Sronge  Equality (value )
// console.log( '57' == 57);

// // Ternary Operator 
// let price = 6000;
// let value = price>5000 ? 'Gold' : 'Silver';
// console.log(value);

// // Logical Operator ( && || !)
// let ab = true;
// let cd = false;
// let ef = ab && cd;
// let gh = !ef;
// console.log(ef);
// console.log(gh);
// console.log(ab || cd);

// Logical Operator With Non Boolen
// falsy ( empty , False , 0 , null , NaN , undefined)
// truthy
//  console.log(false || 'Hasnain'); 
//  console.log(false || 151);

// // Swapping 
//  let car = 'Red';
//  let bike = 'Black';
//  let color = car;
//  car = bike ;
//  bike = color;
//  console.log(car,bike);

// if else
// 6am to 12pm "Good Morning"
// 12pm to 6pm "Good Afternoon"
// otherwise "Good Evening"
  let hours = 19;
  if (hours >=6 && hours < 12 ){
    console.log("Good Morning");
 }
 else if(hours >=12 && hours < 18 )
 console.log("Good Afternoon");
 else 
 console.log("Good Evening");

// Switch Statment
let day = '8';
switch (day){
    case('1'):
    console.log("Monday");
    break;
    case('2'):
    console.log("Tuesday");
    break;
    case('3'):
    console.log("Wednesday");
    break;
    case('4'):
    console.log("Thursday");
    break;
    case('5'):
    console.log("Friday");
    break;
    case('6'):
    console.log("Saturday");
    break;
    case('7'):
    console.log("Sunady");
    break;
    default:
    console.log("Invalid");
}
 