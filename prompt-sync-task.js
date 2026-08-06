// 1
const prompt=require('prompt-sync')()
// let num=Number(prompt("Enter a number"))
// let lastdigit=num%10
// console.log(lastdigit);
// while(num>=10){
//     num=Math.floor(num/10)
// }
// console.log(num);
// let count=0
// while(num>0){
   
//     num=Math.floor(num/10)
//     count++
// }

// console.log(count);
// 2
// 4
// 1

// 2

// let num1=Number(prompt("Enter a number"))
// let num2=Number(prompt("Enter a number"))
// let num3=Number(prompt("Enter a number"))
// if(num1>num2 && num1>num3){
//     console.log("num1 is largest num");
    
// }
// else if(num2>num1 && num2>num3){
//     console.log("num2 is largest num");
    
// }
// else{
//     console.log("num3 is largest num");
    
// }
// Enter a number 10
// Enter a number45
// Enter a number30
// num2 is largest num


// 3
// let num=Number(prompt("Enter a number"))
// let a=0
// let b=1
// for(let i=1;i<=num;i++){
//     console.log(a);
//     let next=a+b
//     a=b
//     b=next
    
// }
// Enter a number 7
// 0
// 1
// 1
// 2
// 3
// 5
// 8


// 4
// let num=Number(prompt("Enter a number"))
// let sum=0
// let Orgnum=num
// while(num>0){
//     let digit=num%10
//     sum=sum+(digit*digit*digit)
//     num=Math.floor(num/10)
// }
// if(Orgnum==sum){
//     console.log(+Orgnum+ " is an armstrong num ");
    
// }else{
//     console.log(+Orgnum+ " is not an armstrong num");
    
// }
// Enter a number 153
// 153 is an armstrong num 

// 5

// let num=Number(prompt("Enter a number"))
// let count=0
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         count++
//     }
// }
// if(count==2){
//     console.log(`${num} is a prime number`);
    
// }
// else{
//     console.log(`${num} is not a prime number`);
    
// }
// Enter a number 17
// 17 is a prime number