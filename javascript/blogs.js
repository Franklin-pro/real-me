
const blogs = document.getElementById('form');

blogs.addEventListener('submit', (e) => {
    e.preventDefault();

    const processImage = (id, input) => {
        if (input.files && input.files[0]) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const articles = JSON.parse(localStorage.getItem("storeData")) || [];
            const article = articles.find((article) => article.id === id);
            article.blogImage = e.target.result;
            localStorage.setItem("storeData", JSON.stringify(articles));
          };
          reader.readAsDataURL(input.files[0]);
        }
      };

    let blogTitle = document.getElementById('blog-Title').value;
    let blogImage = document.getElementById('blog-image');
    let blogDescription = document.getElementById('blog-description').value;
    let id =new Date().getTime()

    const blogData = {
        id: id,
        blogTitle,
        blogImage :processImage(id,blogImage),
        blogDescription
    };
    let storeData = localStorage.getItem('storeData');

    storeData = storeData ? JSON.parse(storeData) : [];
    if (!Array.isArray(storeData)) {
        storeData = [];
    }

    storeData.push(blogData);

    localStorage.setItem('storeData', JSON.stringify(storeData));
    alert(blogImage.length);
});

