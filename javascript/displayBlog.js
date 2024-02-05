document.addEventListener('DOMContentLoaded', () => {

    const storedData = localStorage.getItem('storeData');
    if (storedData) {
        const blogDataArray = JSON.parse(storedData);

        const blogContainer = document.getElementById('blogContainer');

        blogDataArray.forEach((blogData, index) => {
            const blogElement = document.createElement('div');
            blogElement.classList.add('blogs-card');
            blogElement.innerHTML = `
                <div class="card1">
                    <div class="image">
                        <img src="${blogData.blogImage}" alt="Blog Image">
                    </div>
                    <div class="text">
                        <h3>${blogData.blogTitle}</h3>
                        <p>${truncateText(blogData.blogDescription, 10)}</p>
                        <a href="#" class="read" onclick="showDetailedBlog(${index})">readmore...</a>
                    </div>
                </div>
            `;
            blogContainer.appendChild(blogElement);
        });
    }
});
function truncateText(text, maxLength) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLength);
    return truncatedWords.join(' ') + (words.length > maxLength ? '...' : '');
}

function showDetailedBlog(index) {
    const blogDataArray = JSON.parse(localStorage.getItem('storeData'));
    const detailedBlogContainer = document.getElementById('detailedBlog');
    detailedBlogContainer.innerHTML = `
    <div class="all-description">
  
        <h1>${blogDataArray[index].blogTitle}</h1>
        <p>${blogDataArray[index].blogDescription}</p>
        <div class="icons">
        <b><i class="fa-solid fa-thumbs-up" style="color: #413f3f;"></i>10k</b>
        <b><i class="fa-solid fa-thumbs-down" style="color: #413f3f;"></i>12</b>
        <b><i class="fa-solid fa-comment" style="color: #413f3f;"></i>300</b>
</div>
        
            <div class="comments">
            ${renderComments(blogDataArray[index].comments)}
            <input type="text" name="comment" id="commentInput" placeholder="add comment">
            <button onclick="addComment(${index})">comment</button>
        </div>
        </div>
    </div>
    </div>
    `;
    openModal();
}

function openModal() {
    const modal = document.getElementById('blogModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('blogModal');
    modal.style.display = 'none';
}

function renderComments(comments) {
    if (comments && comments.length > 0) {

      
        return comments.map(comment => `
            <div class="comment">
                <div class="comme">
                    <h1>${comment.author}</h1>
                    <p>${comment.text}</p>
                </div>
            </div>
        `).join('');
    } else {
        return '<p>No comments yet.</p>';
    }
}
function addComment(blogIndex) {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText !== '') {
        const newComment = {
            author: 'email',  // You can replace 'User' with the actual user's name
            text: commentText
        };

        blogDataArray[blogIndex].comments.push(newComment);
        localStorage.setItem('storeData', JSON.stringify(blogDataArray));
        showDetailedBlog(blogIndex);  // Refresh the detailed blog view to display the updated comments
    }
}