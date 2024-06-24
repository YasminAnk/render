// Função para carregar os dados do tutorial do arquivo JSON
function carregarDadosTutorial() {
  fetch('../db.json') // Caminho para o arquivo db.json
    .then(response => response.json())
    .then(data => {
      // Considerando que há apenas um tutorial no array tutoriais
      const tutorial = data.tutoriais[0];

      // Atualizar o título do tutorial
      const tituloElement = document.getElementById('tituloTutorial');
      tituloElement.innerHTML = tutorial.titulo;

      // Atualizar o texto do tutorial
      const textoElement = document.getElementById('textoTutorial');
      textoElement.innerHTML = tutorial.texto;

      // Atualizar o link do vídeo
      const videoElement = document.getElementById('videoTutorial');
      videoElement.src = tutorial.video;
    })
    .catch(error => {
      console.error('Erro ao carregar dados do tutorial:', error);
    });
}

// Chamar a função para carregar os dados do tutorial ao carregar a página
carregarDadosTutorial();
