// 1
// let numbers = [5, 10, 15, 20, 25]
// numbers.reverse()
// console.log(numbers);
// [ 25, 20, 15, 10, 5 ]

// 2
// let fruits = ["Apple", "Mango", "Orange"];
// fruits.push("Grapes")
// console.log(fruits);
// [ 'Apple', 'Mango', 'Orange', 'Grapes' ]

// 3
// let numbers = [10, 20, 30, 40, 50];
// numbers.pop()
// console.log(numbers);
// [ 10, 20, 30, 40 ]

// 4
// let names = ["Arun", "Meera", "Rahul"];
// names.unshift("Vishnu")
// console.log(names);
// [ 'Vishnu', 'Arun', 'Meera', 'Rahul' ]

// 5
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.shift()
// console.log(fruits);
// [ 'Banana', 'Mango', 'Orange' ]

// 6
// let numbers = [5, 10, 15, 20, 25];
// numbers.reverse()
// console.log(numbers);
// [ 25, 20, 15, 10, 5 ]

// 7
// let fruits = ["Apple", "Mango", "Orange"];
// fruits.push("Grapes")
// fruits.unshift("Banana")
// fruits.pop()
// fruits.shift()
// console.log(fruits);
// [ 'Apple', 'Mango', 'Orange' ]

// 8
// let numbers = [10, 20, 30, 40, 50, 60];
// console.log(numbers.length);
// 6

// 9
// let students = ["Arun", "Meera", "Rahul"];
// students.push("Anu")
// console.log(students);
// console.log(students.length);
// [ 'Arun', 'Meera', 'Rahul', 'Anu' ]
// 4

// 10
// let numbers = [10, 20, 30, 40, 50];
// numbers.pop()
// console.log(numbers);
// console.log(numbers.length);
// [ 10, 20, 30, 40 ]
// 4

// 11
// let numbers = [12, 25, 30, 41, 56, 73, 80];
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         console.log(numbers[i]);
        
//     }
// }
// 12
// 30
// 56
// 80

// 11
// let numbers = [15, 22, 37, 40, 51, 64, 79];
// let oddcount=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2!=0){
//         console.log(numbers[i]);
//         oddcount++
        
//     }
// }

// console.log(oddcount);4
// 15
// 37
// 51
// 79


// 12

// let numbers = [12, 45, 20, 33, 56, 71, 80];
// let evencount=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         evencount++
//     }
// }
// console.log(evencount);4

// 13
// let numbers = [17, 24, 35, 42, 51, 68, 73];
// let oddcount=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2!=0){
//         oddcount++
//     }
// }
// console.log(oddcount);4

// 13
// let numbers = [18, 25, 32, 47, 54, 61, 70];
// let evensum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//     evensum=evensum+numbers[i]}
// }
// console.log(evensum);174

// 14
// let numbers = [15, 28, 33, 46, 57, 62, 71];
// let oddsum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2!=0){
//         oddsum=oddsum+numbers[i]
//     }
// }
// console.log(oddsum);176

// 15
// let numbers = [12, -5, 20, -8, 15, -3, 30];
// let positivecount=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>0){
// positivecount++
//     }
// }
// console.log(positivecount);4

// 16
// let numbers = [25, -10, 18, -7, -20, 35, -4];
// let negcount=0
// for(let i=0;i<numbers.length;i++){
// if(numbers[i]<0){
//     negcount++
// }
// }
// console.log(negcount);4

// 17
// let numbers = [10, -5, 20, -8, 15, -3, 30];
// let possum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>0){
//         possum=possum+numbers[i]
//     }
// }
// console.log(possum);75

// 18
// let numbers = [12, -5, 20, -8, 15, -3, 30];
// let negsum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]<0){
//         negsum=negsum+numbers[i]
//     }
// }
// console.log(negsum);-16

// 19
// let numbers = [10, -4, 25, -7, 18, -2, 31, 6];
// let poscount=0
// let negcount=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>0){
//         poscount++
//     }else {
//         negcount++
//     }
// }
// console.log(poscount);5
// console.log(negcount);3

// 20
// let numbers = [12, -5, 20, -8, 15, -3, 30];
// let possum=0
// let negsum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>0){
//         possum=possum+numbers[i]
//     }else if(numbers[i]<0){
//         negsum=negsum+numbers[i]
//     }
// }
// console.log(possum);77
// console.log(negsum);-16


// 21
// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach((val)=>{
//     console.log(val);
    
// })
// 10
// 20
// 30
// 40
// 50


// 22
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.forEach((val,ind)=>{
//     console.log(ind+1,val);
    
// })
// 1 Apple
// 2 Banana
// 3 Mango
// 4 Orange

// 23
// let numbers = [12, 7, 20, 15, 30, 9];
// numbers.forEach((val)=>{
//     if(val%2==0){
//         console.log(val);10,20,30
        
//     }
// })

// 24
// let fruits1 = ["Apple", "Banana", "Mango"];
// let fruits2 = ["Orange", "Grapes", "Pineapple"];
//  let allfruits=fruits1.concat(fruits2)
// console.log(allfruits);
// [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes', 'Pineapple' ]

// 25
// let boys = ["Arun", "Rahul", "Vishnu"];
// let girls = ["Meera", "Anu", "Priya"];
// let students=boys.concat(girls)
// console.log(students);
// [ 'Arun', 'Rahul', 'Vishnu', 'Meera', 'Anu', 'Priya' ]

// 26
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [6, 7, 8];
// let allarr=arr1.concat(arr2,arr3)
// console.log(allarr);
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]


// 27
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let allfruits=fruits.join(" ")
// console.log(allfruits);
// Apple Banana Mango Orange

// 28
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let allfruits=fruits.at(-1)
// console.log(allfruits);
// Orange

// 29
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(Array.isArray(fruits));
// true

// 30
// let name = "Anu";
// console.log(Array.isArray(name));
// false