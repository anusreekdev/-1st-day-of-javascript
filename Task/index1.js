const btn=document.getElementById('btn')
const result=document.getElementById('result')

btn.addEventListener('click',()=>{
    const xhr=new XMLHttpRequest
    xhr.open("GET","https://dummyjson.com/posts")
    xhr.onload=()=>{
        const data=JSON.parse(xhr.responseText)
        // console.log(data);
        data.posts.forEach((postDetails)=>{
            result.innerHTML+=`<div class="card h-50 col-3 ms-5" style="width: 20rem; ">
 
  <div class="card-body">
    <h2 class="card-title">${postDetails.title}</h2>
    <h6 class="card-text">${postDetails.body}</h6>
        <a href="#" class="btn btn-primary w-100 bg-success text-light ">${postDetails.userId}</a>
  </div>
</div>`
        })
        
    }
    xhr.send()
})