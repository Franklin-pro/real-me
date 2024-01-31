document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    loginUser();
});

function loginUser() {
    let loginEmail = document.getElementById('email-address').value;
    let loginPassword = document.getElementById('passwords').value;

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (loginEmail.length ===0 || loginPassword.length === 0){
        alert('please fill all fields')
    }

    if (storedUserData && storedUserData.email === loginEmail && storedUserData.password === loginPassword) {
        alert('Login successful!');
        window.location.href = "index.html"

    } else {
        alert('Invalid email or password. Please try again.');
    }


    document.getElementById('login');
}
