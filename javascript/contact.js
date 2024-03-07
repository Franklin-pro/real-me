const contact = document.getElementById('contact-me');

contact.addEventListener('submit', async (e) => {
    e.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    const addMessage = {
        fullName,
        email,
        phone,
        message
    };

    console.log(addMessage);

    const api = `https://realme-backend.onrender.com/message`;

    const postman = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addMessage)
    };

    try {
        const response = await fetch(api, postman);
        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        const responseData = await response.json();
        console.log(responseData);

        const storeMessage = JSON.parse(localStorage.getItem('storeMessage')) || [];
        storeMessage.push(addMessage);
        localStorage.setItem('storeMessage', JSON.stringify(storeMessage));

        alert('Message sent. Thank you.');
    } catch (error) {
        console.error('Error:', error.message);
        alert('Failed to send message. Please try again.');
    }
});
