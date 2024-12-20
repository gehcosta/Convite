// Lista de convidados e textos associados
const convidados = {
    "Eriel&Eliene": "Eriel e Eliene",
    "Andreia": "Andréia",
    "Gilvan": "Gilvan",
    "Leo&Kathy": "Léo e Kathy",
    "Kedy&Nicolly": "Kedy e Nicolly",
    "Jamil&Fabi": "Jamil e Fabi",
    "Matheus": "Matheus",
    "Juliana&Jhon": "Juliana, Jhon e crianças",
    "Joaquim&Maria": "Joaquim e Maria",
    "Lucas&Juliana": "Lucas, Juliana e filinha",
    "Silvana&Josue": "Silvana, Josué e Thiago",
    "Denner": "Denner",
    "Felipe&Andressa": "Felipe, Andressa e filinho",
    "Gustavo": "Gustavo",
    "Everson&Isabelle": "Everson e Isabelle",
    "Cleo": "Cléo e Família",
    "Anselmo": "Anselmo",
    "Anderson": "Anderson",
    "Gerson": "Gerson",
    "Elias": "Elias e família",
    "Marquinhos": "Marquinhos e esposa",
    "Ana": "Ana e marido",
    "Miriam": "Miriam",
    "Nidi": "Nidi",
    "Caique": "Caique e esposa",
    "Vinicius": "Vinícius e esposa"
};

const urlParams = window.location.pathname.split('/'); // Divide a URL
const convidadoNome = urlParams[urlParams.length - 1]; // Pega o último segmento da URL

const elementoConvidado = document.getElementById("convidadoNome");
if (convidados[convidadoNome]) {
    elementoConvidado.textContent = `Bem-vindo(a), ${convidados[convidadoNome]}!`;
}