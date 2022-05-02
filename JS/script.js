document.addEventListener('DOMContentLoaded', () => {
    //Carregamento dos cards
    const cardsList = [
        { 
            name: 'ganhou',
            img: '../images/ganhou.png'
        },
        { 
            name: 'ganhou',
            img: '../images/ganhou.png'
        },
        { 
            name: 'direita',
            img: '../images/direita.png'
        },
        { 
            name: 'direita',
            img: '../images/direita.png'
        },
        {
            name: 'tras',
            img: '../images/tras.png'
        },
        { 
            name: 'tras',
            img: '../images/tras.png'
        },
        { 
            name: 'correndo',
            img: '../images/correndo.png'
        },
        { 
            name: 'correndo',
            img: '../images/correndo.png'
        },
        { 
            name: 'pulo',
            img: '../images/pulo.png'
        },
        { 
            name: 'pulo',
            img: '../images/pulo.png'
        },
        { 
            name: 'esquerda',
            img: '../images/esquerda.png'
        },
        { 
            name: 'esquerda',
            img: '../images/esquerda.png'
        },
    ]

    cardsList.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.gridContainer')
    const resultDisplay = document.querySelector('#score')
    let cardsChosen = []
    let cardsChosenId = []
    let pares = []

    //Criando a tela
    function createBoard() {
        for (let i = 0; i < cardsList.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', '../images/card.png')
            card.setAttribute('dataId', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // Virando cards
    function flipCard() {
        let cardId = this.getAttribute('dataId')
        cardsChosen.push(cardsList[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardsList[cardId].img)
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})