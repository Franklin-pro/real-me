function navOpen(){
    let navlinks=document.querySelector('.links');
    if(navlinks.className==='links'){
      navlinks.classList+=" active"
    }else{
      navlinks.className='links'
    }
  
  }
  // function login(){
  //   // let login = document.querySelector('login.html')
  //   alert('nono')
  // }
  // function reg(){
  // const reg = document.querySelector('').style.display="none";
  // if(reg){
  //   alert('are u sure')
  // }else{
    
  // }

  // }


  const passwordIn = document.querySelector("#password");
  const passwordeye = document.querySelector(".togglePassword");
  passwordeye.addEventListener("click", () => {
    if (passwordIn.type === "password") {
      passwordIn.type = "text";
      passwordeye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    } else {
      passwordIn.type = "password";
      passwordeye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    }
  });
  
  
  
 
