const table = document.getElementById('table')

const tokens = window.localStorage.getItem("token");

fetch(`https://branding-nhqf.onrender.com/blog`)

.then(response =>{
    return response.json()
})
.then((data)=>{
    data.data.map((blogx, index) => {
        table.innerHTML += `
        
        <tr>
        <td>${index+1}</td>
        <td>${blogx.blogTitle}</td>
        <td>$${truncateText(blogx.blogDescription, 10)}</td>
        <td>${blogx.CreatedDate}</td>
        <td><a href="update.html?id=${blogx._id}"><i class="fa-solid fa-pen"></i></td></a>
        <td><i  class="fa-solid fa-trash" style="color: #FFD43B;" onclick="deleteBlog('${blogx._id}')"></i></td>
        </tr>
        `
    })
})



function truncateText(text, maxLength) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLength);
    return truncatedWords.join(' ') + (words.length > maxLength ? '...' : '');
}

const card = document.getElementById("card")

fetch('https://branding-nhqf.onrender.com/blog')

.then(response=>{
    console.log(response.status)
    return response.json()
})
.then((data)=>{
   
    card.innerHTML =`
    <div class="card" id="card">
    <i class="fa-solid fa-blog" style="color: #ffffff;"></i>
    <b>${data.data.length}</b>
<h1>number of blogs</h1>
</div>
    `
})

// -----------------delete one-----------------


async function deleteBlog(id){
    let req = await fetch(`https://branding-nhqf.onrender.com/blog/`+id,{
        method:"DELETE",
        headers:{
            "andela":tokens
        }
        
    })

    let response = await req.json()
    console.log(response)
    
    table
}


// -----------------------update-----------------------

async function updateBlog(id) {
    
    const blogTitle = document.querySelector("#blogTitle").value;
    const blogDescription = document.querySelector("#blogDescription").value;
    const blogImage = document.querySelector("#blogImage").value;
   

  
    const data = {
        blogTitle,
        blogDescription,
        blogImage,
       
    };

    try {
        const response = await fetch(`https://branding-nhqf.onrender.com/blog/`+id, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
                "andela": tokens 
            },
            body: JSON.stringify(data) 
        });
        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to update blog');
        }
                                     
        const responseData = await response.json();
        console.log("Blog updated successfully:", responseData);

        
    } catch (error) {
        console.error('Error updating blog:', error);
        
    }
}
