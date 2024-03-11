const blogs = document.getElementById('blog');
const spinner = document.querySelector(".spinner");
spinner.style.display = "none";
blogs.style.display = "block";
const idparam = window.location.href.split('?id=')[1];

fetch(`https://branding-nhqf.onrender.com/blog/${idparam}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        spinner.style.display = "none";
        blogs.style.display = "grid";
        blogs.innerHTML = `
        <div class="readmore">
            <div class="image-read">
                <img src="${data.data.blogImage}" alt="">
            </div>
            <div class="all-description">
                <h1>${data.data.blogTitle}</h1>
                <p>${data.data.blogDescription}</p>
                <div class="icons">
                    <button id="like-btn"><i class="fa-regular fa-thumbs-up"></i></button>
                    <button id="dislike-btn"><i class="fa-regular fa-thumbs-down"></i></button>
                    <span id="like-count">${data.data.likes}</span>
                    <span id="dislike-count">${data.data.dislikes}</span>
                </div>
            </div>
        </div>
        `;

        // Event listener for the like button
        const likeBtn = document.getElementById("like-btn");
        likeBtn.addEventListener("click", () => {
            handleLikeOrDislike(idparam, 'like');
        });

        // Event listener for the dislike button
        const dislikeBtn = document.getElementById("dislike-btn");
        dislikeBtn.addEventListener("click", () => {
            handleLikeOrDislike(idparam, 'dislike');
        });
    })
    .catch((error) => {
        console.error('Error fetching blog:', error);
    });

function handleLikeOrDislike(postId, action) {
    fetch(`https://branding-nhqf.onrender.com/blog/${postId}/${action}`, {
        method: 'POST'
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        document.getElementById('like-count').textContent = data.data.likes.length;
        document.getElementById('dislike-count').textContent = data.dislikes;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
