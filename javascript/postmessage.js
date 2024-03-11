const message = document.getElementById('contact')

message.addEventListener("submit", (e)=>{
    e.preventDefault();
messageData()
})

function messageData() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    const messages = {
        fullName,
        email,
        message
    }
    console.log(messages)

    const api = `https://branding-nhqf.onrender.com/contact`
    const postman = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messages)
    };

    fetch(api,postman)
    .then(response=>{
        console.log(response.status)
        return response.json()
    })
    .then((data)=>{
        alert(data.message)
    })
}