
// 1
// let prices=[120,250,80,450,150]
// for(let i=0;i<prices.length;i++){
//     console.log(prices[i]);
    
// }
// 120
// 250
// 80
// 450
// 150

// 2
// let sales=[500,750,300,900,450]
// let sum=0
// for(let i=0;i<sales.length;i++){
//     sum=sum+sales[i]
// }
// console.log(sum);
// 2900

// 3
//  let marks=[75,82,68,91,84]
//  let sum=0
//  for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i]
//  }
//  let average=sum/marks.length
//  console.log(average);
// 80

// 4
// let sales=[12000,18000,9500,25000,16000]
// let largest=sales[0]
// for(let i=0;i<sales.length;i++){
//     if(sales[i]>largest)
//         largest=sales[i]
// }
// console.log(largest);
// 25000

5
// let prices=[450,120,780,250,90]
// let smallest=prices[0]
// for(let i=0;i<prices.length;i++){
//     if(prices[i]<smallest)
//         smallest=prices[i]
// }
// console.log(smallest);
// 90

// 6
// let marks = [45, 72, 38, 90, 56, 29, 81]
// let evencount=0
// let oddcount=0
// for(let i=0;i<marks.length;i++){
//     if(marks[i]%2==0){
//        evencount++
//     }else{
//         oddcount++
//     }
// }
// console.log(`${evencount} even`);
// console.log(`${oddcount} odd`);
// 4 even
// 3 odd

// 7
// let passengers=[12,8,15,20,20]
// let count=0
// for(let i=0;i<passengers.length;i++){
//     count++
// }
// console.log(count);
// 5

// 8
// let orders = [101, 102, 103, 104, 105]
// for(let i=orders.length-1;i>=0;i--){
//     console.log(orders[i]);
    
// }
// 105
// 104
// 103
// 102
// 101

// 9
// let students = ['Arun', 'Meera', 'Rahul', 'Anu']
// let backupStudents=[...students]
// backupStudents.push("Vishnu")
// console.log(students);
// [ 'Arun', 'Meera', 'Rahul', 'Anu' ]
// console.log(backupStudents);
// [ 'Arun', 'Meera', 'Rahul', 'Anu', 'Vishnu' ]

// 10
// let salaries = [18000, 25000, 15000, 30000, 22000]
// let highest
// let secondhighest
// if(salaries[0]>salaries[1]){
//     highest=salaries[0]
//     secondhighest=salaries[1]
// }
// else{
//     highest=salaries[1]
//     secondhighest=salaries[0]
// }
// for(let i=2;i<salaries.length;i++){
//     if(salaries[i]>highest){
//         secondhighest=highest
//     highestst=salaries[i]}
//     else if(salaries[i]>secondhighest]){
//         secondhighest=salaries[i]
//     }
// }
// console.log(highest);
// console.log(secondhighest);


// let salaries = [18000, 25000, 15000, 30000, 22000]

// 11
//  let sales = [1200, 850, 1500, 700, 2100, 950]
//  let sum=0
//  let highest=sales[0]
//  let smallest=sales[0]
 
//  for(let i=0;i<sales.length;i++){
//     sum=sum+sales[i]
//     if(highest<sales[i]){
//     highest=sales[i]
//     }else if(smallest>sales[i]){
//         smallest=sales[i]
//     }
//  }
//  console.log(sum);
//  7300
// let average=sum/sales.length
// console.log(average);
// 1216.6666666666667
// console.log(highest);
// 2100
// console.log(smallest);
// 700

// 12
// let marks = [45, 78, 92, 61, 38, 84, 55, 97]
// let sum=0
// let highest=marks[0]
// let smallest=marks[0]
// let evencount=0
// let oddcount=0
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i]
//     if(highest<marks[i]){
//         highest=marks[i]
//     }else if(smallest<marks[i]){
//         smallest=marks[i]
//     }
//     if(marks[i]%2==0){
//         evencount++
//     }
//     else if(marks[i]%2!=0){
//          oddcount++
//     }
// }
// let average=sum/marks.length
// // console.log(sum);
// // 550
// // console.log(average);
// // 68.75
// // console.log(highest);
// // 97
// // console.log(smallest);
// // 84
// console.log(evencount);
// 4
// console.log(oddcount);
// 4

13
// let prices = [999, 499, 1499, 799, 1999, 599]
// let sum=0
// let exp=prices[0]
// let  secondexp=prices[1]
// let smallest=prices[0]

// if(prices[0]>prices[1]){
//     exp=prices[0]
//     secondexp=prices[1]
// }
// else{
//     exp=prices[1]
//     secondexp=num[0]
// }
// for(let i=0;i<prices.length;i++){
//     sum=sum+prices[i]
//   if(prices[i]>exp) {
//     secondexp=exp
//     exp=prices[i]
//   } else if(prices[i>secondexp]){
//     secondexp=prices[i]
//   }
//   if(smallest>prices[i]){
//     smallest=prices[i]
//   }
  
// }
// let average=sum/prices.length
// console.log(sum);
// 6394
// console.log(average);
// 1065
// console.log(exp);
// 1999
// console.log(secondexp);
// 1499
// console.log(smallest);
// 499

