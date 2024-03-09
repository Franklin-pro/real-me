const message = document.getElementById('message')
const toke = window.localStorage.getItem("token");

const api = `https://branding-nhqf.onrender.com/contact`

fetch(api)
.then(response=>{
    return response.json()
}).then(data=>{
   data.data.map((messagex)=>{
   message.innerHTML +=`
   <div class="message" id="message">
              <div class="titles">
                <h2>${messagex.fullName}</h2>
                <h2>${messagex.email}</h2>
              </div>
              <div class="send">
                <p>${messagex.message}</p>
                <button onclick="deleteBlog('${messagex._id}')">delete</button>
              </div>
             
             </div>
   `
   })
})


// -------------------delete-------------------------


async function deleteBlog(id){
  let req = await fetch(`https://branding-nhqf.onrender.com/message/`+id,{
      method:"delete",
      headers:{
          "andela":toke
      }
      
  })

  let response = await req.json()
  console.log(response)
  
  message
}
