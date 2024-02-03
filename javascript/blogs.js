
const blogs = document.getElementById('form');

blogs.addEventListener('submit', (e) => {
    e.preventDefault();

    let blogTitle = document.getElementById('blog-Title').value;
    let blogImage = document.getElementById('blog-image').value;
    let blogDescription = document.getElementById('blog-description').value;

    const blogData = {
        blogTitle,
        blogImage,
        blogDescription
    };
    let storeData = localStorage.getItem('storeData');

    storeData = storeData ? JSON.parse(storeData) : [];
    if (!Array.isArray(storeData)) {
        storeData = [];
    }

    storeData.push(blogData);

    localStorage.setItem('storeData', JSON.stringify(storeData));
    alert('blogs posted successfully');
});

