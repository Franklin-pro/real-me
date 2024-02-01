
document.addEventListener('DOMContentLoaded', () => {
 
    const storedData = localStorage.getItem('storeData');
    if (storedData) {
        const blogDataArray = JSON.parse(storedData);

        const blogContainer = document.getElementById('blogContainer');

        blogDataArray.forEach(blogData => {
            const blogElement = document.createElement('div');
            blogElement.innerHTML = `
            <div class = "blogs-card">
            <div class="card1">
            <div class="image">
            <img src="${blogData.blogImage}" alt="Blog Image">
        </div>
        <div class="text">
        <h3>${blogData.blogTitle}</h3>
            <p>${blogData.blogDescription}</p>
           <a href="" class="read">readmore...</a>
        </div>
            </div>
            </div>
            `;
            blogContainer.appendChild(blogElement);
        });
    }
});
