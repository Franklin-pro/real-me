function navOpen(){
    let navlinks=document.querySelector('.links');
    if(navlinks.className==='links'){
      navlinks.classList+=" active"
    }else{
      navlinks.className='links'
    }
  
  }
  function login(){
    // let login = document.querySelector('login.html')
    alert('nono')
  }
  function reg(){
  const reg = document.querySelector('').style.display="none";
  if(reg){
    alert('are u sure')
  }else{
    
  }

  }


  let passwordIn = document.querySelector('#password')
  let togglePassword = document.querySelector('.togglePassword')

  sign.addEventListener("click",()=>{
    if(passwordIn.type === "password"){
passwordIn.type ="text";
togglePassword.innerHTML = `<i class="fa-regular fa-eye yee"></i>`;
    }
    else{
      passwordIn.type = "password";
      togglePassword.innerHTML = `<i class="fa-regular fa-eye-slash yee"></i>`;
    }
  })