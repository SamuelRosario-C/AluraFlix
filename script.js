function adicionarFilmeOuSerier() {
    let filmeSerieFavorito = document.querySelector("#filmeserie").value
    let filmeSerieFavoritoName = document.querySelector("#filmeSerieName").value
    let mensagemDeErro = document.querySelector("#erroNasInformacoes")

    if (filmeSerieFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeSerieFavorito, filmeSerieFavoritoName, mensagemDeErro)
    } else {
        mensagemDeErro.innerHTML = "Endereço ou nome Inválido!"
    }
    document.querySelector("#filmeserie").value = ""
    document.querySelector("#filmeSerieName").value = ""
}


function listarFilmesNaTela(filmeSerieFavorito, filmeSerieFavoritoName, mensagemDeErro) {
    if (filmeSerieFavorito.length > 0 && filmeSerieFavoritoName.length > 0) {
        mensagemDeErro.innerHTML = ""

        let exibirFavorito = `<img src=${filmeSerieFavorito}>`
        let exibirNome = `<span>${filmeSerieFavoritoName}</span>`
        let listFilmes = document.querySelector("#listaFilmesSerie")

        console.log(listFilmes);
        listFilmes.innerHTML = listFilmes.innerHTML + `<div id="remover"">${exibirFavorito + exibirNome}</div>`

    } else {
        mensagemDeErro.innerHTML = "Endereço ou nome Inválido!"
    }
}

function remover() {
    let apagar = document.querySelector("#remover")
    apagar.parentNode.removeChild(apagar)
}

let todosFavoritos = document.querySelector("#todosFavoritos")

const favoritos = [
    {
        link : "https://ingresso-a.akamaihd.net/prd/img/movie/sword-art-online-progressive-aria-de-uma-noite-sem-estrelas/e43bdddf-75e5-470a-aa09-ae5159bf3288.jpg",
        nome : "S.A.O. Progressive"
    }, {
        link : "https://olhardigital.com.br/wp-content/uploads/2021/11/MATRIX-RESURRECTIONS-691x1024.jpg",
        nome : "Matrix Resurrections"
    }, {
        link : "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/90/19874370.jpg",
        nome : "A Rede Social"
    }, {
        link : "https://images-na.ssl-images-amazon.com/images/I/81zeqn6hofL.jpg",
        nome : "Your Name"
    }, {
        link : "https://img.estadao.com.br/fotos/crop/220x328/divirtase/images/eventos_20211201205609_d61eda6a67ac4b26d94f65949ffc7961.jpg",
        nome : "Bem-Vindo a Raccoon City"
    }, {
        link : "https://br.web.img3.acsta.net/c_310_420/pictures/22/02/14/18/29/1382589.png",
        nome : "Doutor Estranho"
    }, {
        link : "https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG",
        nome : "Homem-Aranha"
    }, {
        link : "https://upload.wikimedia.org/wikipedia/pt/f/f0/The_Midnight_Gospel.jpg",
        nome : "The Midnight Gospel"
    }, {
        link : "https://www.intoxianime.com/wp-content/uploads/2021/06/E4PKaTFVUA0we73.jpg",
        nome : "Demon Slayer"
    },{
        link : "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27141431.jpeg%27&ImageUrl=%27141431.jpeg%27&EntityType=%27Item%27&EntityId=%273804%27&device=web_browser&subscriptions=Anonymous&Width=540&Height=800",
        nome : "Jack e a Mecanica do Coração"
    },{
        link : "https://images-na.ssl-images-amazon.com/images/I/81zqK4i3H0S.jpg",
        nome : "The Walking Dead"
    }]

for (let i = 0; i < favoritos.length; i++) {
   
    const urls = `<img src=${favoritos[i].link}>`;
    const nome = `<p>${favoritos[i].nome}</p>`
    
    
    todosFavoritos.innerHTML = todosFavoritos.innerHTML + `<div class="favoritos">${urls + nome}</div>`

}


//Remover Filme (FEITO)
//Nome dos filmes com input (FEITO)