const readmore = document.querySelector('.readmore')

const idParams = window.location.href.split("?id=")[1]
fetch(`https://realme-backend.onrender.com/blogs/${idParams}`)

.then(response=>{
return response.json()
})
.then((data)=>{
   readmore.innerHTML= `
   <div class="image-read">
   <img src="./images/cee.jpg" alt="dark">
</div>
<div class="all-description">
   <h1>${data.data.blogTitle}</h1>

   <p>${data.data.blogDescrition}</p>
               <div class="icons">
                   <b><i class="fa-solid fa-thumbs-up" style="color: #413f3f;"></i>10k</b>
                   <b><i class="fa-solid fa-thumbs-down" style="color: #413f3f;"></i>12</b>
                   <b><i class="fa-solid fa-comment" style="color: #413f3f;"></i>300</b>
           </div>
               
                
</div>
   `
})