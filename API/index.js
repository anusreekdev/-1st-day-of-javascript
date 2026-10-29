
// const button=document.getElementById('btn')
// const res=document.getElementById('result')


// button.addEventListener('click',()=>{
//     // step 1
//     const xhr=new XMLHttpRequest
//    xhr.open("GET","https://dummyjson.com/users")
      


//     // step 2
//     xhr.onload=()=>{
//         const data=JSON.parse(xhr.responseText)
//         console.log(data.users[2].lastName);
//         res.textContent=data.users[2].lastName
//     }

//     // step 3n
//     xhr.send()
// })


// innerhtml--->contentum html elements change aavan vendi

// const button=document.getElementById('btn')
// const res=document.getElementById('result')


// button.addEventListener('click',()=>{
//     // step 1
//     const xhr=new XMLHttpRequest
//    xhr.open("GET","https://dummyjson.com/users")
      


//     // step 2
//     xhr.onload=()=>{
//         const data=JSON.parse(xhr.responseText)
//         console.log(data.users[2].lastName);
//         res.innerHTML=`<h1>Age:${data.users[0].age}</h1>`
//     }

//     // step 3n
//     xhr.send()
// })


// loop vch chyth...foreach


//  const button=document.getElementById('btn')
// const res=document.getElementById('result')


// button.addEventListener('click',()=>{
//     // step 1
//     const xhr=new XMLHttpRequest
//    xhr.open("GET","https://dummyjson.com/users")
      


//     // step 2
//     xhr.onload=()=>{
//         const data=JSON.parse(xhr.responseText)
//         console.log(data.users[2]);

//        data.users.forEach((usersDetails)=>{
//         console.log(usersDetails.firstName);
//          res.innerHTML+=`<h1>${usersDetails.firstName}</h1>`
//        })
       
//     }

//     // step 3n
//     xhr.send()
// })

// readystate method vech
//  const button=document.getElementById('btn')
// const res=document.getElementById('result')


// button.addEventListener('click',()=>{
//     // step 1
//     const xhr=new XMLHttpRequest
//    xhr.open("GET","https://dummyjson.com/users")
      
 

//     // step 2
//     xhr.onload=()=>{
//  if(xhr.readyState==4){
//     console.log(xhr.readyState);
    
//     if(xhr.status==200){
//     const data=JSON.parse(xhr.responseText)
//         console.log(data.users[2]);

//        data.users.forEach((usersDetails)=>{
//         console.log(usersDetails.firstName);
//          res.innerHTML+=`<h1>${usersDetails.firstName}</h1>`
//        })
//   }else{
//     console.log(xhr.status);
//     res.innerHTML+=`<h1>${xhr.status}</h1>`
    
//   }
        
//  }
    
       
//     }

//     // step 3
//     xhr.send()
// })
 