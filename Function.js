//  function

// function morning(){
//     console.log("Goodmorning to all");
    
// }
// morning()
// Goodmorning to all
 

// parameter

// function welcome(name){
//     console.log("welcome " +name);
    
// }
// welcome("Sivajith")
// welcome Sivajith
 


// function add(num1,num2,num3){
//     return num1+num2+num3
// }
// console.log(add(10,20,30));60


// function welcome(name,age){
//     console.log("My name is " +name , " and age is " +age);
//     return name,age
// }
// welcome("Anusree",20)


// function greet(num1,num2){
//     return num1-num2
// }
// let update= greet(70,30)
// console.log(update);40

// function greet(num1,num2,num3){
//     return num1+num2+num3
// }
// let sum=greet(10,20,30)
// let average=sum/3
// console.log(average);20

// function greet(num1,num2){
//     return num1*num2
// }
// let mul=greet(10,20)
// console.log(mul);200


// task
// 1
// function square(num1){
//     return num1*num1
// }
// console.log(square(6));36

// 2
// function greet(price,quantity){
//     return price+quantity
// }
// let total=greet(1000,40)
// console.log(total);1040

// 3
// function salary(basic,bonus){
//     return basic+bonus
// } 
// let total=salary(24000,3000)
// console.log(total);27000

// 4
// function calculatearea(num1,num2){
//     return num1*num2
// }
// let mul=calculatearea(10,5)
// console.log(mul);50



// function checkAge(age){
// if(age>=18){
//     return "you are eligible to vote"
// }
// else{
//    return "you are not eligible to vote"
// }
// }
// console.log(checkAge(16));you are not eligible to vote


// function largest(num1,num2){
//     if(num1>num2){
//         return +num1+ " is greater"
//     }
//     else{
//         return +num2+ " is greater "
//     }
// }
// console.log(largest(10,20));
// 20 is greater

// function num(num){
//     if(num>0){
//         return "positive num"
//     }
//     else if(num<0){
//         return "negative num"
//     }
//     else{
//         return "0 number"
//     }
// }
// console.log(num(-5));
// negative num


// function expression
// let add=function(num1,num2){
//     return num1+num2
// }
// console.log(add(30,50));80

// normal function

// let number=function(num1){
//     if(num1%2==0){
//          return +num1+ " is an even num"
//     }else{
//         return +num1+ " is an odd num"
//     }
       
// }
// console.log(number(29)); 
// 29 is an odd num

// arrow function
//  let add=(num1,num2)=>{
//     return num1+num2
//  }
//  console.log(add(100,99));199
 
// let bill=(price,quantity)=>{
//     return price*quantity
// }
// console.log(bill(1240,40));
// 49600


// const number=(num1,num2,num3)=>{
//     return num1+num2+num3
// }
// let sum=number(20,30,40)
// let average=sum/number.length
// console.log(average);30

//  callback function
// function greet(){
//     console.log("hello students");
    
// }
// function welcome(){
//     greet()
// }
// welcome()

// function calculate(num1,num2,callback){
//     let result= num1+num2
//     callback(result)
// }
// const add=(value)=>{
//     console.log(value);
    
// }
// calculate(20,30,add)50


// normal parameter

// const calcaluteBill=(price,quantity)=>{
//     console.log(price*quantity);
    
// }
// calcaluteBill(100,3)300

// default parameter
// const calcaluteBill=(price,quantity=1)=>{
//     console.log(price*quantity);
    
// }
// calcaluteBill(100,3)


// task
// 1
// const calculateSalary=(salary,bonus)=>{
//     console.log(salary+bonus);
    
// }
// calculateSalary(20000,2500)
// 22500

// 2
// const mul=(...a)=>{
//     let mul=1
//     for(let i=0;i<a.length;i++){
//         mul=mul*a[i]
//     }
//     return mul
// }
// console.log(mul(30,2,4));240


// 3

// const add=(...a)=>{
//     let sum=0
//     for(let i=0;i<a.length;i++){
//         sum=sum+a[i]
//     }
//     let average=sum/a.length
//     return average
// }
// console.log(add(10,20,30));
// 20



