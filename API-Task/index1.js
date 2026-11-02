// Get 
button=document.getElementById('viewbtn')
result=document.getElementById('result')
const getPosts=async()=>{
    const response=await axios.get('https://dummyjson.com/posts')
    const posts= await response.data.posts
    console.log(posts);
    
   posts.forEach((element,index)=>{
    result.innerHTML+=`<tr>
    <td>${index+1}</td>
    <td>${element.title}</td>
    <td>${element.tags}</td>
    <td>${element.views}</td>
   
    <td><button>edit</button>
    <button>delete</button></td>
    </tr>`
   }) 

}
button.addEventListener('click',getPosts)

// add post
const addPosts=async()=>{
    const addTitle=document.getElementById('addTitle').value
    const addTag=document.getElementById('addTag').value
    const addView=document.getElementById('addView').value

    const postAdd={
        title:addTitle,
        tags:[addTag],
        views: Number(addView)
    }
    const response=await axios.post('https://dummyjson.com/posts/add',postAdd)
    const postss=response.data
    console.log(postss);
    
}
const addBtn=document.getElementById('addBtn')
addBtn.addEventListener('click',addPosts)


