const login=document.querySelector("#login")

login.addEventListener("submit",(e)=>{
    e.preventDefault();

    let email=document.querySelector("#emails").value;
    let password=document.querySelector("#passwords").value;

    const userData={
        email,
        password,
    };
   
    const api = `http://localhost:3000/user/login`;
    const postman = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };
    fetch(api, postman)
    .then(response => {
        console.log(response.status);
        return response.json();
    })
    .then((data)=>{
        if(data.token){
            const token = data.token;
            localStorage.setItem("token",token);
            if(data.data.user.role=="admin"){
              window.location.href="/admin.html";
            }
            else{
                alert('login successfully')
            }
        }
        else{
            alert(data.message);
            console.log(data)
        }
    })
        .catch(error => {
            console.error('Error:', error);
        });

});