
const form = document.getElementById('fors');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const processImage = (id, input) => {
        if (input.files && input.files[0]) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const articles = JSON.parse(localStorage.getItem("storeportData")) || [];
            const article = articles.find((article) => article.id === id);
            article.portImage = e.target.result;
            localStorage.setItem("storeportData", JSON.stringify(articles));
          };
          reader.readAsDataURL(input.files[0]);
        }
      };

    let portTitle = document.getElementById('portTitle').value;
    let portImage = document.getElementById('portImage');
    let portSummary = document.getElementById('portSummary').value;
    let id =new Date().getTime()

    const blogData = {
        id: id,
        portTitle ,
        portImage :processImage(id,portImage),
        portSummary
    };
    let storeportData = localStorage.getItem('storeportData');

    storeportData = storeportData ? JSON.parse(storeportData) : [];
    if (!Array.isArray(storeportData)) {
        storeportData = [];
    }

    storeportData.push(blogData);

    localStorage.setItem('storeportData', JSON.stringify(storeportData));
    alert(blogImage.length);
});
