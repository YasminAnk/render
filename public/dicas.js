document.addEventListener("DOMContentLoaded", function () {
  const pages = [
    "./dicas-do-dia/dica01.html",
    "./dicas-do-dia/dica02.html",
    "./dicas-do-dia/dica03.html",
  ];

  document
    .getElementById("random-link")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const randomPage = pages[Math.floor(Math.random() * pages.length)];

      window.location.href = randomPage;
    });
});


