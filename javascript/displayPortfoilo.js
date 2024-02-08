document.addEventListener('DOMContentLoaded', () => {
    const storeportData = localStorage.getItem('storeportData');

    if (storeportData) {
        const contactDis = JSON.parse(storeportData);

        const contactContainer = document.getElementById('portfolioContainer');

        contactDis.forEach((addPortfolio, index) => {
            const portElement = createportElement(addPortfolio, index);
            contactContainer.appendChild(portElement);
        });
    }
});

function createportElement(portfolio, index) {
    const portElement = document.createElement('div');
    portElement.classList.add('service-container');
    portElement.innerHTML = `
    
        <div class="card">
        <div class="imagex">
          <img src="${portfolio.portImage}" alt="">
        </div>
          <h2>${portfolio.portTitle}</h2>
          <p>${portfolio.portSummary}</p>
          <a href="#" class="read">VISIT WEB NOW<i class="fa-solid fa-arrow-right"></i></a>
        </div>

    `;

    return portElement;
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