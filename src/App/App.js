import React, { useState } from 'react'
import _ from 'lodash'
import Key from './Key/Key.js';
import Scoreboard from './Scoreboard/Scoreboard.js';
import Monitor from './Monitor/Monitor.js';
import Usage from './Usage/Usage.js';

const wordList = [
    {word:"test", eg: null, announce: null},
    {word:"follow", eg: null, announce: null},
    {word:"dart", eg: null, announce: null},
    {word:"dirt", eg: null, announce: null},
    {word:"stone", eg: null, announce: null},
    {word:"dart", eg: null, announce: null},
    {word:"form", eg: null, announce: null},
    {word:"exam", eg: null, announce: null},
    {word:"code", eg: null, announce: null},
    {word:"ninja", eg: null, announce: null},
    {word:"database", eg: null, announce: null},
    {word:"reunion", eg: null, announce: null},
    {word:"revoke", eg: null, announce: null},
    {word:"cat", eg: null, announce: null},
    {word:"call", eg: null, announce: null},
    {word:"lion", eg: null, announce: null},
    {word:"boy", eg: null, announce: null},
    {word:"beat", eg: null, announce: null},
    {word:"zebra", eg: null, announce: null},
    {word:"google", eg: null, announce: null},
    {word:"googol", eg: null, announce: null},
    {word:"flexible", eg: null, announce: null},
    {word:"operating", eg: null, announce: null},
    {word:"information", eg: null, announce: null},
    {word:"architecture", eg: null, announce: null},
    {word:"practical", eg: null, announce: null},
    {word:"zero", eg: null, announce: null},
    {word:"xylem", eg: null, announce: null},
    {word:"velvet", eg: null, announce: null},
    {word:"wheat", eg: null, announce: null},
    {word:"information operation", eg: null, announce: null},
    {word:"engineering", eg: null, announce: null},
    {word:"rickrolled", eg: 'https://media.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif', announce: 'You just got ricked. lmao'},
    {word:"never gonna give you up", eg: 'https://media.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif', announce: 'Never gonna let you down'},
    {word:"function", eg: null, announce: null},
    {word:"return", eg: null, announce: null},
    {word:"saturn", eg: null, announce: null},
    {word:"venture", eg: null, announce: null},
    {word:"furniture", eg: null, announce: null},
    {word:"unique", eg: null, announce: null},
    {word:"bully maguire", eg: 'https://media.tenor.com/P8VsDwHZreYAAAAd/tobey-maguire-spider-man.gif', announce: "I'm gonna put some dirt in your eyes."},
    {word:"zawarudo", eg: 'https://media.tenor.com/ETlOjJ8aU7EAAAAC/za-warudo-jojo-bizarre-adventure.gif', announce: 'tokiwo tomare'},
    {word:"phosphorus", eg: null, announce: null},
    {word:"john cena", eg: ' ', announce: "You can't see me"},
    {word:"lithium", eg: null, announce: null},
    {word:"quiche", eg: null, announce: null},
    {word:"harry potter", eg: null, announce: '* insert harry potter song in recorder *'},
    {word:"wellbeing", eg: null, announce: null},
    {word:"ionization", eg: null, announce: null},
    {word:"yttrium", eg: null, announce: null},
    {word:"yesterday", eg: null, announce: null},
    {word:"kangaroo", eg: null, announce: null},
    {word:"masquerade", eg: null, announce: null},
    {word:"teleport", eg: null, announce: null},
    {word:"obey", eg: null, announce: 'obey'},
    {word:"axis", eg: null, announce: null},
    {word:"exist", eg: null, announce: null},
    {word:"assist", eg: null, announce: null},
    {word:"assignment", eg: null, announce: null},
    {word:"source", eg: null, announce: null},
    {word:"sort", eg: null, announce: null},
    {word:"from", eg: null, announce: null},
    {word:"oxygen", eg: null, announce: null},
    {word:"sky", eg: null, announce: null},
    {word:"starlight", eg: null, announce: null},
    {word:"sodium chloride", eg: null, announce: null},
    {word:"pyromancer", eg: null, announce: null},
    {word:"chain", eg: null, announce: null},
    {word:"acid", eg: null, announce: null},
    {word:"base", eg: null, announce: null},
    {word:"cycle", eg: null, announce: null},
    {word:"zeus", eg: null, announce: null},
    {word:"ching cheng hanji", eg: 'https://media.tenor.com/xnRrTN2HlJQAAAAC/tom-ching-cheng-hanji.gif', announce: null},
    {word:"kitchen in the dungeon", eg: 'https://media.tenor.com/xnRrTN2HlJQAAAAC/tom-ching-cheng-hanji.gif', announce: null}
]

const prepareWord = (given_word) => {
    let obj = {
        word: given_word,
        guess: '',
        attemptLeft: 10,
        isWon: false
    }

    Array.from(given_word.word).map((c) => {
        if(c.toLowerCase() != c.toUpperCase()) {
            obj.guess = obj.guess + '_'
        }
        else {
            obj.guess = obj.guess + c
        }
    })

    return obj
}

function App() {
    const [state, setState] = useState(prepareWord(_.shuffle(wordList)[0]))
    const [wins, setWin] = useState(0)
    const [ends, setEnd] = useState(false)
    const [cch, setCch] = useState(false)
    const stateUpdate = (ch) => {
        let isFail = true
        // add to guess
        Array.from(state.word.word).map((c,i) => {
            if(c.toLowerCase() == ch.toLowerCase())
            {
                let gArr = state.guess.split('')
                gArr[i] = ch.toLowerCase()
                isFail = false
                state.guess = gArr.toString().replaceAll(',', '')
            }
        })
        // check word and guess
        if(state.word.word.toUpperCase() == state.guess.toUpperCase())
        {
            state.isWon = true
            setTimeout(function(){
                setCch(state.word.eg)
            }, 50)
            setTimeout(function(){
                if(!state.word.announce)
                    alert(state.attemptLeft >= 10 ? 'Congratulation! You perfectly win.' : 'You Win!!!')
                else
                    alert(state.word.announce)
                let newWord = _.shuffle(wordList).slice()[0]
                while(newWord.word.toUpperCase() === state.word.word.toUpperCase())
                    newWord = _.shuffle(wordList).slice()[0]
                setState(prepareWord(newWord))
                setWin(wins + 1)
                setEnd(!ends)
                setCch(null)
            }, 1000)
            // TO-DO
        }
        // check fail result
        if(isFail)
        {
            state.attemptLeft -= 1
        }

        // no state left
        if(state.attemptLeft <= 0)
        {
            if(!state.isWon)
            {
                state.guess = state.word.word
                setTimeout(function(){
                    alert('You lost!!!')
                    let newWord = _.shuffle(wordList).slice()[0]
                    while(newWord.word.toUpperCase() === state.word.word.toUpperCase())
                        newWord = _.shuffle(wordList).slice()[0]
                    setState(prepareWord(newWord))
                    setWin(0)
                    setEnd(!ends)
                    setCch(null)
                }, 1000)
            }
        }
        else
        {
            setCch(null)
        }

        setState({...state, guess: state.guess, attemptLeft: state.attemptLeft})
    }

    return (
        <div className="screen">
            <div className="top_frame">
                <div className="left_frame">
                    <Usage value={state.attemptLeft} streak={wins} />
                    <Monitor value={state.guess} />
                </div>
                <Scoreboard egKey={cch} value={state.attemptLeft} />
            </div>
            <Key key="key" activationHandler={stateUpdate} ends={ends} />
        </div>
    )
}

export default App;