// 14
// let marks = [72, 85, 49, 91, 64, 78, 55]
// let sum=0
// let largest=marks[0]
// let secondlargest=marks[1]
// let smallest=marks[0]
// let evencount=[0]
// let oddcount=[0]
// if(marks[0]>marks[1]){
//     largest=marks[0]
//     secondlargest=marks[1]
// }else{
//     largest=marks[1]
//     secondlargest=marks[1]
// }
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i]
// if(largest<marks[i]){
//     secondlargest=largest
//     largest=marks[i]
// }else if(secondlargest<marks[i]){
//  secondlargest=marks[i]}
//  if(smallest>marks[i]){
//     smallest=marks[i]
//  }
//  if(marks[i]%2==0){
//     evencount++
//  }else if(marks[i]%2!=0){
//     oddcount++
//  }
// }
// let average=sum/marks.length
// // console.log(sum);
// // 494
// // console.log(average);
// // 70.57
// // console.log(largest);
// // 91
// // console.log(secondlargest);
// // 85
// // console.log(smallest);
// // 49
// console.log(evencount);
// 3
// console.log(oddcount);
// 4


// let cart=["Jean","Shirt","Shoes"]
// cart.splice(1,1)
// console.log(cart);
// [ 'Jean', 'Shoes' ]
// console.log(cart.indexOf("Socks"));
// -1
// console.log(cart.indexOf("Shirts"));
// 1
// let position=cart.indexOf("Jean")
// if(position!=-1){
//     cart.splice(position,1)
//     console.log("product removed");
    
// }else{
//     console.log("product not found");
    
// }
// product removed

// cart remove multiple elements

// let cart=["Jeans","Shirt","Shoes","Socks","Jeans","T-shirt"]
// let position=cart.indexOf("Jeans")
// while(position!=-1){
//     cart.splice(position,1)
//     position=cart.indexOf("Jeans")
// }
// console.log(cart); 
// [ 'Shirt', 'Shoes', 'Socks', 'T-shirt' ]
// note
// randennam indengil jeans and shoes indel position 1,position 2 kodukkua.rand loopil chyynm.

// let numbers=[20,-10,0,35,-5,0,12,-2,7]
//  let poscount=0
//  let negcount=0
//  let zerocount=0
//  for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>0){
//         poscount++
//     }else if(numbers[i]<0){
//         negcount++
//     }else{
//         zerocount++
//     }
//  }
//  console.log(poscount);4
//  console.log(negcount);3
//  console.log(zerocount);2
 
//  let values=[100,300,400,0,-500,-900,-300]
//  let profit=[]
//  let loss=[]
//  for(let i=0;i<values.length;i++){
//     if(values[i]>0){
//         profit.push(values[i])
         
//     }else if(values[i]<0){
//       loss.push(values[i])
//     }
//  }
//  console.log(profit);
//  console.log(loss);
//  [ 100, 300, 400 ]
//  [ -500, -900, -300 ]

// let shop=["pen","pencil","book","pen","paper","pen"]
//  let count=0
//  let searchprod="pen"
//  for(let i=0;i<shop.length;i++){
//     if(shop[i]==searchprod){
//         count++
//     }
//  }console.log(count);
 
// let num=[10,20,30,20,50]

// for(let i=0;i<num.length;i++){
//     if(num[i]==20){
// console.log(i);
//     }
// }

//  concat method
//   let number=[10,20,30,40]
//   let number1=[50,60,70,80]
//   let numbers=number.concat(number1)

//   console.log(numbers);
//   [
//   10, 20, 30, 40,
//   50, 60, 70, 80
// ]

// join
// let name=["abc","def","hij"]
// let result=name.join(" ")
// console.log(result);
// abc def hij
 

// at
//  let num=[10,20,30,40]
// //  let number=num.at(-1)
// //  console.log(number);40
//  console.log(num[num.length-1]);40
 

// isarray

// let fruits=["apple","mango","orange"]
// console.log(Array.isArray(fruits));true
 

// forEach()
// let fruits=["apple","mango","grapes"]
// fruits.forEach((value)=>{
//     console.log(value);
    
// })
// apple
// mango
// grapes

// let numbers=[20,30,40,50]
// numbers.forEach((value)=>{
//     console.log(value*2);
    
// })40
// 60
// 80
// 100

// let mark=[30,43,56,17,67]
// mark.forEach((value)=>{
//     if(value>=40){
// console.log(value+" pass");43 pass
// 56 pass
// 67 pass

//     }else{
//         console.log(value+ " fail");
        
//     }30 fail
// 43 pass
// 56 pass
// 17 fail
// 67 pass
// }) 

// let fruits=["apple","mango","grapes","orange"]
// fruits.forEach((value,ind)=>{
//     console.log(value,ind+1);
    
// })apple 1
// mango 2
// grapes 3
// orange 4

// let numbers=[2,3,4,5,6,7,8,9]
// numbers.forEach((value,ind)=>{
//     if(value%2==0){
//         console.log(ind+1,value + " it is an even num ");
        
//     }else{
//         console.log( ind+1,value + " it is a odd num");
        
//     }
// })1 2 it is an even num
// 2 3 it is a odd num
// 3 4 it is an even num
// 4 5 it is a odd num
// 5 6 it is an even num
// 6 7 it is a odd num
// 7 8 it is an even num
// 8 9 it is a odd num