
// Lista de curiosidades sobre a Copa do Mundo
const fatos = [
    "O Brasil é o único país que participou de todas as edições da Copa do Mundo.",
    "O Rei Pelé é o único jogador na história a vencer três Copas do Mundo (1958, 1962 e 1970).",
    "A primeira Copa do Mundo foi realizada no Uruguai em 1930, e os donos da casa foram os campeões.",
    "Até hoje, apenas 8 países ganharam a Copa: Brasil, Alemanha, Itália, Argentina, França, Uruguai, Inglaterra e Espanha.",
    "O gol mais rápido da história das Copas foi marcado por Hakan Şükür, da Turquia, aos 11 segundos de jogo em 2002.",
    "A taça original da Copa do Mundo, a Jules Rimet, foi roubada duas vezes (a segunda vez no Brasil, e dizem que foi derretida)."
];

// Selecionando os elementos do HTML
const btnFato = document.getElementById('btn-fato');
const fatoDisplay = document.getElementById('fato-display');

// Adicionando uma ação ao botão quando ele for clicado
btnFato.addEventListener('click', () => {
    // Sorteia um número aleatório baseado na quantidade de fatos na lista
    const indiceAleatorio = Math.floor(Math.random() * fatos.length);
    
    // Mostra o texto sorteado na tela
    fatoDisplay.textContent = "⚽ " + fatos[indiceAleatorio];
});
