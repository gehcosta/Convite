const urlString = window.location.href; // Obtém a URL completa
const nomeConvidado = urlString.split('/').pop(); // Extrai o nome da URL

console.log(nomeConvidado);

// let idConvidado;

// Requisição para verificar o convidado
// async function verificarConvidado() {
//     try {
//         const response = await fetch(`http://localhost:3000/api/convidado/${nomeConvidado}`);
//         if (response.ok) {
//             const convidado = await response.json();
//             statusElement.textContent = `Bem-vindo, ${convidado.nome}!`;
//             idConvidado = convidado.id; // Armazena o ID do convidado
//             confirmarButton.disabled = false; // Habilita o botão de confirmação
//         } else {
//             statusElement.textContent = 'Convidado não encontrado.';
//         }
//     } catch (error) {
//         console.error('Erro ao verificar convidado:', error);
//         statusElement.textContent = 'Erro ao conectar ao servidor.';
//     }
// }

// Adiciona um evento de clique ao botão de confirmação
// document.getElementById("confirmButton").addEventListener("click", function(event) {
//    
//
//
//     try {
//         const response = await fetch('http://localhost:3000/api/inserir', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ nome }), // Envia o nome como JSON
//         });
//
//         if (response.ok) {
//             const result = await response.json();
//             alert(result.message);
//         } else {
//             alert('Erro ao enviar dados');
//         }
//     } catch (error) {
//         console.error('Erro:', error);
//         alert('Erro ao conectar ao servidor');
//     }
// });

// Adiciona um evento de clique ao botão de mapa
document.getElementById("mapButton").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de navegação

    let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    let latitude = -23.778833;
    let longitude = -46.589000;

    // Se for um dispositivo móvel, tenta usar o esquema geo:
    if (isMobile) {
        window.location.href = `geo:${latitude},${longitude}?q=Chácara+de+Boa+na+Lagoa`;
    } else {
        // Caso contrário, abre o Google Maps no desktop
        window.open(`https://maps.app.goo.gl/YZRiLRsn1xKa4pMh8`, "_blank");
    }
});