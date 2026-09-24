//Captura o botão "proximo"
let btnproximo = document.getElementById("proximo");
//Captura o botão "anterior"
let btnanterior = document.getElementById("anterior");
//Captura o quadro onde a fotografia é exibida
let Quadroimagem = document.getElementById("imagem")
//Cria o album e guarda as fotos
let album = [
    "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1025/1200/600",
    "https://picsum.photos/id/1043/1200/600"
]
//Quando o botão próximo for clicado,executará a função mostrarproximo
btnproximo.addEventListener("click", mostrarProximo);
btnanterior.addEventListener("click", mostrarAnterior);

//Define a posição inicial da fotografia do album
let foto = 0;

//Função responsável por mostrar a proxima fotografia
function mostrarProximo(){
    //Avançar uma posição do álbum
    foto = foto + 1;
    //Verifica se passou a ultima fotografia
    if(foto >= album.length){
        //Volta a posição inicial
        foto = 0
    }
    Quadroimagem.src = album[foto];
}
//Função responsável por mostrar a fotografia anterior
function mostrarAnterior(){
    //Avançar uma posição do álbum
    foto = foto - 1;
    if(foto < 0){
        foto = album.length - 1
    }
    Quadroimagem.src = album[foto];
}
