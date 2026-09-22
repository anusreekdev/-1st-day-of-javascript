// 1
// let fruits=["Apple","Orange","Mango"]
// fruits.push("Grapes")
// console.log(fruits);
// [ 'Apple', 'Orange', 'Mango', 'Grapes' ]
// fruits.pop()
// console.log(fruits);
// [ 'Apple', 'Orange', 'Mango' ]
// fruits.unshift("Banana")
// console.log(fruits);
// [ 'Banana', 'Apple', 'Orange', 'Mango' ]
// fruits.shift()
// console.log(fruits);
// [ 'Apple', 'Orange', 'Mango' ]

// 2
// let colours=["Red","Blue","Green"]
// colours.push("Yellow")
// console.log(colours);
// [ 'Red', 'Blue', 'Green', 'Yellow' ]
// colours.unshift("Black")
// console.log(colours);
// [ 'Black', 'Red', 'Blue', 'Green', 'Yellow' ]
// colours.shift()
// console.log(colours);
// [ 'Red', 'Blue', 'Green', 'Yellow' ]
// colours.pop()
// console.log(colours);
// [ 'Red', 'Blue', 'Green' ]

// 3
// let cities=["Kochi","Trivandrum","Calicut"]
// cities.unshift("Kannur")
// [ 'Kannur', 'Kochi', 'Trivandrum', 'Calicut' ]
// console.log(cities);
// cities.push("Kollam")
// console.log(cities);
// [ 'Kannur', 'Kochi', 'Trivandrum', 'Calicut', 'Kollam' ]
// cities.shift()
// console.log(cities);
// [ 'Kochi', 'Trivandrum', 'Calicut', 'Kollam' ]
// cities.pop()
// console.log(cities);
// [ 'Kochi', 'Trivandrum', 'Calicut' ]



//  
// splice
// let flowers=["rose","jasmine","sunflower"]
// flowers.splice(1,1)
// // console.log(flowers);
// [ 'rose', 'sunflower' ]
// flowers.push("lotus")
// // console.log(flowers);
// [ 'rose', 'sunflower', 'lotus' ]
// flowers.splice(0,2)
// // console.log(flowers);
// [ 'lotus' ]

// // flowers.splice(0,0,"kiwi")
// // console.log(flowers);
// [ 'kiwi', 'lotus' ]

// let fruits=['apple',"orange","grapes","mango","kiwi"]
// console.log(fruits);

// fruits.splice(4,1,"jackfruit")
// // console.log(fruits);
// [ 'apple', 'orange', 'grapes', 'mango', 'jackfruit' ] 
// fruits.splice(0,1)
// // console.log(fruits);
// [ 'orange', 'grapes', 'mango', 'jackfruit' ]
// fruits.splice(0,0,"apple")
// // console.log(fruits);
// [ 'apple', 'orange', 'grapes', 'mango', 'jackfruit' ]
// // console.log(fruits);


// slice
// let fruits=['apple',"orange","grapes","mango","kiwi"]
// console.log(fruits);
//  let object=fruits.slice(2,5)
//  console.log(object);
//  [ 'grapes', 'mango', 'kiwi' ]
//  console.log(fruits);
//  [ 'apple', 'orange', 'grapes', 'mango', 'kiwi' ]
 
// console.log(fruits.indexOf("mango"));
// 3
// console.log(fruits.includes("orange"));
// true
// console.log(fruits.includes("pineapple"));
// false