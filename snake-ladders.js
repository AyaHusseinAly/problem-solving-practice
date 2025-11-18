class SnakesLadders {
    constructor() {
        this.buildMap()
        this.players = {
            'Player 1': '0',
            'Player 2': '0',
        }
        this.turn = 'Player 1'
    }

    play(die1, die2) {
        if (this.gameOver) return "Game over!";
        let player = this.turn
        let square = Number(this.players[this.turn]);
        square += (die1 + die2)
        let newValue = this.mapCheck(square);
        if (die1 !== die2)
            this.switchTurns();
        if (Number(newValue) == 100) {
            this.gameOver = true;
            return player + ' Wins!'
        }
        if (Number(newValue) > 100) {
            let bounces = newValue - 100
            newValue = this.mapCheck(100 - bounces)
        }
        this.players[player] = newValue;
        return player + ' is on square ' + newValue;
    }

    switchTurns() {
        this.turn = this.turn === 'Player 1' ? 'Player 2' : 'Player 1';
    }

    mapCheck(square) {
        return ((`${square}` in this.boardMap) ? this.boardMap[`${square}`] : `${square}`);
    }

    buildMap() {
        this.boardMap = {
            '2': '38',
            '7': '14',
            '8': '31',
            '15': '26',
            '16': '6',
            '21': '42',
            '28': '84',
            '36': '44',
            '46': '25',
            '49': '11',
            '51': '67',
            '62': '19',
            '64': '60',
            '71': '91',
            '74': '53',
            '78': '98',
            '87': '94',
            '89': '68',
            '92': '88',
            '95': '75',
            '99': '80',
        }
    }
}