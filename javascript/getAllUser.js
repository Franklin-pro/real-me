const tableUser = document.getElementById('tableuser')
const token = window.localStorage.getItem("token");

fetch(`https://branding-nhqf.onrender.com/user`,{
  headers:{
     "andela":token, 
  },
})



.then(response =>{
    return response.json()
})
.then((data)=>{
    data.data.map((user, index) => {
    
        tableUser.innerHTML += `
         <tr>
         <td>${index+1}</td>
         <td>${user.username}</td>
         <td>${user.email}</td>
        <td>${user.role}</td>
        <td><i id=${user._id} class="fa-solid fa-pen"></i></td>
        <td><i id=${user._id} class="fa-solid fa-trash" style="color: #FFD43B;"></i></td>
         </tr>`;
    })
})


const carduser = document.getElementById("userCard")

fetch(`https://branding-nhqf.onrender.com/user`,{
  headers:{
     "andela":token, 
  },
})

.then(response=>{
    return response.json()
})
.then((data)=>{
   carduser.innerHTML =`
    <div class="card" id="card">
    <i class="fa-solid fa-users" style="color: #ffffff;"></i>
    <b>${data.data.length}</b>
<h1>number of blogs</h1>
</div>
    `
})




const updateselect = document.querySelectorAll(".updata")

for(let i=0;i<updateselect.length;i++){

     updateselect[i].onclick=function(){
     form.style.display="block"
    let tr=this.parentElement.parentElement
   
    let td=tr.getElementsByTagName("td")
   
    let id=updateselect[i].getAttribute("id")
    let email = document.querySelector('#email');
    email.value=td[3].innerHTML;
    form.addEventListener("submit",(e)=>{
      e.preventDefault()
    const datas={
      firstname:firstname.value,
      lastname:lastname.value,
      email:email.value
    };
    const api=`https://branding-nhqf.onrender.com/user/${id}`
    const setPostman={
      method:"PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify((datas))
    };
    fetch(api,setPostman)
    .then((response)=>{
      return response.json()
    })
    .then((datas)=>{
     alert(datas.message)
    })
    .then((err)=>{
      alert(err)
    })
  })

}

  
}