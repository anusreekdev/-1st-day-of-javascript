

// 1 PRODUCT 
const btn=document.getElementById('btn')
const result=document.getElementById('result')
// GET METHOD
const getproducts=async()=>{
    const response=await axios.get('https://dummyjson.com/products')
    const products=await response.data.products
    // console.log(products);
    products.forEach((element,index)=>{
        result.innerHTML+=`<tr>
        <td>${index+1}</td>
        <td>${element.title}</td>
        <td>${element.category}</td>
        <td>${element.price}</td>
        <td><button onclick="editProducts(${element.id})">Edit</button>
        <button>Delete</button></td>
        
        
        </tr>`
    })
}
btn.addEventListener('click',getproducts)

// POST METHOD(Add)
const addProducts=async()=>{
const addTitle=document.getElementById('addTitle').value
const addCategory=document.getElementById('addCategory').value
const addPrice=document.getElementById('addPrice').value


const productAdd={
    title:addTitle,
    category:addCategory,
    price:Number(addPrice)
}
let response=await axios.post("https://dummyjson.com/products/add",productAdd )
let container=await response.data
console.log(container);

}
const button=document.getElementById('addBtn')
button.addEventListener('click',addProducts)

// EDIT Option

let edit=null
const editProducts=async(id)=>{
    const response=await axios.get(`https://dummyjson.com/products/${id}`)
    const editProduct=response.data
    document.getElementById('addTitle').value=editProduct.title
    document.getElementById('addCategory').value=editProduct.category
    document.getElementById('addPrice').value=editProduct.price
   edit=id
}

// UPDATE put

const updateProducts=async()=>{
    let product={
        title:document.getElementById('addTitle').value,
        category:document.getElementById('addCategory').value,
        price:document.getElementById('addPrice').value
    }
    const response=await axios.put(`https://dummyjson.com/products/${edit}`,product)
    let productss=response.data
    console.log(productss);
    alert("Successfully Updated")
    
}
updatebtn=document.getElementById('updatebtn')
updatebtn.addEventListener('click',updateProducts)


