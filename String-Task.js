// 1
// let word = "javascript"
// let vowels=0
// let consonants=0
// for(let i=0;i<word.length;i++){
//     if(word[i]=="a" || word[i]=="e" || word[i]=="i" || word[i]=="o" || word[i]=="u"){
//         vowels++
//     }else{
//         consonants++
//     }
// }
// console.log(vowels);3
// console.log(consonants);7


// 2




// 3
// let word = "hello"

// for(let i=0;i<word.length;i++){
//     console.log(word[i],i);
    
// }
// h 0
// e 1
// l 2
// l 3
// o 4

// 4
// let text = "Hello123World"
// let uppercase=0
// let lowercase=0
// let digits=0
// for(let i=0;i<text.length;i++){
//     if(text[i]>="A" && text[i]<="Z"){
//         uppercase++
//     }
//     else if(text[i]>="a" && text[i]<="z"){
//         lowercase++
//     }
//     else{
//         digits++
//     }
// }
// console.log(uppercase);2
// console.log(lowercase);8
// console.log(digits);3

// 5
// let word = "banana"; 
// let ch = "a";



// 7
// let sentence = "JavaScript is easy to learn";
// let word=sentence.split(" ").length
// console.log(word);
// 5

// 8
// let sentence = "I love learning JavaScript";
// let words=sentence.split(" ")
// let longest=""
// let shortest=words[0]
// for(let i=0;i<words.length;i++){
//     if(words[i].length>longest.length){
//  longest=words[i]
//     }
//    if(words[i].length<shortest.length){
//     shortest=words[i]
//    }
// }

// console.log(longest);javascript
// console.log(shortest);I

// 9
// let sentence = "I love coding"
// let word=sentence.split(" ")
// for(let i=0;i<word.length;i++){
//     let reverse=""
//     for(let j=word[i].length-1;j>=0;j--){
//         reverse=reverse+word[i][j]
//     }
//     console.log(reverse);
// }
// I
// evol
// gnidoc


// 2

// let word = "programming"
// let ch = "r"
//  let first=-1
//  let last=-1
//  for(let i=0;i<word.length;i++){
//     if(word[i]==ch){
//         if(first==-1){
//             first=i
//         }
//         last=i
//     }
    
//  }

//  console.log(first,last);1,4
 

// 13
// let word1 = "listen"; 
//  let word2 = "silent";
// let ans1=(word1.split("").sort().join(""));
// let ans2=(word2.split("").sort().join(""));
// if(ans1==ans2){
//     console.log(" is an anagram");
    
// }else{
// console.log("not an anagram");

// }
//  is an anagram
 
//   let word="banana"
//   let ch="a"
//   let res=""
//   for(let i=0;i<word.length;i++){
//     if(word[i]!=ch){
//         res=res+word[i]
//     }
//   }
//   console.log(res);bnn
  

// let word="javascript"
// let res=""
// for(let i=0;i<word.length;i++){
//     if(word[i]=="a" || word[i]=="e"|| word[i]=="i" || word[i]=="o" || word[i]=="u"){
//         res=res+"*"
//     }else{
//         res=res+word[i]
//     }
// }
// console.log(res);j*v*scr*pt

// let sentence="javascript is easy to learn"
// let word=sentence.split(" ").length
// console.log(word);5


// let sentence="javascript is easy to learn"
// let word=sentence.split(" ")
// let longest=""
// let shortest=word[0]
// for(let i=0;i<word.length;i++){
//     if(word[i].length>longest.length){
//         longest=word[i]
//     }
//      if(word[i].length<shortest.length){
//         shortest=word[i]
//     }
    
// }
// console.log(longest,shortest);
// javascript is



// numberinte sum kaanan
// let  text="abc234e56"
// let sum=0
// for(let i=0;i<text.length;i++){
//     if(text[i]>=0 && text[i]<=9){
//         sum=sum+Number(text[i])
//     }
// }
// console.log(sum);20


// let sentence="i currently learning mern"
// let word=sentence.split(" ")
// let count=0
// for(let i=0;i<word.length;i++){
//     if(word[i][0]=="a" || word[i][0]=="e" || word[i][0]=="i" || word[i][0]=="o" || word[i][0]=="u"){
//         count++
//     }
// }
// console.log(count);
// 1



// tasksss

// 1
// let marks = [85, 32, 67, 90, 25, 48];
// let highest=marks[0]
// let lowest=marks[0]
// let sum=0
// let passed=0
// for (let i=0;i<marks.length;i++){
//     if(marks[i]>highest){
//         highest=marks[i]
//     }
//     if(marks[i]<lowest){
//         lowest=marks[i]
//     }
//     if(marks[i]>=40){
//      passed++
//     }
//     sum=sum+marks[i]
    
// }
// let average=sum/marks.length
// console.log(highest);90
// console.log(lowest);25
// console.log(average);57.83
// console.log(passed);4


// 3

// let numbers = [12, 7, 9, 24, 36, 15, 8];
// let even=[]
// let odd=[]
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         even.push(numbers[i])
//     }
//     else {
//        odd.push(numbers[i])
//     }
// }
// console.log(even);[ 12, 24, 36, 8 ]
// console.log(odd);[ 7, 9, 15 ]


// 4
// let prices = [250, 400, 500, 100];

// let total = 0;
// let discount = 0;

// for (let i = 0; i < prices.length; i++) {
//     total = total + prices[i];
// }

// if (total >= 1000) {
//     discount = total * 0.10;
// }

// let finalAmount = total - discount;

// console.log( total);1250
// console.log( discount);125
// console.log( finalAmount);1125

// 6
// let numbers = [1, 2, 4, 6, 7, 10]

// for (let i = 1; i <= 10; i++) {
//     if (!numbers.includes(i)) {
//         console.log(i)
//     }
// }3
// 5
// 8
// 9

// 7
// let marks = [95, 72, 45, 32, 88, 65, 51, 28]

// let A = 0
// let B = 0
// let C = 0
// let fail = 0

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] >= 80) {
//         A++;
//     } else if (marks[i] >= 60) {
//         B++;
//     } else if (marks[i] >= 40) {
//         C++;
//     } else {
//         fail++;
//     }
// }

// console.log(A)2
// console.log(B)2
// console.log(C)2
// console.log(fail)2