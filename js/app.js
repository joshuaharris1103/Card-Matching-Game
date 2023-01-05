// console.log('hello world')
document.addEventListener('DOMContentLoaded', () => {

    // Photos and their randomization
    const cardList = [{
            name: 'NBA',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-logo-transparent.png'
        },
        {
            name: 'NBA',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-logo-transparent.png'
        },

        {
            name: 'easternConf',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-Eastern_Conference_logo.png'
        },
        {
            name: 'easternConf',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-Eastern_Conference_logo.png'
        },

        {
            name: 'Knicks',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-new-york-knicks-logo.png'
        },
        {
            name: 'Knicks',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-new-york-knicks-logo.png'
        },
        {
            name: 'Nets',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-brooklyn-nets-logo.png'
        },
        {
            name: 'Nets',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-brooklyn-nets-logo.png'
        },

        {
            name: '76ers',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-philadelphia-76ers-logo.png'
        },
        {
            name: '76ers',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-philadelphia-76ers-logo.png'
        },

        {
            name: 'Celtics',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-boston-celtics-logo.png'
        },
        {
            name: 'Celtics',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-boston-celtics-logo.png'
        },

        {
            name: 'Raptors',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-toronto-raptors-logo-2020.png'
        },
        {
            name: 'Raptors',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-toronto-raptors-logo-2020.png'
        },
        {
            name: 'Game Ball',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-spalding-basketball.png'
        },
        {
            name: 'Game Ball',
            image: 'home/jrh/sei/projects/matching-pairs/Card-Matching-Game/NBA LOGOS FOLDER/nba-spalding-basketball.png'
        }
    ]
    cardList.sort(() => 0.5 - Math.random())
    // console.log(cardList)

    const board = document.querySelector('.gameBoard')
    const attemptsHolder = document.querySelector('.attempts')
    const foundHolder = document.querySelector('.finds')
    // const timeHolder = document.querySelector('.timer')
    // const resetButton = document.querySelector('#reset')
    const gameCards = 8

    let attempts = 0
    let foundCards = 0
    // let timer = setInterval(function() {})
    attemptsHolder.textContent = attempts
    foundHolder.textContent = foundCards
    // timeHolder.textContent = timer


    let selectedCards = []
    let selectedCardsIds = []

    initiateBoard = () => {
        for (let i = 0; i < cardList.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'NBA LOGOS FOLDER/basket.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }
    }


    flipCard = () => {
        if (selectedCards.length != 2) {
            let cardId = this.getAttribute('data-id')
            if (this.getAttribute('src') != 'NBA LOGOS FOLDER/blank.png') {
                selectedCards.push(cardList[cardId].name)
                selectedCardsIds.push(cardId)
                this.SetAttribute('src', cardList[cardId].image)
                if (selectedCards.length == 2) {
                    setTimeout(checkMatches, 400)
                }
            }
        }
    }

    checkMatches = () => {
        attempts++
        let cards = document.querySelectorAll('img')
        let firstCard = selectedCardsIds[0]
        let secondCard = selectedCardsIds[1]
        if (selectedCards[0] == selectedCards[1]) {
            foundCards++
            cards[firstCard].setAttribute('src', 'NBA LOGOS FOLDER/blank.png')
            cards[secondCard].setAttribute('src', 'NBA LOGOS FOLDER/blank.png')
        } else {
            cards[firstCard].setAttribute('src', 'NBA LOGOS FOLDER/basket.png')
            cards[secondCard].setAttribute('src', 'NBA LOGOS FOLDER/basket.png')
        }
        selectedCards = []
        selectedCardsIds = []
        attemptsHolder.textContent = (`Attempts: ${attempts}`)
        foundHolder.textContent = (`Finds: ${foundCards}`)
        if (foundCards == gameCards) {
            alert('completed')
        }
    }

    // resetBoard = () => {

    // }

    initiateBoard()
    // resetButton.addEventListener('click', resetBoard)
})