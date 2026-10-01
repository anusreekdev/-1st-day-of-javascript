
// 1 string length
//  let word="Mernstack"
//  console.log(word.length-1);
//  8
 

// 2 toUpperCase method
// let name2="anusree"
// let update=name2.toUpperCase()
// console.log(update);
// ANUSREE

// 3 trim  space remove chyyan vndii

// let answer="  YeS "
// let update=answer.trim().toLowerCase()
// console.log(update);
// yes


// 4 includes indo ennariyaan 
// let message="hello welcome"
// console.log(message.includes(" "));
// true


// 5 statsWith







// 6 slice oru portion mattan vndi
// let names="anusree"
// let update=names.slice(0,3)
// console.log(update);
// anu 

// 7 replace 
// let string="hello mern"
// let res=string.replace("mern","mernstack")
// console.log(res);
// hello mernstack

// a replace all
// let string="hello mern ,im currently learning mern"
// let res=string.replaceAll("mern","mernstack")
// console.log(res);
// hello mernstack ,im currently learning mernstack

// 8 concat
// let names="anusree"
// let names1=" sheeja"
// let res=names.concat(names1)
// console.log(res);
// anusree sheeja

// 9
// let name1=" mern  "
// let name2=" stack "
// let full=name1.concat(name2)
// // console.log(full);
// console.log(full.trim());
// mern   stack

// 10 split
// let word="i like learning mern stack"
// let update=word.split(",")
// console.log(update);
// [ 'i like learning mern stack' ]

// let word="i like learning mern stack"
// let update=word.split("")
// console.log(update);
// [
//   'i', ' ', 'l', 'i', 'k', 'e',
//   ' ', 'l', 'e', 'a', 'r', 'n',
//   'i', 'n', 'g', ' ', 'm', 'e',
//   'r', 'n', ' ', 's', 't', 'a',
//   'c', 'k'
// ]

// let word="i like learning mern stack"
// let update=word.split(" ")
// console.log(update);
// [ 'i', 'like', 'learning', 'mern', 'stack' ]

// 11 repeat
//  let names="sithu "
//  let res=names.repeat(5)
//  console.log(res);
//  sithu sithu sithu sithu sithu 

// 12 search
// let course="mern stack"
// let res=course.search("stack")
// console.log(res);
// 5

// let word="javascript"
// let count=0
// for(let i=0;i<word.length;i++){
//     if(word[i]=="a" || word[i]== "e" || word[i]=="i" || word[i]=="o" || word[i]=="u"){
//       count++  
//     }
        
   
// }
//  console.log(count);
// 3

// string reverse

const prompt=require('prompt-sync')()
// let words= prompt("Enter a word ")


// let letter=prompt("enter a letter ")
// let count=0
// for(let i=0;i<words.length;i++){
//     if(words[i]==letter){
//         count++
// }
// }


// console.log(count);

// let word=prompt("Enter a word : ") 
// let reverse=""
// for(let i=word.length-1;i>=0;i--){
//     reverse=reverse+word[i]
// }
// console.log(reverse);

// tucilac


// let word="banana"
// let res=word.split("").reverse().join("")
// console.log(res);
// ananab


// let word="malayalam"
// let reverse=""
// let Orgnum=word
// for(let i=word.length-1;i>=0;i--){
//     reverse=reverse+word[i]
   
// }
// console.log(reverse);

//  if(Orgnum==reverse){
//         console.log("palindrome");
        
//     }
//     else{
//         console.log("not a palindrome");
        
//     }


// malayalam
// palindrome

// let words="JAvAScript"
// let count=0
// for(let i=0;i<words.length;i++){
//     if(words[i]==words[i].toUpperCase())
//         count++
// }
// console.log(count);
// 4


//  let word="anusree12@"
//  let char=0
//  let num=0
//  let spl=0 
//  for(let i=0;i<word.length;i++){
//     if((word[i]>="A" && word[i]<="Z" || word[i]>="a" && word[i]<="z")){
//         char++
//     }
//     else if((word[i]>=0 && word[i]<=9)){
//         num++
//     }
//     else{
//         spl++
//     }
//  }
//  console.log(char,num,spl);
 
// 7 2 1

//  let word="banana"
 
//  for(let i=0;i<word.length;i++){
//  let count=0
//  for(let j=0;j<word.length;j++){
//     if(word[i]==word[j]){
//         count++
//     }
//  }
//  if(count==1){
//     console.log(word[i]);
//     break
//  }
//  }
// b
   

// let word="i am learning mern stack"
// let update=word.split(" ").length
// console.log(update);
// 5

// let  word=" i am learning javascript"
// let sentence=word.split(" ")
// let longest=""
// for(let i=0;i<sentence.length;i++){
//     if(sentence[i].length>longest.length){
//         longest=sentence[i]
//     }
// }
// console.log(longest);
// javascript

// let word="am currently learning mern"
// let sentence=word.split(" ")
// console.log(sentence);

// let shortest=sentence[0]
// for(let i=0;i<sentence.length;i++){
//     if(sentence[i].length<shortest.length){
//         shortest=sentence[i]
//     }
// }
// console.log(shortest);
// [ 'am', 'currently', 'learning', 'mern' ]
// am

// let word="i am learning mern"
// let res=word.split("").reverse().join(" ")
// console.log(res);
// n r e m   g n i n r a e l   m a   i

//  let sentence="Iam a quick learner"
//  let word=sentence.split(" ")
//  for(let i=0;i<word.length;i++){
//     let reverse=""
//     for(let j=word[i].length-1;j>=0;j--){
//         reverse=reverse+word[i][j]
//     }
//     console.log(reverse);
    
//  }
//  maI
// a
// kciuq
// renrael
 