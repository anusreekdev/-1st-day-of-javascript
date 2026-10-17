//   read 
// let students=[
//     {
//         name:"Anusree",
//         age:20,
//         course:"mern stack",
//     },
//     {
//         name:"Anamika",
//         age:21,
//         course:"mern stack",
//     },
//     {
//         name:"shivadu",
//         age:21,
//         course:" Data Analytics"
//     }
// ]
// console.log(students[1].course);

// update

// let students=[
//     {
//         name:"Anusree",
//         age:20,
//         course:"mern stack",
//     },
//     {
//         name:"Anamika",
//         age:21,
//         course:"mern stack",
//     },
//     {
//         name:"shivadu",
//         age:21,
//         course:" Data Analytics"
//     }
// ]
// students[0].name="Anusree K"
// console.log(students[0]);
// { name: 'Anusree K', age: 20, course: 'mern stack' }

// add chyyan
// let students=[
//     {
//         name:"Anusree",
//         age:20,
//         course:"mern stack",
//     },
//     {
//         name:"Anamika",
//         age:21,
//         course:"mern stack",
//     },
//     {
//         name:"shivadu",
//         age:21,
//         course:" Data Analytics"
//     }
// ]
// students.unshift({
//     name:"Sivajith",
//     age:21,
//     course:"AI",
// })
// console.log(students);
// [
//   { name: 'Sivajith', age: 21, course: 'AI' },
//   { name: 'Anusree', age: 20, course: 'mern stack' },
//   { name: 'Anamika', age: 21, course: 'mern stack' },
//   { name: 'shivadu', age: 21, course: ' Data Analytics' }
// ]

// delete chyyan
// delete students[0].name
// console.log(students[0]);

// students.splice(2,0,{
//     name:"Arun",
//     age:25
// })
// console.log(students);
// [
//   { name: 'Sivajith', age: 21, course: 'AI' },
//   { name: 'Anusree', age: 20, course: 'mern stack' },
//   { name: 'Arun', age: 25 },
//   { name: 'Anamika', age: 21, course: 'mern stack' },
//   { name: 'shivadu', age: 21, course: ' Data Analytics' }
// ]


// task
let students = [
    { name: "Akhil", age: 20, mark: 75 },
    { name: "Nisha", age: 21, mark: 88 },
    { name: "Vishnu", age: 22, mark: 92 }
];
// console.log(students[1]);
// { name: 'Nisha', age: 21, mark: 88 }
// students[0].mark=96
// console.log(students[0]);
// { name: 'Akhil', age: 20, mark: 96 }
// students.push({
//     name:"Anusree",
//     age:20,
//     mark:68,
// })
// console.log(students);
// [
//   { name: 'Akhil', age: 20, mark: 75 },
//   { name: 'Nisha', age: 21, mark: 88 },
//   { name: 'Vishnu', age: 22, mark: 92 },
//   { name: 'Anusree', age: 20, mark: 68 }
// ]
// students.pop()
// console.log(students);
// [
//   { name: 'Akhil', age: 20, mark: 75 },
//   { name: 'Nisha', age: 21, mark: 88 }
// ]

//  students.forEach((a)=>{
//     console.log(a.name,a.age,a.mark);
    
//  })
//  Akhil 20 75
// Nisha 21 88
// Vishnu 22 92
// let updatedstudents=students.map((a)=>{
//     return a.age=a.age+10
// })
// console.log(updatedstudents);
// [ 30, 31, 32 ]


// task 1
// let employees = [
//     { name: "Akhil", salary: 18000 },
//     { name: "Neha", salary: 22000 },
//     { name: "Rahul", salary: 25000 }
// ];
// 1
// employees.forEach((a)=>{
//    console.log(a.name);
// })
// Akhil
// Neha
// Rahul

// 2
// employees.forEach((a)=>{
//     console.log(a.name,a.salary);
    
// })
// Akhil 18000
// Neha 22000
// Rahul 25000

// 3
// employees.forEach((a)=>{
//     console.log(a.salary);
    
