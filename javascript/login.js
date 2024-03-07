const login=document.querySelector("#login")

login.addEventListener("submit",(e)=>{
    e.preventDefault();

    let email=document.querySelector("#emails").value;
    let password=document.querySelector("#passWords").value;

    const userData={
        email,
        password,
    };
   
    const api = `https://realme-backend.onrender.com/user/login`;
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
                window.location.href="./index.html";
            }
        }
        else{
            alert(data.message);
        }
    })
        .catch(error => {
            console.error('Error:', error);
        });

});