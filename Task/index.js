const btn=document.getElementById('btn')
const result=document.getElementById('result')

btn.addEventListener('click',()=>{
    const xhr=new XMLHttpRequest
    xhr.open("GET","https://dummyjson.com/products")

    xhr.onload=()=>{
        const data=JSON.parse(xhr.responseText)
        // console.log(data);
        data.products.forEach((productsDetails)=>{
         result.innerHTML+=`<div class="card h-100 col-3" style="width: 18rem; ">
  <img src="${productsDetails.images}" class="card-img-top" alt="product-images">
  <div class="card-body">
    <h3 class="card-title">${productsDetails.title}</h3>
    <h6 class="card-text text-dark">${productsDetails.description}</h6>
    <a href="#" class="btn btn-primary w-75 bg-dark text-warning ">${productsDetails.price}</a>
  </div>
</div>`
        })
        
    }
    xhr.send()
})
