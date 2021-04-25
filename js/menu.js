const botoes = {
    all: document.querySelector('.b-all'),
    website: document.querySelector('.b-website'),
    email: document.querySelector('.b-email'),
    app: document.querySelector('.b-app'),
    game: document.querySelector('.b-game'),
    social: document.querySelector('.b-social'),

}

const itens = document.querySelectorAll('.element-item')

const menu = (e) => {



    for (const i in botoes) {
        botoes[i].classList.remove('active')
    }

    e.path[0].classList.add('active')

    for (const i of itens) {

        if(i.classList.contains(`${e.path[0].textContent}`)){
            i.classList.remove('collapse')
        } else {
            i.classList.add('collapse')
        }

        if(e.path[0].textContent == 'all'){
            i.classList.remove('collapse')
        }
    }
}

for (const i in botoes) {
    botoes[i].addEventListener('click', (e) => {
        menu(e)
    })
}

