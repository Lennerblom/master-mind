import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'ivory', 'sienna'];

let attemptArr = [];
let totalAttempt = [];
let totalCountArr = [];


let color1 = {background:'transparent'};
let color2 = {background:'transparent'};
let color3 = {background:'transparent'};
let color4 = {background:'transparent'};
let color5 = {background:'transparent'};
let winningMsg = 'You won!';

export default class Game extends Component {
  constructor(props){
    super(props);
    this.defaultsState = {
      hiddenView: false,
      solution: [],
      option1: {value: 'transparent', checked: false},
      option2: {value: 'transparent', checked: false},
      option3: {value: 'transparent', checked: false},
      option4: {value: 'transparent', checked: false},
      option5: {value: 'transparent', checked: false},
      gameOn: false,
    };
    const initialState = this.defaultsState;
    this.state = {...initialState};
  }

  gameStart = () => {
    if(totalAttempt.length > 0){
      this.setState({initialState: this.defaultsState});
      totalAttempt = [];
      totalCountArr = [];
    }
    this.setState({gameOn: true});
    this.generateRandom();
  }
    generateRandom = () => {
        let randomArray = [];
        let count = 0;
        while(count < 5) {
            let i = Math.floor(Math.random() * (colors.length));
            randomArray.push(colors[i]);
            count++;
        }
        console.log(randomArray);
        this.setState({solution: randomArray});
        }

    submitAttempt = () => {
      let tempSolution = [];
      let tempAttempt = [];

        if(this.state.option1.value !== 'transparent' && this.state.option2.value !== 'transparent' && this.state.option3.value !== 'transparent' && this.state.option4.value !== 'transparent'   && this.state.option5.value !== 'transparent'){
          attemptArr = [];
          attemptArr.push(this.state.option1.value);
          attemptArr.push(this.state.option2.value);
          attemptArr.push(this.state.option3.value);
          attemptArr.push(this.state.option4.value);
          attemptArr.push(this.state.option5.value);
          console.log('attemptArr', attemptArr)
          totalAttempt.unshift(attemptArr);
          if(this.state.solution[0]===attemptArr[0] && this.state.solution[1]===attemptArr[1] && this.state.solution[2]===attemptArr[2] && this.state.solution[3]===attemptArr[3] && this.state.solution[4]===attemptArr[4]){
            this.setState({hiddenView: true});
            console.log('you win');
          }
          else {
            let countTotal = [];
            let blackCount = '';
            let whiteCount = '';
            let noScore = 'orangered';

            for(let i = 0; i < 5; i++){
              tempSolution.push(this.state.solution[i]);
              tempAttempt.push(attemptArr[i]);
            }
            for(let i = 0; i < 5; i++){
              if(tempSolution[i] === tempAttempt[i]){
                tempSolution[i] = 'used-blk';
                tempAttempt[i] = 'checked';
                blackCount = 'black'; 
                countTotal.push(blackCount);
              }
            }

            for(let i = 0; i < 5; i++){
              if(tempSolution.includes(tempAttempt[i])){
                for(let j = 0; j < 5; j++){
                  if(tempSolution[j] === tempAttempt[i]){
                    tempSolution[j] = 'found-white';
                    tempAttempt[i] = 'checked';
                    whiteCount = 'ivory';
                    countTotal.push(whiteCount);
                    break;
                  }
                }
              }
            }

            if(countTotal.length === 0){
              countTotal.push(noScore);
            }
            totalCountArr.unshift(countTotal);
          }
        }
          this.resetColor();
    }
       
    
    onChange = (e) => {
        const val =
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
    
      const changedBit = {
        [e.target.name]: val
      };
      this.setState(changedBit);
    }
    isChecked = (e) => {
        let position = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5'];
        let val = e.target.className;
        for(let pos of position){
          if(pos === val){
            val = pos;
            
            if(val === 'pos1' && this.state.option1.checked === false){
              this.setState({option1: {checked: true}});
            }
            if(val === 'pos2' && this.state.option2.checked === false){
              this.setState({option2: {checked: true}});
            }
            if(val === 'pos3' && this.state.option3.checked === false){
              this.setState({option3: {checked: true}});
            }
            if(val === 'pos4' && this.state.option4.checked === false){
              this.setState({option4: {checked: true}});
            }
            if(val === 'pos5' && this.state.option5.checked === false){
              this.setState({option5: {checked: true}});
            }
          }
        }
      }
    selectColor = (e) => {
      let val = e.target.id
      if(this.state.option1.checked === true){
        this.setState({option1: {value: val, checked: false}});
        color1 = {background: val};
      }
      if(this.state.option2.checked === true){
        this.setState({option2: {value: val, checked: false}});
        color2 = {background: val};
      }
      if(this.state.option3.checked === true){
        this.setState({option3: {value: val, checked: false}});
        color3 = {background: val};
      }
      if(this.state.option4.checked === true){
        this.setState({option4: {value: val, checked: false}});
        color4 = {background: val};
      }
      if(this.state.option5.checked === true){
        this.setState({option5: {value: val, checked: false}});
        color5 = {background: val};
      }   
    }

