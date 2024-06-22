const apiUrl = "/medicamentos";

// Objeto para o banco de dados de usuários baseado em JSON
var db_medicamentos = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
    fetch(apiUrl)
        .then((response) => {
            console.log("Resposta da API:", response); // Adiciona log para verificar a resposta da API
            if (!response.ok) {
                throw new Error("Erro ao buscar dados da API");
            }
            return response.json();
        })
        .then((data) => {
            db_medicamentos = data;
            //console.log("Medicamentos carregados:", db_medicamentos); // Adiciona log para verificar os dados carregados
        })
        .catch((error) => {
            console.error(
                "Erro ao ler medicamentos via API JSONServer:",
                error,
            );
            displayMessage("Erro ao ler medicamentos");
        });
}


function addMedicamento(nome, quantidade, date, horario, observacao) {
    let usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
    if (usuarioCorrenteJSON) {
        let usuarioCorrente = JSON.parse(usuarioCorrenteJSON);

        let medicamento = {
            user_id: usuarioCorrente.id,
            nome: nome,
            quantidade: quantidade,
            date: date,
            horario: horario,
            observacao: observacao,
        };

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(medicamento),
        })
            .then((response) => {
                console.log("Resposta do POST da API:", response); // Adiciona log para verificar a resposta do POST da API
                if (!response.ok) {
                    throw new Error("Erro ao inserir medicamento");
                }
                return response.json();
            })
            .then((data) => {
                db_medicamentos.push(medicamento);
                console.log("Medicamento adicionado:", medicamento); // Adiciona log para verificar o medicamento adicionado
                displayMessage("Medicamento inserido com sucesso");
            })
            .catch((error) => {
                console.error(
                    "Erro ao inserir medicamento via API JSONServer:",
                    error,
                );
                displayMessage("Erro ao inserir medicamento");
            });
    } else {
        alert("É preciso fazer login primeiro!");
    }
}

// Função para exibir mensagens ao usuário
function displayMessage(message) {
    alert(message); // Ajuste isso conforme necessário para o seu aplicativo
}

// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp();
