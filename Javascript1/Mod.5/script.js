// Capturando os elementos do HTML
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo ao título (h1) e ao link (a)
titulo.innerText = "Bem-vindo ao Projeto de Manipulação!";
link.innerText = "Visite o site Prozeducação";

// Adicionando itens à lista não ordenada (ul) usando innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens com links à lista ordenada (ol)
listaOrdenada.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
    <li><a href="https://github.com" target="_blank">GitHub</a></li>
`;
