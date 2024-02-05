document.addEventListener('DOMContentLoaded', () =>{
    const storeMessage  = localStorage.getItem('storeMessage');

    if(storeMessage){
        const contactDis = JSON.parse(storeMessage);

        const contactContainer = document.getElementById('messagesContainer');

        contactDis.forEach(addMessage => {
            const messageElement = document.createElement('div')
            messageElement.innerHTML =`
            <div class= "display">
            <h1>Messages</h1>
            <div class="mess">
                  <div class="vigo">
                    <h2>${addMessage.fullName}/</h2>
                   <h3>${addMessage.email}/</h3>
                   <h3>${addMessage.phone}</h3>
                  </div>
                  
                  <p>${addMessage.message}</p>
                  <i class="fa-solid fa-trash" style="color: #e71313;"></i>
                 </div>
                 </div>
            `;
            contactContainer.appendChild(messageElement)
        });
    }
})