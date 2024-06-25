// Variável para armazenar a URL da API de medicamentos
const apiUrl = "/medicamentos";

// Objeto para o banco de dados de medicamentos
let db_medicamentos = [];

// Função para inicializar o aplicativo de login
function initLoginApp() {
    const usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
    if (!usuarioCorrenteJSON) {
        //displayMessage("É necessário fazer login para verificar os medicamentos cadastrados 1!");
        //window.location.href = "./login-page/login-page.html"; // Redireciona para a página de login
    } else {
        const usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar dados da API");
                }
                return response.json();
            })
            .then((data) => {
                db_medicamentos = data;
                console.log("Medicamentos carregados:", db_medicamentos);
            })
            .catch((error) => {
                console.error("Erro ao ler medicamentos via API:", error);
                displayMessage("Erro ao ler medicamentos");
            });
    }
}

// Função para adicionar um medicamento
function addMedicamento(nome, quantidade, date, horario, observacao) {
    const usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
    if (!usuarioCorrenteJSON) {
        displayMessage("É preciso fazer login primeiro!");
        return; // Retorna se não houver usuário logado
    }
    const usuarioCorrente = JSON.parse(usuarioCorrenteJSON);

    const medicamento = {
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
            if (!response.ok) {
                throw new Error("Erro ao inserir medicamento");
            }
            return response.json();
        })
        .then((data) => {
            db_medicamentos.push(medicamento);
            console.log("Medicamento adicionado:", medicamento);
            //displayMessage("Medicamento inserido com sucesso");
        })
        .catch((error) => {
            console.error("Erro ao inserir medicamento via API:", error);
            displayMessage("Erro ao inserir medicamento");
        });
}

function deleteMedicamento(id){
    fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erro ao deletar medicamento");
        }
        return response.json();
    })
    .then(() => {
        displayMessage("Medicamento deletado com sucesso");
    })
    .catch((error) => {
        console.error("Erro ao deletar medicamento via API:", error);
        displayMessage("Erro ao deletar medicamento");
    });
}

// Função para exibir mensagens ao usuário
function displayMessage(message) {
    alert(message);
}

// Inicializa o aplicativo de login ao carregar a página
initLoginApp();
