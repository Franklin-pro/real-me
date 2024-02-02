const contact = document.getElementById('contact-me');

contact.addEventListener('submit', (e)=>{
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
    }

    console.log(addMessage)

    const storeMessage = JSON.parse(localStorage.getItem('storeMessage')) || []
    storeMessage.push(addMessage)
    localStorage.setItem('storeMessage',JSON.stringify(storeMessage))

    alert('message sent thank you')
})