// })
// 18000
// 22000
// 25000


// 4
// employees.forEach((a)=>{
//     if(a.salary<=20000){
//         return a.salary
//     }
//     console.log(a.salary);
    
// })
// 22000
// 25000

// 5
// let updatedemployees=employees.map((a)=>{
//     return a.name
    
// })
// console.log(updatedemployees);
// [ 'Akhil', 'Neha', 'Rahul' ]

// 6
// let updatedemployees=employees.map((a)=>{
//     return a.salary
// })
// console.log(updatedemployees);
// [ 18000, 22000, 25000 ]

// 7
// let updatedemployees=employees.map((a)=>{
//     return a.salary+2000
// })
// console.log(updatedemployees);
// [ 20000, 24000, 27000 ]

// 8
// let updatedemployees=employees.map((a)=>{
//     return a.salary-1000
// })
// console.log(updatedemployees);
// [ 17000, 21000, 24000 ]



// let employees = [
//     { name: "Akhil", salary: 50000 },
//     { name: "Neha", salary: 10000 },
//     { name: "Rahul", salary: 55000 }
// ];
// let update=employees.filter((a)=>{
//     return a.salary>=10000 && a.salary<=50000
// })
// console.log(update);
// [ { name: 'Akhil', salary: 50000 }, { name: 'Neha', salary: 10000 } ]

// let update=employees.find((a)=>{
//     return a.salary>=10000 && a.salary<=50000
// })
// console.log(update);
// { name: 'Akhil', salary: 50000 }
// let update=employees.findIndex((a)=>{
//     return a.salary>=10000 && a.salary<=50000
// })
// console.log(update);0

// task
let employees = [ 
       { name: "Akhil", salary: 18000 },  
         { name: "Neha", salary: 22000 },  
           { name: "Rahul", salary: 25000 } 
        ];

        // 1
        // employees[2].salary=28000
        // console.log(employees[2]);
        // { name: 'Rahul', salary: 28000 }

        // 2
        // let update=employees.find((a)=>{
        //     return a.name=="Neha"
        // })
        // console.log(update.salary);
        // 22000

        // 3
        // let update=employees.findIndex((a)=>{
        //     return a.name=="Rahul"
        // })
        // // console.log(update);2
        // employees.splice(2,1)
        // console.log(employees);
        // [ { name: 'Akhil', salary: 18000 }, { name: 'Neha', salary: 22000 } ]
        // 4
//         employees.splice(2,0,{
//             name:"Meera",
//             salary:20000
//         })
//         console.log(employees);
//         [
//   { name: 'Akhil', salary: 18000 },
//   { name: 'Neha', salary: 22000 },
//   { name: 'Meera', salary: 20000 },
//   { name: 'Rahul', salary: 25000 }
// ]

// 5
// let update=employees.find((a)=>{
//     if(a.name=="Arun"){
//     console.log("found");
    
// }else{
//     console.log("not found");
    
// }
// })

// 1
// employees.forEach((a)=>{
//     console.log(a.name);
    
// })
// Akhil
// Neha
// Rahul
// 2
// employees.push({
//     name:"Sivajith", salary:26000
// })
// console.log(employees);
// [
//   { name: 'Akhil', salary: 18000 },
//   { name: 'Neha', salary: 22000 },
//   { name: 'Rahul', salary: 25000 },
//   { name: 'Sivajith', salary: 26000 }
// ]

// 3
// let update=employees.find((a=>{
//     return a.name=="Neha"
// }))
// console.log(update);
// { name: 'Neha', salary: 22000 }

// 4
// employees[0].salary=20000
// console.log(employees[0]);
// { name: 'Akhil', salary: 20000 }

// 5

// let update = employees.findIndex((a) => {
//     return a.name == "Neha";
// });
// // console.log(update);

// if (update !== -1) {
//     employees.splice(1, 1);
// }

// console.log(employees);
// [ { name: 'Akhil', salary: 18000 }, { name: 'Rahul', salary: 25000 } ]

