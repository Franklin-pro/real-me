const blogs = document.getElementById('blog')


    fetch(`http://localhost:3000/blog`)

.then((response)=>{
    return response.json()
})

.then((data)=>{
    data.data.map((blogx)=>{
        console.log(blogx)
    blogs.innerHTML+= `
    <div class="blog-card">
    <div class="blog-image">
                <img src="${blogx.blogImage}" alt="">
              </div>
              <div class="blog-text">
                <h1>${blogx.blogTitle}</h1>
                <p>${blogx.blogDescription}</p>
                <div class="icons">
                  <span><i class="fa-regular fa-thumbs-up"></i>100</span>
                  <span><i class="fa-regular fa-thumbs-down"></i>0</span>
                  
                </div>
                <div class="blog-a">
                  <a href="./readmore.html?id=${blogx._id}">readmore</a>
                </div>
              </div>
</div>

    `
    })



})



