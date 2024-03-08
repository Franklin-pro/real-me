const blogs = document.getElementById('blog')

const idparam = window.location.href.split('?id=') [1]

    fetch(`http://localhost:3000/blog/${idparam}`)

.then((response)=>{
    return response.json()
})

.then((data)=>{
   console.log(data)
})
