// Get
const button=document.getElementById('btn')
const result=document.getElementById('result')
 
const getComments=async()=>{
    const response=await axios.get("https://dummyjson.com/comments")
    const comment=response.data.comments
    // console.log(comment);
    
    comment.forEach((element,index)=>{
        result.innerHTML+=`<tr>
        <td>${index+1}</td>
        <td>${element.body}</td>
        <td>${element.postId}</td>
        <td>${element.likes}</td>
        <td><button onclick="editComments(${element.id})">edit</button>
        <button>delete</button></td>
        
        </tr>`
    })
}
button.addEventListener('click',getComments)

// ADD POST
const addComments=async()=>{
    const addBody=document.getElementById('addBody').value
    const addpostId=document.getElementById('addpostId').value
    const addLike=document.getElementById('addLike').value

    const commentAdd={
        body:addBody,
        postId:Number(addpostId),
        likes:Number(addLike),
        userId:5
    }
    let response=await axios.post("https://dummyjson.com/comments/add",commentAdd)
    let commentAdding= await response.data
    console.log(commentAdding);
    
}
const addBtn=document.getElementById('addBtn')
addBtn.addEventListener('click',addComments)


// edit
let editId=null
const editComments=async(id)=>{
  const response=await axios.get(`https://dummyjson.com/comments/${id}`)
  const editcomment=await response.data
  document.getElementById('addBody').value=editcomment.body
  document.getElementById('addpostId').value=editcomment.postId
  document.getElementById('addLike').value=editcomment.likes
  editId=id
  
}
// update put
const updateComments=async()=>{
    const commentss={
        body:document.getElementById('addBody').value,
        postId:document.getElementById('addpostId').value,
        likes:document.getElementById('getLike').value
    }
    let response=await axios.put(`https://dummyjson.com/comments/${editId}`,commentss)
    let commentdata=await response.data
    console.log(commentdata);
    alert('successfully updated')

}
const updatebtn=document.getElementById('updatebtn')
updatebtn.addEventListener('click',updateComments)
