const apiUrl = "/tutoriais";

// Objeto para o banco de dados de tutoriais baseado em JSON
var db_tutoriais = {};

// Objeto para o tutorial selecionado
var tutorialSelecionado = {};

function initLoginApp() {
    // PARTE 1 - INICIALIZA ID DO TUTORIAL A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    id = sessionStorage.getItem("tutorial");

    // PARTE 2 - INICIALIZA BANCO DE DADOS DE TUTORIAIS
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            db_tutoriais = data;
        })
        .catch((error) => {
            console.error("Erro ao ler tutoriais via API JSONServer:", error);
            displayMessage("Erro ao ler tutoriais");
        });
}

function selectedTutorial(id) {
  // Busca o tutorial no banco de dados pelo ID
  const tutorial = db_tutoriais.find((t) => t.id == id);

  // Atualiza o título, texto e vídeo na página
  if (tutorial) {
      document.getElementById("tituloTutorial").textContent = tutorial.titulo;
      document.getElementById("textoTutorial").textContent = tutorial.texto;
      document.getElementById("videoTutorial").src = tutorial.video;
  } else {
      console.error(`Tutorial com ID ${id} não encontrado.`);
  }
}
