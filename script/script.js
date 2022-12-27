// SELECTORS
const texto = document.querySelector("main>p");
const span = document.querySelector("main>h6>span");
const btn = document.querySelector("button");
//

// API URL
const urlApi = "https://api.adviceslip.com/advice";
//

// EVENT
btn.addEventListener("click", () => {
  fetch(urlApi).then(function (response) {
    response.json().then(function (data) {
      span.innerText = ` #${data.slip.id}`;
      texto.innerText = `"${data.slip.advice}"`;
    });
  });
});
