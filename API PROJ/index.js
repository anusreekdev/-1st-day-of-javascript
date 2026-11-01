
const btn=document.getElementById('btn')
const result=document.getElementById('result')


const getstudents=async()=>{
    const response=await axios.get("https://dummyjson.com/users")
    const students=await response.data.users
    console.log(students);
    students.forEach((element,index)=>{
        result.innerHTML+=`<tr>
              <td>${index+1}</td>
              <td>${element.firstName}</td>
              <td>${element.address.address}</td>
              <td>${element.age}</td>
              <td><button onClick="editStudent(${element.id})">edit</button>
              <button>delete</button></td>
        </tr>`
    })
    
}

btn.addEventListener('click',getstudents)


const addStudents=async()=>{
    const addname=document.getElementById('addname').value
    const email=document.getElementById('email').value
    const age=document.getElementById('age').value

    let studentsAdd={
        firstName:addname,
        email:email,
        age:Number(age)
    }
    let response=await axios.post("https://dummyjson.com/users/add",studentsAdd )
    let addingStudents=response.data
    console.log(addingStudents);
    
}
const button=document.getElementById('button')
button.addEventListener('click',addStudents)

 let editId=null
 const editStudent=async(id)=>{
    let response=await axios.get(`https://dummyjson.com/users/${id}`)
    let Editdata=response.data
    document.getElementById('addname').value=Editdata.firstName
    document.getElementById('email').value=Editdata.email
    document.getElementById('age').value=Editdata.age
    editId=id
 }


  const updateStudent=async()=>{
    let student={
        firstName:document.getElementById('addName').value,
        email:document.getElementById('email').value,
        age:document.getElementById('age').value
    }
    let response=await axios.put(`https://dummyjson.com/users/${editId}`,student)
console.log(response.data);

    alert('successfully updated')
  }
  const updatebtn=document.getElementById('updatebtn')
  updatebtn.addEventListener('click',updateStudent)