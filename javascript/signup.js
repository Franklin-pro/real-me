const signup = document.getElementById('signup')

signup.addEventListener("submit", (e)=>{
    e.preventDefault()
    addUser()
})

function addUser(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confPassword = document.getElementById('confirmPassword').value;

    const userData = {
        username,
        email,
        password,
        confPassword
    }
console.log(userData)
    const api = `https://branding-nhqf.onrender.com/user`;

    const postman = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    fetch(api,postman)
        .then(response => response.json())
        .then(data => {
            console.log(data)
           alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

