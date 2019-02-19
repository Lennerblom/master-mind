import React, { Component } from 'react';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white', 'brown'];
//const randomArr = [];
const attemptArr = [];
const clueArr = [];

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            hiddenView: true,
            solution: [],
        }
    }

    generateRandom = () => {
        let randomArr = [];
        let count = 0;
        while(count < 5) {
            let i = Math.floor(Math.random() * (colors.length));
            randomArr.push(colors[i] + ', ');
            count++;
        }
        console.log(randomArr);
        this.setState({solution: randomArr});
        }

    
    render() {
        return (
            <div>
                <button onClick={this.generateRandom}>new game</button>
                <h2>{this.state.solution}</h2>
            </div>
            
        );
    }
}