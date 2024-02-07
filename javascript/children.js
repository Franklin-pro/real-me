function blog(){
   
    const blogt= document.querySelector('.blog-post').style.display = 'flex';
    const insideDash= document.querySelector('.inside-dash').style.display = 'none';
    const messages= document.querySelector('.display-message').style.display = 'none';
    const blogtb= document.querySelector('.portfolio-container').style.display = 'none';
}
function port(){

    const blogt= document.querySelector('.portfolio-container').style.display = 'flex';
    const blogtab= document.querySelector('.blog-post').style.display = 'none';
    const insideDash= document.querySelector('.inside-dash').style.display = 'none';
    const messages= document.querySelector('.display-message').style.display = 'none';
}
function messages(){
    const blogtb= document.querySelector('.portfolio-container').style.display = 'none';
    const blogt= document.querySelector('.blog-post').style.display = 'none';
    const insideDash= document.querySelector('.inside-dash').style.display = 'none';
    const messages= document.querySelector('.display-message').style.display = 'flex';
}

function dashboard(){
    const blogtb= document.querySelector('.portfolio-container').style.display = 'none';
    const blogt= document.querySelector('.blog-post').style.display = 'none';
    const insideDash= document.querySelector('.inside-dash').style.display ='block';
    const messages= document.querySelector('.display-message').style.display = 'none';
}
function truncateText(text, maxLength) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLength);
    return truncatedWords.join(' ') + (words.length > maxLength ? '...' : '');
}


document.addEventListener('DOMContentLoaded', () => {

    let blogDataArray = loadBlogData();

    const blogForm = document.getElementById('blogForm');
    if (blogForm) {
        blogForm.addEventListener('submit', onSubmit);
    }

    displayBlogData(blogDataArray);
});

function loadBlogData() {
    const storedData = localStorage.getItem('storeData');
    return storedData ? JSON.parse(storedData) : [];
}

function saveBlogData(blogDataArray) {
    localStorage.setItem('storeData', JSON.stringify(blogDataArray));
}

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
            <td>${truncateText(blogData.blogDescription, 10)}</td>
            <td><i class="fa-solid fa-trash" style="color: #e71313;" onclick="deleteBlog(${blogData.id})"></i></td>
            <td><i class="fa-solid fa-pencil" style="color: green;" onclick="updateBlog(${blogData.id})"></i></td>
        `;
        tableBody.appendChild(row);
    });
}



function deleteBlog(blogId) {
    const blogDataArray = loadBlogData();
    const indexToDelete = blogDataArray.findIndex(blog => blog.id === blogId);

    if (indexToDelete !== -1) {
        blogDataArray.splice(indexToDelete, 1);
        saveBlogData(blogDataArray);
        displayBlogData(blogDataArray);
    }
}

// function onSubmit(event) {
//     event.preventDefault();

//     const blogTitle = document.getElementById('blogTitle').value;
//     const blogDescription = document.getElementById('blogDescription').value;
//     const blogImage = document.getElementById('blogImage').value;

//     const newBlogData = {
//         id: new Date().getTime(),
//         blogTitle,
//         blogDescription,
//         blogImage
//     };

//     blogDataArray.push(newBlogData);
//     saveBlogData(blogDataArray);

//     displayBlogData(blogDataArray);

 
//     blogForm.reset();
// }



