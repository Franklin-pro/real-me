const login=document.querySelector("#login")

login.addEventListener("submit",(e)=>{
    e.preventDefault();

    let email=document.querySelector("#emails").value;
    let password=document.querySelector("#passwords").value;

    const userData={
        email,
        password,
    };
   
    const api = `https://branding-nhqf.onrender.com/user/login`;
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
            if(data.user.role=="admin"){
                
                alert(data.message)
              window.location.href="/dashboard.html";
            }
            else{
                window.location.href ="/home.html"
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