
// 1
// let fruits=["Apple","Orange","Mango"]
// fruits.push("Grapes")
// // console.log(fruits);
// [ 'Apple', 'Orange', 'Mango', 'Grapes' ]

// 2
// let numbers=[10,20,30,40]
// numbers.pop()
// console.log(numbers);
// [ 10, 20, 30 ]

// 3
// let students=["Rahul","Arun","Vishnu"]
// students.unshift("Akhil")
// // console.log(students);
// [ 'Akhil', 'Rahul', 'Arun', 'Vishnu' ]

// 4
// let colours=["Red","Blue","Green","Yellow"]
// colours.shift()
// // console.log(colours);
// [ 'Blue', 'Green', 'Yellow' ]

// 5
// let numbers=[10,20,40,50]
// numbers.splice(2,0,30)
// // console.log(numbers);
// [ 10, 20, 30, 40, 50 ]

// 6
// let fruits=["Apple","Orange","Mango","Grapes"]
// fruits.splice(2,1)
// console.log(fruits);
// [ 'Apple', 'Orange', 'Grapes' ]

// 7
// let cities=["Calicut","Kochi","Kannur"]
// cities.splice(1,1,"Trivandrum")
// console.log(cities);
// [ 'Calicut', 'Trivandrum', 'Kannur' ]

// 8
// let numbers=[10,20,30,40,50]
//  let container=numbers.slice(1,4)
//  console.log(numbers);
//  [ 10, 20, 30, 40, 50 ]
//  console.log(container);
//  [ 20, 30, 40 ]

// 9
// let products=["Pen","Book","Bag","Bottle"]
// console.log(products.includes("Bag"));
// true

// 10
// let products=["Pen","Book","Bag","Bottle"]
// console.log(products.includes("Laptop"));
// false

// 11
// let students=["Akhil","Rahul","Arun"]
// students.push("Vishnu")
// // console.log(students);
// // [ 'Akhil', 'Rahul', 'Arun', 'Vishnu' ]
//  students.unshift("Amal")
// //  console.log(students);
// //  [ 'Amal', 'Akhil', 'Rahul', 'Arun', 'Vishnu' ]
//  students.splice(2,1,"Rohan")
// //  console.log(students);
// //  [ 'Amal', 'Akhil', 'Rohan', 'Arun', 'Vishnu' ]
//  students.splice(3,1)
//  console.log(students);
//  [ 'Amal', 'Akhil', 'Rohan', 'Vishnu' ]
 
//  12
// let products=["Pen","Book","Bag","Bottle","Pencil"]
// products.splice(2,0,"Notebook")
// // console.log(products);
// // [ 'Pen', 'Book', 'Notebook', 'Bag', 'Bottle', 'Pencil' ]
// products.splice(4,1)
// // console.log(products);
// // [ 'Pen', 'Book', 'Notebook', 'Bag', 'Pencil' ]
// let jar=products.slice(0,3)
// // console.log(jar);
// // [ 'Pen', 'Book', 'Notebook' ]
// console.log(products.includes("Bag"));
// true

// 13

// let fruits= ["Apple", "Orange", "Mango", "Grapes", "Banana"]
// fruits.splice(2,1)
// // console.log(fruits);
// // [ 'Apple', 'Orange', 'Grapes', 'Banana' ]
// fruits.splice(2,0,"Pineapple")
// // console.log(fruits);
// // [ 'Apple', 'Orange', 'Pineapple', 'Grapes', 'Banana' ]
// fruits.splice(4,5,"Watermelon")
// console.log(fruits); 
// [ 'Apple', 'Orange', 'Pineapple', 'Grapes', 'Watermelon' ]
// let jar=fruits.slice(1,3)
// console.log(fruits);
// [ 'Apple', 'Orange', 'Pineapple', 'Grapes', 'Watermelon' ]
// console.log(jar);
// [ 'Orange', 'Pineapple' ]
// console.log(fruits.includes("Grapes"));
// true