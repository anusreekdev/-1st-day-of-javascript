
// const btn=document.getElementById('btn')
// const result=document.getElementById('result')
// btn.addEventListener('click',()=>{
//     fetch("https://dummyjson.com/users").then((response)=>{
//         response.json()
//         .then((data)=>{
//             console.log(data.users[0]);
//             // result.innerHTML=`<h1>${data.users[0].lastName}</h1>`
//             data.users.forEach((UserDetails)=>{
//              result.innerHTML+=`<h4>${UserDetails.lastName}</h4>`
//             })
//         })
//     })

// })


//   async await vch chythath

// const btn=document.getElementById('btn')
// const result=document.getElementById('result')

// btn.addEventListener('click',async()=>{
//     const response=await fetch('https://dummyjson.com/users')
//     const data= await response.json()
//     console.log(data.users);
//     data.users.forEach((UserNames)=>{
//         result.innerHTML+=`<h3>${UserNames.firstName}</h3>`
//     })
    
// })

// function formatil chyyunnath

// const btn=document.getElementById('btn')
// const result=document.getElementById('result')

// const getUsers=async()=>{
//     const response=await fetch('https://dummyjson.com/users')
//     const data=await response.json()
//     console.log(data);
//      const jar=data.users.map((UserDetails)=>{
//         result.innerHTML+=`<h4>${UserDetails.firstName}</h4>`
//         return UserDetails

//      })
    
//          console.log(jar); 
// }

// getUsers()