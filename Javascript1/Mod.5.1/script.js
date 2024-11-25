// MÉTODO SIMPLES: Adicionando um título com o id 'titulo'
const titulo = document.createElement('h1'); // Criando o elemento h1
titulo.id = 'titulo'; // Definindo o atributo id
titulo.innerText = 'Loja Virtual - Produto em Destaque'; // Adicionando texto
document.body.appendChild(titulo); // Adicionando o elemento ao body

// MÉTODO COMPLEXO: Criando a estrutura para um produto
const produto = document.createElement('div'); // Criando um contêiner para o produto
produto.style.border = '1px solid #ccc'; // Estilização básica
produto.style.padding = '16px';
produto.style.margin = '16px 0';
produto.style.width = '300px';

// Adicionando o nome do produto
const nome = document.createElement('h2'); // Criando o elemento h2
nome.innerText = 'Camiseta Personalizada'; // Adicionando o texto
produto.appendChild(nome); // Adicionando ao contêiner do produto

// Adicionando a descrição do produto
const descricao = document.createElement('p'); // Criando o elemento p
descricao.innerText = 'Camiseta 100% algodão com estampa exclusiva. Confortável e estilosa.'; // Adicionando o texto
produto.appendChild(descricao); // Adicionando ao contêiner do produto

// Adicionando o preço do produto
const preco = document.createElement('p'); // Criando o elemento p
preco.innerHTML = '<strong>Preço:</strong> R$ 59,90'; // Adicionando texto com formatação
produto.appendChild(preco); // Adicionando ao contêiner do produto

// Adicionando uma imagem do produto
const imagem = document.createElement('img'); // Criando o elemento img
imagem.src = 'https://via.placeholder.com/150'; // Definindo a URL da imagem (exemplo)
imagem.alt = 'Imagem da Camiseta'; // Texto alternativo para acessibilidade
imagem.style.width = '100%'; // Ajustando o tamanho
produto.appendChild(imagem); // Adicionando ao contêiner do produto

// Adicionando o botão de compra
const botao = document.createElement('button'); // Criando o botão
botao.innerText = 'Comprar'; // Texto do botão
botao.style.backgroundColor = '#4CAF50'; // Estilo do botão
botao.style.color = 'white';
botao.style.border = 'none';
botao.style.padding = '10px 20px';
botao.style.cursor = 'pointer';
botao.addEventListener('click', () => alert('Produto adicionado ao carrinho!')); // Evento de clique
produto.appendChild(botao); // Adicionando ao contêiner do produto

// Adicionando o contêiner do produto ao body
document.body.appendChild(produto);