    resetColor = () => {
      this.setState({option1: {value: 'transparent', checked: false}});
      color1 = {background: 'transparent'};
      this.setState({option2: {value: 'transparent', checked: false}});
      color2 = {background: 'transparent'};
      this.setState({option3: {value: 'transparent', checked: false}});
      color3 = {background: 'transparent'};
      this.setState({option4: {value: 'transparent', checked: false}});
      color4 = {background: 'transparent'};
      this.setState({option5: {value: 'transparent', checked: false}});
      color5 = {background: 'transparent'};
    }

    render() {

      return (
        <div className='main-container'>
          <h2>Master Mind</h2>          
          <button className='new-game-button' onClick={this.gameStart}>new game</button>
          <button className='submit-button' onClick={this.submitAttempt}>submit</button>

          <div className='game-board-container'>

                {this.state.hiddenView && <div className='hidden-solution'>{this.state.solution.map(color => <div style={{background: color}} className='colorPosition'></div>)}<h2>{winningMsg}</h2></div>}
                
          <div className='attempt-container'>
            <ol reversed={true} className='attempt-row'>{totalAttempt.map(arrays => 
              <li>{arrays.map(color => <div className='colorPosition' style={{background: color}}></div> )}</li>)}
            </ol>
          </div>
          <div className='attempt-container'>
            <ul className='attempt-row'>{totalCountArr.map(count => 
              <li>{count.map(score => 
                <div className='score' style={{background: score}}></div>)}
              </li>)}
            </ul>
          </div>
          {/* <Divider/> */}
          <div className='guess-container'>
            {this.state.gameOn && <form onChange={this.isChecked}>
              <div>
                <label>
                  <input type="checkbox" className='pos1'/><div className='colorPicker' id='pos1' style={color1}>1</div>
                </label>
                <label>
                  <input type="checkbox" className='pos2'/><div className="colorPicker" id='pos2' style={color2}>2</div>
                </label>
                <label>
                  <input type="checkbox" className='pos3'/><div className="colorPicker" id='pos3' style={color3}>3</div>
                </label>
                <label>
                  <input type="checkbox" className='pos4'/><div className="colorPicker" id='pos4' style={color4}>4</div>
                </label>
                <label>
                  <input type="checkbox" className='pos5'/><div className="colorPicker" id='pos5' style={color5}>5</div>
                </label>
              </div>
            </form>}
            <div>
              <button className="colorChoices" onClick={this.selectColor} id="red"></button>
              <button className="colorChoices" onClick={this.selectColor} id="orange"></button>
              <button className="colorChoices" onClick={this.selectColor} id="yellow"></button>
              <button className="colorChoices" onClick={this.selectColor} id="green"></button>
            </div>
            <div>
              <button className="colorChoices" onClick={this.selectColor} id="blue"></button>
              <button className="colorChoices" onClick={this.selectColor} id="black"></button>
              <button className="colorChoices" onClick={this.selectColor} id="ivory"></button>
              <button className="colorChoices" onClick={this.selectColor} id="sienna"></button>
            </div>
          </div>
        </div>
        </div>
            
      );
    }
}