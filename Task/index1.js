const btn=document.getElementById('btn')
const result=document.getElementById('result')

btn.addEventListener('click',()=>{
    const xhr=new XMLHttpRequest
    xhr.open("GET","https://dummyjson.com/posts")
    xhr.onload=()=>{
        const data=JSON.parse(xhr.responseText)
        // console.log(data);
        data.posts.forEach((postDetails)=>{
            result.innerHTML+=`<div class="card h-50" style="width: 18rem; ">
 
  <div class="card-body">
    <h1 class="card-title">${postDetails.title}</h1>
    <h5 class="card-text">${postDetails.body}</h5>
    <a href="#" class="btn btn-primary d-flex align-item-center bg-success  text-light">${postDetails.userId}</a>
  </div>
</div>`
        })
        
    }
    xhr.send()
})