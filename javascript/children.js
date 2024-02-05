function blog(){
   
    const blogt= document.querySelector('.blog-post').style.display = 'flex';
    const insideDash= document.querySelector('.inside-dash').style.display = 'none';
    const messages= document.querySelector('.display-message').style.display = 'none';
}
function messages(){
   
    const blogt= document.querySelector('.blog-post').style.display = 'none';
    const insideDash= document.querySelector('.inside-dash').style.display = 'none';
    const messages= document.querySelector('.display-message').style.display = 'flex';
}

function dashboard(){
    const blogt= document.querySelector('.blog-post').style.display = 'none';
    const insideDash= document.querySelector('.inside-dash').style.display ='block';
    const messages= document.querySelector('.display-message').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {

    const storedData = localStorage.getItem('storeData');
    let blogDataArray = [];

    if (storedData) {
        blogDataArray = JSON.parse(storedData);
        displayBlogData(blogDataArray);
    }

    const blogForm = document.getElementById('blogForm');
    if (blogForm) {
        blogForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const blogTitle = document.getElementById('blogTitle').value;
            const blogDescription = document.getElementById('blogDescription').value;
            const blogImage = document.getElementById('blogImage').value;

            const newBlogData = {
                blogTitle,
                blogDescription,
                blogImage
            };

            blogDataArray.push(newBlogData);

            localStorage.setItem('storeData', JSON.stringify(blogDataArray));

            displayBlogData(blogDataArray);

            blogForm.reset();
        });
    }
});

function displayBlogData(blogDataArray) {
    const tableBody = document.querySelector('.table table tbody');

    // Clear existing content
    tableBody.innerHTML = '';

    // Display blog data in the table
    blogDataArray.forEach((blogData, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${blogData.blogTitle}</td>
            <p>${truncateText(blogData.blogDescription, 10)}</p>
            <td>${blogData.blogImage}</td>
            <td><i class="fa-solid fa-trash" style="color: #e71313;" onclick="deleteBlog(${index})"></i></td>
            <td><i class="fa-solid fa-pen-to-square" style="color: #057a4d;" onclick="updateBlog(${index})"></i></td>
        `;
        tableBody.appendChild(row);
    });
}
function truncateText(text, maxLength) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLength);
    return truncatedWords.join(' ') + (words.length > maxLength ? '...' : '');
}

function deleteBlog(index) {
    blogDataArray.splice(index, 1);
    localStorage.setItem('storeData', JSON.stringify(blogDataArray));
    displayBlogData(blogDataArray);
}
const blogForm = document.getElementById('form');
if (blogForm) {
    const onSubmit = (event) => {
        event.preventDefault();

        const blogTitle = document.getElementById('blogTitle').value;
        const blogDescription = document.getElementById('blogDescription').value;
        const blogImage = document.getElementById('blogImage').value;

        const newBlogData = {
            blogTitle,
            blogDescription,
            blogImage
        };

        blogDataArray.push(newBlogData);

        localStorage.setItem('storeData', JSON.stringify(blogDataArray));

        displayBlogData();

        blogForm.reset();
    };

    blogForm.addEventListener('submit', onSubmit);
}



