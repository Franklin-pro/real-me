document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    loginUser();
});

function loginUser() {
    let loginEmail = document.getElementById('email-address').value;
    let loginPassword = document.getElementById('passwords').value;

    const storedUserData = JSON.parse(localStorage.getItem('storeUser'));

    if (!loginEmail || !loginPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (storedUserData) {
        const user = storedUserData.find(user => user.email === loginEmail && user.password === loginPassword);

        if (user) {
            alert('Login successful!');
            window.location.href = "admin.html";
        } else {
            alert('Invalid email or password. Please try again.');
        }
    } else {
        alert('No user data found. Please sign up first.');
    }
}