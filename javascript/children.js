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
            <td>${blogData.blogDescription}</td>
            <td>${blogData.blogImage}</td>
            <td><button onclick="deleteBlog(${index})">delete</button></td>
            <td><button onclick="updateBlog(${index})">update</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteBlog(index) {
    blogDataArray.splice(index, 1);
    localStorage.setItem('storeData', JSON.stringify(blogDataArray));
    displayBlogData(blogDataArray);
}

function updateBlog(index) {
    // Implement your logic to update a blog entry, if needed.
    // For example, you can pre-fill the form fields with existing data for editing
    alert('welcome')
}


function updateBlog(index) {
    // Implement your logic to update a blog entry, if needed.
    // For example, you can pre-fill the form fields with existing data for editing.
}