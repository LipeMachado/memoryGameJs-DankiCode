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

    // Conferindo pares
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        //Clicar duas vezes no mesmo card
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', '../images/card.png')
            cards[optionTwoId].setAttribute('src', '../images/card.png')
        } else if (cardsChosen[0] == cardsChosen[1]) { //Formando um par
            cards[optionOneId].setAttribute('src', '../images/white.png')
            cards[optionTwoId].setAttribute('src', '../images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            pares.push(cardsChosen)
        } else { // Não formou um par
            cards[optionOneId].setAttribute('src', '../images/card.png')
            cards[optionTwoId].setAttribute('src', '../images/card.png')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = pares.length

        if (pares.length == cardsList.length / 2) {
            resultDisplay.textContent = "Parabéns! Você encontrou todos o pares! (Reinicie a página)"
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