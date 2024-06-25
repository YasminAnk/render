// Variável para armazenar a URL da API de medicamentos
const apiUrl = "/tutoriais";

// Objeto para o banco de dados de medicamentos
let db_tutoriais = [];

// Função para inicializar o aplicativo de login
function initLoginApp() {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar dados da API");
                }
                return response.json();
            })
            .then((data) => {
                db_tutoriais = data;
                console.log("Tutoriais carregados:", db_tutoriais);
            })
            .catch((error) => {
                console.error("Erro ao ler tutoriais via API:", error);
                displayMessage("Erro ao ler tutoriais");
            });
    
}


// Função para exibir mensagens ao usuário
function displayMessage(message) {
    alert(message);
}

// Inicializa o aplicativo de login ao carregar a página
initLoginApp();
