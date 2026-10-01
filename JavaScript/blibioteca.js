let Título = document.getElementById("titulo");
let Autor = document.getElementById("autor");
let Ano = document.getElementById("ano");
let Gênero = document.getElementById("genero");

let btnCadastrar = document.getElementById("btnCadastrar");
let Estante = document.getElementById("estante");

let buscando = document.getElementById("busca");

let livros = [];

btnCadastrar.addEventListener("click",cadastrar);
buscando.addEventListener("keyup", pesquisar);

function cadastrar(){

    let livro = {
        titulo : titulo.value,
        autor : autor.value,
        ano : ano.value,
        genero : genero.value
    };

    livros.push(livro);
     MostrarLivros();
}
function MostrarLivros(){
    let saida = "";
    for(let i = 0; i < livros.length; i++){
        saida = saida + `
        <div class = "livro"> <h3>${livros[i].titulo}</h3>
        <p> Autor: ${livros[i].autor}</p>
       <p> Ano: ${livros[i].ano}</p>
       <p>Genêro: ${livros[i].genero}</p> 
       </div>
        <br>`
    }
    estante.innerHTML = saida;
}

function pesquisar(){
    let termo = buscando.value.toLowerCase();
    let saida = "";
    for ( let i= 0; i< livros.length; i++){
        if(livros[i].titulo.toLowerCase().includes(termo)){
             saida = saida + `
        <div class = "livro"> <h3>${livros[i].titulo}</h3>
        <p> Autor: ${livros[i].autor}</p>
       <p> Ano: ${livros[i].ano}</p>
       <p>Genêro: ${livros[i].genero}</p> 
       </div>
        <br>`
        }
    }
    estante.innerHTML = saida; 
}