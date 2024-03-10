const blogs = document.getElementById('blog')
const spinner = document.querySelector(".spinner");

spinner.style.display = "block";
blogs.style.display = "none";

    fetch(`https://branding-nhqf.onrender.com/blog`)

.then((response)=>{
    return response.json()
})

.then((data)=>{
    data.data.map((blogx)=>{
      spinner.style.display = "none";
      blogs.style.display = "grid";
    blogs.innerHTML+= `
    <div class="blog-card">
    <div class="blog-image">
                <img src="${blogx.blogImage}" alt="">
              </div>
              <div class="blog-text">
                <h1>${blogx.blogTitle}</h1>
                <p>$${truncateText(blogx.blogDescription, 10)}</p>
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

function truncateText(text, maxLength) {
  const words = text.split(' ');
  const truncatedWords = words.slice(0, maxLength);
  return truncatedWords.join(' ') + (words.length > maxLength ? '...' : '');
}
