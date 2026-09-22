
// 1
// let rollnum=[15,26,79,31,42]
// for(let i=0;i<rollnum.length;i++){
//     if(rollnum[i]%2==0){
//            console.log(rollnum[i]);
//     }
// }
//  26
// 42

// 2
// let shopId=[203,209,211,312,549]
// for(let i=0;i<shopId.length;i++){
//     if(shopId[i]%2!=0){
//         console.log(shopId[i]);
        
//     }
// }
// 203
// 209
// 211
// 549

// 3
// let amount=[3691,4100,5350,6400]
// let sum=0
// for(let i=0;i<amount.length;i++){
//     if(amount[i]%2==0){
//         sum=sum+amount[i]
//     } 
// }
// console.log(sum);
// 15850

// 4
// let marks=[82,43,70,63,69,27]
// let sum=0
// for(let i=0;i<marks.length;i++){
//     if(marks[i]%2!=0){
//         sum=sum+marks[i]
//     }
   
// }
//  console.log(sum);
// 202

// 5
// let numbers=[30,40,70,20,-20,-10]
// let sum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>0){
//         sum=sum+numbers[i]
//     }
// }
// console.log(sum);
// 160

// 6
// let numbers=[10,-30,20,-5,-16]
// let sum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]<0){
//         sum=sum+numbers[i]
//     }
// }
// console.log(sum);
// -51

// 7
// let studentIDs=[90,91,92,93,94,95,96]
// let evenIDs=[]
// let oddIDs=[]
// for(let i=0;i<studentIDs.length;i++){
//     if(studentIDs[i]%2==0){
//         evenIDs.push(studentIDs[i])
//     }else{
//         oddIDs.push(studentIDs[i])
//     }
// }
// console.log(evenIDs);
// console.log(oddIDs);
// [ 90, 92, 94, 96 ]
// [ 91, 93, 95 ]

// 8
// let numbers=[20,21,22,23,24,25,26]
// let evensum=0
// let oddsum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         evensum=evensum+numbers[i]
//     }else{
//         oddsum=oddsum+numbers[i]
//     }
// }
// console.log(evensum);
// console.log(oddsum);
// 92,69

// 9
// let sales=[8999,4999,11000,6999,1300,3200]
// let evensum=0
// let oddsum=0
// let evencount=0
// let oddcount=0
// for(let i=0;i<sales.length;i++){
// if(sales[i]%2==0){
//     evensum=evensum+sales[i]
//     evencount++
// }else{
//     oddsum=oddsum+sales[i]
//     oddcount++
// }
        
// }
// // console.log(evensum);
// // console.log(oddsum);
// // 15500
// // 20997
// console.log(evencount);
// console.log(oddcount);
// 3
// 3


// let numbers=[300,270,79,80,33,54]
// let even=[]
// let odd=[]
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         even.push(numbers[i])
//     }
//     else{
//         odd.push(numbers[i])
//     }
// }
// console.log(even);
// console.log(odd);
// [ 300, 270, 80, 54 ]
// [ 79, 33 ]



// ForEach taskss

// 1
// let students = ['Arun', 'Rahul', 'Meera', 'Diya']
// students.forEach((val)=>{
//     console.log(val);
    
// })
// Arun
// Rahul
// Meera
// Diya

// 2
// let products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor']
// products.forEach((val,ind)=>{
//     console.log(ind+1,val);
    
// })
// 1 Laptop
// 2 Mouse
// 3 Keyboard
// 4 Monitor

// 3
// let marks = [45, 32, 76, 28, 90, 65]
// marks.forEach((val)=>{
//     if(val>=40){
//         console.log(val+ " passed");
        
//     }
// })
// 45 passed
// 76 passed
// 90 passed
// 65 passed

// 4
// let marks = [45, 32, 76, 28, 90, 65]
// marks.forEach((val)=>{
//     if(val>=40){
//         console.log(val+ " pass");
        
//     }
//     else{
//         console.log(val+ " fail");
        
//     }
// })
// 45 pass
// 32 fail
// 76 pass
// 28 fail
// 90 pass
// 65 pass

// 5
// let numbers = [10, 15, 22, 31, 40, 55]
// numbers.forEach((val)=>{
//     if(val%2==0){
//         console.log(val+ " is an even");
        
//     }
//     else if(val%2!=0){
//         console.log(val+ " is an odd ");
        
//     }
// })
// 10 is an even
// 15 is an odd
// 22 is an even
// 31 is an odd
// 40 is an even
// 55 is an odd 

// 6
// let prices = [500, 1000, 1500, 2000]
// prices.forEach((val)=>{
//     console.log(val-100);
    
// })
// 400
// 900
// 1400
// 1900

// 7
// let salaries = [15000, 22000, 18000, 25000, 12000]
// salaries.forEach((val)=>{
//     if(val>18000){
//         console.log(val);
        
//     }
// })
// 22000
// 25000

// 8
// let employees = ['Arun', 'Rahul', 'Meera', 'Diya']; 
// let salaries = [15000, 22000, 18000, 25000]
// employees.forEach((val,ind)=>{
//     console.log(val,salaries[ind]);
    
// })
// Arun 15000
// Rahul 22000
// Meera 18000
// Diya 25000

// 9
// let products = ['Laptop', 'Mouse', 'Keyboard'];
//  let prices = [50000, 800, 2500]
//  products.forEach((val,ind)=>{
//     console.log(ind+1,val,prices[ind]);
    
//  })
//  1 Laptop 50000
// 2 Mouse 800
// 3 Keyboard 2500

// 10
// let transactions = [1000, -500, 2000, -300, 1500]
// transactions.forEach((val)=>{
//     if(val>0){
//         console.log(val+ " is a deposit");
        
//     }else if(val<0){
// console.log(val+ " is a withdrawal");

//     }
// })
// 1000 is a deposit
// -500 is a withdrawal
// 2000 is a deposit
// -300 is a withdrawal
// 1500 is a deposit

// 11
// let marks = [45, 78, 32, 91, 67, 28, 84]
// marks.forEach((val)=>{
//     if(val>=50 && val<=80){
//         console.log(val);
        
//     }
// })
// 78
// 67

// 12
let products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor'];
 let prices = [50000, 800, 2500, 12000]
 products.forEach((val,ind)=>{
    console.log(ind+1,val,prices[ind]);
     if(prices[ind]>=10000){
        console.log(val+ " Expensive ");
     }else{
        console.log(val+ " Affordable");
        
     } 
 })
// 1 Laptop 50000
// Laptop Expensive
// 2 Mouse 800
// Mouse Affordable
// 3 Keyboard 2500
// Keyboard Affordable
// 4 Monitor 12000
// Monitor Expensive 