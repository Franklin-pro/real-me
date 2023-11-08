const signup = document.querySelector('.sign-up')

signup.addEventListener("submit", (e)=>{
    e.preventDefault();

let firstName = document.querySelector('#firstName').value;
let  lastName = document.querySelector('#lastName').value;
let email = document.querySelector('#email').value;
let password = document.querySelector('#password').value;
let  confirmPassword = document.querySelector('#confirmPassword').value;
let message = document.querySelector('.message')

const data = {
    firstName,
    lastName ,
    email,
    password,
    confirmPassword

}


const api = `https://zealous-wasp-sun-hat.cyclic.app/api/v1/user`
const setPostman = {
    method:"POST",

    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data),
};
fetch(api,setPostman)

.then((response)=>{
    return response.json();
})

.then((data)=>{
  
    message .innerHTML =`
    <h5 class = "her">${data.message}</h5>
 `
})

.catch((err)=>{
    alert(err)
})
})
