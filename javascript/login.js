const signlog = document.querySelector('.signlog')


signlog.addEventListener("submit", (e)=>{
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    const data = {
        email,
        password
    }

    const api = `https://dull-erin-tuna-cap.cyclic.app/api/v1/user/login`

    const setPostman = {
        method:'POST',

        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
    };
    fetch(api,setPostman)

    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        if(data.token){
            const token = (data.token)
           localStorage.getItem("token",token)
           if(data.data.user.role =="admin"){
            window.location.href ="./admin.html"
           }else{
            window.location.href ="./index.html"
           }
        }
        
        // localStorage.getItem("token",token)
      
      
    })
})