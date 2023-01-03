// console.log('hello world')
document.addEventListener('DOMContentLoaded', () => {

    const cardList = [

        {
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
        }
    ]
    const board = document.querySelector('.gameBoard')
    const attemptsHolder = document.querySelector('.attempts')
    const foundHolder = document.querySelector('.found')
    const gameCards = 7

    let attempts = 0
    let foundCards = 0
    attemptsHolder.textContent = attempts
    foundHolder.textContent = foundCards

    
    
    let selectedCards = []
    let selectedCardsIds = []

    initiateBoard = () => {
        for (let i = 0; i < cardList.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'basket.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }
    }
    flipCard = () => {
        if(chosencards.length != 2){

        
        let cardId = this.getAttribute('data-id')
        if(this.getAttribute('src') != 'images/blank.png'){
            chosenCards.push(cardsList[cardId].name)
            chosenCardsIds.push(cardId)
            this.SetAttribute('src', cardsList[cardId].image)
            if(chosenCards.length == 2){
                setTimeout(checkMatches, 400)
            }
        }
    }
}
    checkMatches = () => {
        attempts++
        let cards = document.querySelectorAll('img')
        let firstCard = chosenCardsIds[0]
        let secondCard = chosenCardsIds[1]
        if (chosencards[0] == chosencards[1]){
            foundCards++
            cards[firstCard].setAttribute('src','images/blank.png')
            cards[secondCard].setAttribute('src','images/blank.png')
        
        } {else
            cards[firstCard].setAttribute('src','images/basket.png')
            cards[secondCard].setAttribute('src','images/basket.png')
        }
        chosenCards = []
        chosenCardsIds = []
        attemptsHolder.textContent = attempts
        foundHolder.textContent = foundCards
        if(foundCards == cardsInGame){
            alert('Well Done!')
        }
    }
    initiateBoard()

})