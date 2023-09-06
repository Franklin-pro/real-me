function navOpen(){
    let navlinks=document.querySelector('.links');
    if(navlinks.className==='links'){
      navlinks.classList+=" active"
    }else{
      navlinks.className='links'
    }
  
  }