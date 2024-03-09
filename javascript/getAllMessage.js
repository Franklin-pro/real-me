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
                <button onclick="deleteMessage('${messagex._id}')">delete</button>
              </div>
             
             </div>
   `
   })
})


// -------------------delete-------------------------

async function deleteMessage(id) {
  try {
      let req = await fetch(`https://branding-nhqf.onrender.com/contact/`+id, {
          method: "DELETE",
          headers: {
              "andela": toke
          }
      });

      if (req.ok) {
          let messageElement = document.getElementById(id);
          if (messageElement) {
              messageElement.remove();
          }
          console.log("Message deleted successfully.");
      } else {
          console.error("Failed to delete message:", req.status, req.statusText);
      }
  } catch (error) {
      console.error("Error deleting message:", error);
  }
  message
}
