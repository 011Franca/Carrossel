let Título = document.getElementById("titulo");
let Autor = document.getElementById("autor");
let Ano = document.getElementById("ano");
let Gênero = document.getElementById("genero");

let btnCadastrar = document.getElementById("btnCadastrar");
let Estante = document.getElementById("estante");

let livros = [];
btnCadastrar.addEventListener("click",cadastrar);

function cadastrar(){

    let livro = {
        titulo : titulo.value,
        autor : autor.value,
        ano : ano.value,
        genero : genero.value
    };

    livros.push(livro);
    
}