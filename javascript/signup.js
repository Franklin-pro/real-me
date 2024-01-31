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
if(firstName.length ===0 || lastName.length ===0 || email.length ===0 || password.length ===0){
    alert('plz fill all fields')
}
    localStorage.setItem('userData', JSON.stringify(userData));

    document.getElementById('signup').reset();

    alert('Registration successful!');

}
