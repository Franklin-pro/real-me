document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();
    addData();
});

function addData() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const userData = {
        firstName,
        lastName,
        email,
        password
    };

    if(firstName.length ===0){
const fnameError = document.querySelector('.eroo');
fnameError.innerHTML = 'please firstname is required';
    }
const storeUser = JSON.parse(localStorage.getItem('storeUser')) || [];
storeUser.push(userData)
    localStorage.setItem('storeUser', JSON.stringify(storeUser));

    document.getElementById('signup').reset();

    alert('Registration successful!');

}
