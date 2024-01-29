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
  
  
  
  function login(){
    const login = document.querySelector('#login').style.display = 'flex';
    const colr = document.querySelector('#act').style.background = '#154081';
    const col = document.querySelector('#ac').style.background = '#eee';
    const signup = document.querySelector('#signup').style.display = 'none'
}

function signup(){
    const login = document.querySelector('#login').style.display = 'none';
    const colr = document.querySelector('#act').style.background = '#eee';
    const cor = document.querySelector('#act').style.color = '#000';
    const col = document.querySelector('#ac').style.background = '#154081';
    const signup = document.querySelector('#signup').style.display = 'flex'
}
