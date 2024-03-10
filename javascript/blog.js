const form = document.getElementById('form')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    blogData()
})

const processImage = (input) => {
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

async function blogData(){
    let blogTitle = document.getElementById('blogTitle').value;
    let blogImageInput = document.getElementById('blogImage'); 
    let blogDescription = document.getElementById('blogDescription').value;

    try {
        let blogImage = await processImage(blogImageInput); 
        const blogs = {
            blogTitle,
            blogImage,
            blogDescription
        };

        const api = `https://branding-nhqf.onrender.com/blog`;

        const postman = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogs)
        };

        const response = await fetch(api, postman);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error:', error.message);
    }
}