const token = window.localStorage.getItem("token");
const blogs = document.getElementById('form');

blogs.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const id = new Date().getTime();
        const imageData = await processImage(id, document.getElementById('blogImage'));

       
        const blogTitle = document.getElementById('blogTitle').value;
        const blogDescription = document.getElementById('blogDescription').value;
        const blogData = {
            id: id,
            blogTitle: blogTitle,
            blogImage: imageData,
            blogDescription: blogDescription
        };

      
        const response = await fetch("https://realme-backend.onrender.com/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify(blogData),
        });

        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        alert('New blog posted successfully');
    } catch (error) {
        console.log(error);
        alert('Error posting blog');
    }
});

const processImage = (id, input) => {
    return new Promise((resolve, reject) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                resolve(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        } else {
            reject("No file selected");
        }
    });
};
