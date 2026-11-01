
// GET
// const btn=document.getElementById('btn')
// const result=document.getElementById('result')

// const getDetails=async()=>{
//     try{
//         let response=await fetch('https://dummyjson.com/users')
//         let data= await response.json()
//         let jar= data.users.map((userDetails)=>{
//             result.innerHTML+=`<h1>${userDetails.firstName}</h1>`
//             return userDetails
//         })
//      console.log(jar);
     
//     }catch(error){
//         console.log(error);
        
//     }
// }
// btn.addEventListener('click',getDetails) 

// POST

// const btn=document.getElementById('btn')
// const result=document.getElementById('result')
//   const addStudents=async()=>{
// const response=await fetch('https://dummyjson.com/users/add',
//     {
//         method:"POST",
//         headers:{
//               "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             firstName:"Anusree",
//             lastName:"K",
//             age:21
//         })
//     }
// )


// let data=await response.json()
// console.log(data);
// result.innerHTML=`<h1>Successfully sent ${data.firstName}</h1>`
//   }
// btn.addEventListener('click',addStudents)

//  PUT
// const btn=document.getElementById('btn')
// const result=document.getElementById('result')

// const updatePut=async()=>{
//     try{
//         let response=await fetch('https://dummyjson.com/users/1',{
//          method:"PUT",
//          headers:{
//             "Content-Type":"application/json"
//          },
//          body:JSON.stringify({
//             id:1,
//             firstName:"changed using put",
//             lastName:"Anusree"
//          })
         
//     })
//      let data=await response.json()
//      console.log(data);
//       result.innerHTML=`<h1>Success</h1>`
//     }catch(error){
//         console.log(error);
        
//     }
// }
// btn.addEventListener('click',updatePut)