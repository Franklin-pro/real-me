const token = window.localStorage.getItem("token");
const table = document.querySelector(".tableusers");

fetch("https://localhost:3030/user", {
  headers: {
    "auth-token": token,
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    data.data.map((user, index) => {
      table.innerHTML += `
      
        <tr>
        <td>${index + 1}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        </tr>
        `;
    });
  });