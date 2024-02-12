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
            <td><i class="fa-solid fa-pencil" style="color: green;" onclick="showEditForm(${blogData.id})"></i></td>
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
    alert('are you sure??')
}

function updateBlog(blogId, updatedData) {
    const blogDataArray = loadBlogData();
    const indexToUpdate = blogDataArray.findIndex(blog => blog.id === blogId);

    if (indexToUpdate !== -1) {
        blogDataArray[indexToUpdate] = {...blogDataArray[indexToUpdate], ...updatedData};
        saveBlogData(blogDataArray);
        displayBlogData(blogDataArray);
    }
}

function showEditForm(blogId) {
    console.log('Editing blog with ID:', blogId);
    const blogDataArray = loadBlogData();
    const blogData = blogDataArray.find(blog => blog.id === blogId);

    if (blogData) {
        document.getElementById('blogTitle').value = blogData.blogTitle;
        document.getElementById('blogDescription').value = blogData.blogDescription;
        // Check if the input element with ID 'blogImage' exists
        const blogImageInput = document.getElementById('blogImage');
        if (blogImageInput) {
            // Check if the input element is not of type 'file'
            if (blogImageInput.type !== 'file') {
                // Set the value if it's not of type 'file'
                blogImageInput.value = blogData.blogImage;
            } else {
                // Handle the case if it's a file input
                console.log("Cannot set value for file input element");
            }
        } else {
            console.error("Element with ID 'blogImage' not found");
        }

        const submitButton = document.getElementById('submitButton');

        if (submitButton) {
            submitButton.innerText = 'Update';
            submitButton.removeEventListener('click', onSubmit);
            submitButton.addEventListener('click', () => onUpdate(blogId));
        } else {
            console.error("Submit button not found");
        }
    }
}



function onUpdate(blogId, blogForm) {
    const blogTitle = document.getElementById('blogTitle').value;
    const blogDescription = document.getElementById('blogDescription').value;
    const blogImage = document.getElementById('blogImage').value;

    const updatedData = {
        blogTitle,
        blogDescription,
        blogImage
    };

    updateBlog(blogId, updatedData);

    const submitButton = document.getElementById('submitButton');
    submitButton.innerText = 'Submit';
    submitButton.removeEventListener('click', onUpdate);
    submitButton.addEventListener('click', () => onUpdate(blogId, document.getElementById('blogForm')));



    // blogForm.reset();
}
function onSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const blogTitle = document.getElementById('blogTitle').value;
    const blogDescription = document.getElementById('blogDescription').value;
    const blogImage = document.getElementById('blogImage').value;

    // Create a new blog object
    const newBlogData = {
        id: new Date().getTime(), // Generate a unique ID
        blogTitle,
        blogDescription,
        blogImage
    };

    // Save the new blog data
    const blogDataArray = loadBlogData();
    blogDataArray.push(newBlogData);
    saveBlogData(blogDataArray);

    // Update the displayed blog data
    displayBlogData(blogDataArray);

    // Reset the form
    blogForm.reset();
}
