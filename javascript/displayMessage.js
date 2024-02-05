document.addEventListener('DOMContentLoaded', () => {
    const storeMessage = localStorage.getItem('storeMessage');

    if (storeMessage) {
        const contactDis = JSON.parse(storeMessage);

        const contactContainer = document.getElementById('messagesContainer');

        contactDis.forEach((addMessage, index) => {
            const messageElement = createMessageElement(addMessage, index);
            contactContainer.appendChild(messageElement);
        });
    }
});

function createMessageElement(message, index) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('display');
    messageElement.innerHTML = `
        <h1>Messages</h1>
        <div class="mess">
            <div class="vigo">
                <h2>${message.fullName}/</h2>
                <h3>${message.email}/</h3>
                <h3>${message.phone}</h3>
            </div>
            <p>${message.message}</p>
            <i class="fa-solid fa-trash" style="color: #e71313;" onclick="deleteMessage(${index})"></i>
        </div>
    `;

    return messageElement;
}

function deleteMessage(index) {
    const storedMessage = localStorage.getItem('storeMessage');

    if (storedMessage) {
        const contactDis = JSON.parse(storedMessage);

        contactDis.splice(index, 1);

        localStorage.setItem('storeMessage',JSON.stringify(contactDis));

        // Refresh the display
        const contactContainer = document.getElementById('messagesContainer');
        contactContainer.innerHTML = '';
        contactDis.forEach((addMessage, index) => {
            const messageElement = createMessageElement(addMessage, index);
            contactContainer.appendChild(messageElement);
        });
        if(deleteMessage){
            alert(`are u sure to delete`)
        }
    }
}
