const blogs = document.getElementById('blog')

const idparam = window.location.href.split('?id=') [1]

    fetch(`https://branding-nhqf.onrender.com/blog/${idparam}`)

.then((response)=>{
    return response.json()
})

.then((data)=>{
   blogs.innerHTML=`

   <div class="readmore">
   <div class="image-read">
               <img src="${data.data.blogImage}" alt="">
             </div>
             <div class="all-description">
               <h1>${data.data.blogTitle}</h1>
               <p>${data.data.blogDescription}</p>
               <div class="icons">
                 <span><i class="fa-regular fa-thumbs-up"></i>100</span>
                 <span><i class="fa-regular fa-thumbs-down"></i>0</span>
                 
               </div>
             </div>
</div>
   
   `
})