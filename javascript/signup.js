document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();
    addData();
});

function addData() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    const userData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword

    };

    const api = `https://realme-backend.onrender.com/user`;

    const postman = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    fetch(api,postman)
        .then(response => response.json())
        .then(data => {
           alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}