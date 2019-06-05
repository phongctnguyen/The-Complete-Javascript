/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, winScore

document.querySelector('.final-score').addEventListener('input', function() {
    winScore = Number(document.querySelector('.final-score').value)
})


init()

// document.querySelector('#current-' + activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6 + 1)
        var dice2 = Math.floor(Math.random() * 6 + 1)

        // 2. Display the result
        var dice1DOM = document.getElementById('dice-1')
        var dice2DOM = document.getElementById('dice-2')
        dice1DOM.style.display = 'block'
        dice1DOM.src = 'dice-' + dice1 +'.png'
        dice2DOM.style.display = 'block'
        dice2DOM.src = 'dice-' + dice2 +'.png'

        // 3. Update the round score IF the rolled number was NOT a 1
        if (!((dice1 === 6 && prevScore1 === 6) || (dice2 === 6 && prevScore2 === 6))) {
            // Add score
            roundScore += dice1 + dice2
            document.querySelector('#current-' + activePlayer).textContent = roundScore
            prevScore1 = dice1
            prevScore2 = dice2
        } else {
            // Next player
            nextPlayer()
            prevScore1 = 0
            prevScore2 = 0
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click',function() {
    if (gamePlaying) {
        // ADD CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        // Check if player won the game
        if (scores[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false
        } else {
            // Next player
            nextPlayer()
        }
    }
})

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    // document.querySelector('.player-0-panel').classList.remove('active')
    // document.querySelector('.player-1-panel').classList.add('active')

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'

}

document.querySelector('.btn-new').addEventListener('click', init)


function init() {
    scores = [0, 0]
    activePlayer = 0
    roundScore = 0
    prevScore = 0
    gamePlaying = true

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}