import React, { Component } from 'react';
import Header from './componets/header';

import heart from './img/heart.png';
import spade from './img/spade.png';
import diamond from './img/diamond.png';
import club from './img/club.png';
import watermellon from './img/watermellon.png';
import bag from './img/bag.png';
import lemon from './img/lemon.png';
import dollar from './img/dollar.png';
import drumstick from './img/drumstick.png';
import seven from './img/seven.png';

import './App.css';

// function for winning reels

class App extends Component {
    constructor(props) {
        super(props);

        // const myNumbers = ['A','B','C','D','E','F','G','H','I','J'];
        // const myNumbers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];
        const myNumbers = [spade,heart,club,diamond,watermellon,bag,lemon,dollar,drumstick,seven];
        const message = 'Welcome!';

        this.state = {
            title: 'Slots',
            subTitle: 'Spin to win',
            content: 'Welcome to the slots, place a bet and play a few reels.',
            activePost: 0,
            score: 1000,
            myBet: 0,
            message,
            point: '',
            myNumbers
        }
        this.state.number1 = heart;
        this.state.number2 = watermellon;
        this.state.number3 = seven;
        this.handleClick = this.handleClick.bind(this);
        this.randomNumber = this.randomNumber.bind(this);
        this.handleReelChange1 = this.handleReelChange1.bind(this);
        this.handleReelChange2 = this.handleReelChange2.bind(this);
        this.handleReelChange3 = this.handleReelChange3.bind(this);
        this.bet = this.bet.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // incerement base on fast state not current
    handleDecrement = () => {
        this.changeCount()
    }

    changeCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count - 1 }
        });
    }

    // Reel animations
    handleReelChange1(e) {
        // add animation sequence here
        let foo = this.state.myNumbers;
        let that = this;

        let pos = 0;
        let id = setInterval( frame, 30);
        function frame() {
            if(pos === e) {
                clearInterval(id);
            } else {
                pos++;
                // console.log(foo[ (pos) ]);
                that.setState({
                    number1: foo[ (pos) ],
                })
            }
        }
    }
    handleReelChange2(e) {
        // add animation sequence here
        let foo = this.state.myNumbers;
        let that = this;

        let pos = 0;
        let id = setInterval( frame, 30);
        function frame() {
            if(pos === e) {
                clearInterval(id);
            } else {
                pos++;
                // console.log(foo[ (pos) ]);
                that.setState({
                    number2: foo[ (pos) ],
                })
            }
        }
    }
    handleReelChange3(e) {
        // add animation sequence here
        let foo = this.state.myNumbers;
        let that = this;

        let pos = 0;
        let id = setInterval( frame, 30);
        function frame() {
            if(pos === e) {
                clearInterval(id);
            } else {
                pos++;
                // console.log(foo[ (pos) ]);
                that.setState({
                    number3: foo[ (pos) ],
                })
            }
        }
    }

    randomNumber() {
        // Create temps for the vars to be changed
        let foo = this.state.myNumbers;
        let baa = this.state.myBet;
        let myScore = this.state.score;

        if(myScore <= 0) {
            this.setState({
                message: 'Game over'
            });
            return;
        }
        if(baa === 0) {
            this.setState({
                message: 'Please place a bet to begin'
            });
            return;
        }
        if(baa > myScore){
            this.setState({
                message: 'Sorry, your bet cannot exceed your current score.'
            });
            return;
        }

        // get random numbers
        let num1 = Math.floor(Math.random() * foo.length);
        let num2 = Math.floor(Math.random() * foo.length);
        let num3 = Math.floor(Math.random() * foo.length);


        // Set the new state of the slot machine
        this.setState( {
            number1: foo[num1],
            number2: foo[num2],
            number3: foo[num3]
        });

        // Reel animations
        this.handleReelChange1(num1);
        this.handleReelChange2(num2);
        this.handleReelChange3(num3);

        // Validation

        // Jackpot
        if( num1 === num2 && num1 === num3 && num2 === num3 ) {
            // console.log("Triple points");

            // odds
            if(num1 >= 0 && num1 <= 3){
                baa = (baa * 1) * 3;
            }else if(num1 > 3 && num1 <= 6) {
                baa = (baa * 2) * 3;
            }else if(num1 > 6 && num1 <= 9) {
                baa = (baa * 3) * 3;
            }else {
                console.log("error");
            }

            this.setState({
                score: myScore + baa,
                message: 'Jackpot!',
                point: '+' + baa
            });
            return;
        }

        // Pair
        if( num1 === num2 ) {
            // console.log("Double points");

            // odds
            if(num1 >= 0 && num1 <= 3){
                baa = (baa * 1);
            }else if(num1 > 3 && num1 <= 6) {
                baa = (baa * 2);
            }else if(num1 > 6 && num1 <= 9) {
                baa = (baa * 3);
            }else {
                console.log("error");
            }

            this.setState({
                score: myScore + baa,
                message: 'WIN',
                point: '+' + baa
            });
            return;
        }
        if( num1 === num3 ) {
            // console.log("Double points");

            // odds
            if(num1 >= 0 && num1 <= 3){
                baa = (baa * 1);
            }else if(num1 > 3 && num1 <= 6) {
                baa = (baa * 2);
            }else if(num1 > 6 && num1 <= 9) {
                baa = (baa * 3);
            }else {
                console.log("error");
            }

            this.setState({
                score: myScore + baa,
                message: 'WIN',
                point: '+' + baa
            });
            return;
        }
        if( num2 === num3 ) {
            // console.log("Double points");

            // odds
            if(num2 >= 0 && num2 <= 3){
                baa = (baa * 1);
            }else if(num2 > 3 && num2 <= 6) {
                baa = (baa * 2);
            }else if(num2 > 6 && num2 <= 9) {
                baa = (baa * 3);
            }else {
                console.log("error");
            }

            this.setState({
                score: myScore + baa,
                message: 'WIN',
                point: '+' + baa
            });
            return;
        }

        // nothing
        this.setState({
            score: myScore - baa,
            message: 'no match',
            point: '-' + baa
        });
    }

    bet(e) {
        // console.log(e.target.value);
        let baa = e.target.value;
        this.setState( {
            myBet: baa
        });
    }

    ComponetDidMount() {
        // put ajax, timers, listeners for 3rd party plugins that require DOM rendering
        console.log('Did Mount');
        debugger;
    }

    ComponentWillUnmount() {
        // Clean all of the ajax, timers and listeners
        console.log('Will Unmount');
        debugger;
    }

    render() {

        return (
            <div className="App">
                <Header />
                <div className="App-body">
                    <div className="App-intro">
                        <p>{ this.state.content }</p>
                    </div>
                    <div>
                        <h2>Your Points: { this.state.score }</h2>
                        <h2>Your Bet: { this.state.myBet }</h2>
                    </div>
                    <div>
                        <p>{ this.state.message }</p>
                        <h2>{ this.state.point }</h2>
                    </div>
                    <div className="App-reels">
                        <div>
                            <img src={ this.state.number1 } alt="reel" />
                        </div>
                        <div>
                            <img src={ this.state.number2 } alt="reel" />
                        </div>
                        <div>
                            <img src={ this.state.number3 } alt="reel" />
                        </div>
                    </div>
                    <div>
                        <button className="App-spin" onClick={ this.randomNumber }>
                            Play
                        </button>
                    </div>
                    <p>Bets</p>
                    <div>
                        <button className="App-btn" onClick={ this.bet } value="10">
                            min
                        </button>
                        <button className="App-btn" onClick={ this.bet } value="20">
                            20
                        </button>
                        <button className="App-btn" onClick={ this.bet } value="50">
                            50
                        </button>
                        <button className="App-btn" onClick={ this.bet } value="100">
                            100
                        </button>
                        <button className="App-btn" onClick={ this.bet } value="500">
                            max
                        </button>
                    </div>
                    <div>
                        <span><img src={heart} alt="heart" className="App-reelOdds" /> + <img src={heart} alt="heart" className="App-reelOdds" /> = x1</span>
                    </div>
                    <div>
                        <span><img src={heart} alt="heart" className="App-reelOdds" /> + <img src={heart} alt="heart" className="App-reelOdds" /> + <img src={heart} alt="heart" className="App-reelOdds" /> = x3</span>
                    </div>
                    <div>
                        <span><img src={lemon} alt="lemon" className="App-reelOdds" /> + <img src={lemon} alt="lemon" className="App-reelOdds" /> = x2</span>
                    </div>
                    <div>
                        <span><img src={lemon} alt="lemon" className="App-reelOdds" /> + <img src={lemon} alt="lemon" className="App-reelOdds" /> + <img src={lemon} alt="lemon" className="App-reelOdds" /> = x6</span>
                    </div>
                    <div>
                        <span><img src={seven} alt="seven" className="App-reelOdds" /> + <img src={seven} alt="seven" className="App-reelOdds" /> = x3</span>
                    </div>
                    <div>
                        <span><img src={seven} alt="seven" className="App-reelOdds" /> + <img src={seven} alt="seven" className="App-reelOdds" /> + <img src={seven} alt="seven" className="App-reelOdds" /> = x9</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
