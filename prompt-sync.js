 const prompt=require('prompt-sync')();
//  let name=prompt("what is your name?")

//  console.log("my name is "+name);


//  what is your name?anusree
// my name is anusree

// const prompt=require('prompt-sync')();

// let age=Number(prompt("what is your age?"))
// console.log("my age is "+age);


// what is your age?18
// my age is 18

// let num=Number(prompt("enter a number"))
// for(let i=1;i<=10;i++){
//     console.log(`${i} X ${num} = ${i*num}`);
    
// }
// enter a number2
// 1 X 2 = 2
// 2 X 2 = 4
// 3 X 2 = 6
// 4 X 2 = 8
// 5 X 2 = 10
// 6 X 2 = 12
// 7 X 2 = 14
// 8 X 2 = 16
// 9 X 2 = 18
// 10 X 2 = 20

// let num=Number(prompt("enter a number"))

//     if(num%2==0){
//         console.log("even num");
        
//     }else{
//         console.log("odd num");
        
//     }
// enter a number 20
// even num

// let num=Number(prompt("enter a number"))
// let num1=Number(prompt("enter a number"))
// if(num>num1){
//     console.log(`${num} is greater`);
    
// }else{
//     console.log(`${num1} is greater`);
    
// }
// enter a number5
// enter a number7
// 7 is greater


// let num=Number(prompt("Enter  a value"))
//  let fact=1
//  for(let i=1;i<=num;i++){
//     fact=fact*i
//  }
//  console.log(fact);

//  Enter  a value5
// 120

// let num=Number(prompt("Enter a number"))
//  let reverse=0
//  let Orgnum=num
//  while(num>0){
//     let digit=num%10
//     reverse=reverse*10+digit
//     num=Math.floor(num/10)

//  }
//  if(Orgnum==reverse){
//     console.log(+Orgnum+ " is a palindrome ");
    
//  }else{
//     console.log(+Orgnum+ " not a palindrome ");
    
//  }
// Enter a number121
// 121 is a palindrome 

// let num=Number(prompt("Enter a number"))
// let num1=Number(prompt("Enter a number"))
// let num2=Number(prompt("Enter a number"))
// if(num>num1 && num>num2){
//     console.log(+num+ "is a large num");
    
// }else if(num1>num && num1>num2){
//     console.log(+num1+ " is a large num");
    
// }else{
//     console.log(+num2+ " is a large num");
    
// }
// Enter a number90
// Enter a number40
// Enter a number60
// 90is a large num