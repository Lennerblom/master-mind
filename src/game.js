import React, { Component } from 'react';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'ivory', 'brown'];

const attemptArr = [];

let color1 = {background:'white'};
let color2 = {background:'white'};
let color3 = {background:'white'};
let color4 = {background:'white'};
let color5 = {background:'white'};
let winningMsg = 'You won!';

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            hiddenView: false,
            solution: [],
            option1: {value: 'white', checked: false},
            option2: {value: 'white', checked: false},
            option3: {value: 'white', checked: false},
            option4: {value: 'white', checked: false},
            option5: {value: 'white', checked: false},
            makeItWorkState: false,
            //attemptArr: [],
        }
    }
makeItWork = () => {
  console.log('make it work');
  this.setState({makeItWorkState: true});
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
        console.log('submitted');
        if(this.state.option1.value !== 'white' && this.state.option2.value !== 'white' && this.state.option3.value !== 'white' && this.state.option4.value !== 'white' && this.state.option5.value !== 'white'){
          attemptArr.push(this.state.option1.value);
          attemptArr.push(this.state.option2.value);
          attemptArr.push(this.state.option3.value);
          attemptArr.push(this.state.option4.value);
          attemptArr.push(this.state.option5.value);
          console.log('attemptArr', attemptArr)
          if(this.state.solution[0]===attemptArr[0] && this.state.solution[1]===attemptArr[1] && this.state.solution[2]===attemptArr[2] && this.state.solution[3]===attemptArr[3] && this.state.solution[4]===attemptArr[4]){
            this.setState({hiddenView: true});
            console.log('you win');
          }
          else{
            console.log('keep trying', attemptArr);
            
          }
          this.makeItWork();
          // for(let i = 0; i < 5; i++){
          //   if(this.state.solution[i] === attemptArr[i]){
          //     this.setState({hiddenView: true});
          //     console.log('you win');
          //   }
          //   else {
          //     console.log('keep trying');
          //   }
          // }
        }
        
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
        console.log('ischecked!', e.target.className);
        let position = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5'];
        let val = e.target.className;
        for(let pos of position){
            if(pos === val){
                val = pos;
            
        
        if(val === 'pos1' && this.state.option1.checked === false){
            this.setState({option1: {checked: true}});
            console.log("option1", this.state.option1.checked);
        }
        if(val === 'pos2' && this.state.option2.checked === false){
          this.setState({option2: {checked: true}});
          console.log("option2", this.state.option2.checked);
      }
      if(val === 'pos3' && this.state.option3.checked === false){
          this.setState({option3: {checked: true}});
          console.log("option3", this.state.option3.checked);
      }
      if(val === 'pos4' && this.state.option4.checked === false){
          this.setState({option4: {checked: true}});
          console.log("option4", this.state.option4.checked);
      }
      if(val === 'pos5' && this.state.option5.checked === false){
          this.setState({option5: {checked: true}});
          console.log("option5", this.state.option5.checked);
      }
      //   else {
      //     this.setState({option1: {checked: false}});
      //   }
  }
    }
  }
  selectColor = (e) => {
    let val = e.target.id
    if(this.state.option1.checked === true){
      this.setState({option1: {value: val, checked: false}});
    }
    if(this.state.option2.checked === true){
      this.setState({option2: {value: val, checked: false}});
    }
    if(this.state.option3.checked === true){
      this.setState({option3: {value: val, checked: false}});
    }
    if(this.state.option4.checked === true){
      this.setState({option4: {value: val, checked: false}});
    }
    if(this.state.option5.checked === true){
      this.setState({option5: {value: val, checked: false}});
    }
    
    this.setColor();
      
  }
  setColor = () => {
    color1 = {background: this.state.option1.value};
    color2 = {background: this.state.option2.value};
    color3 = {background: this.state.option3.value};
    color4 = {background: this.state.option4.value};
    color5 = {background: this.state.option5.value};
    this.makeItWork();
    console.log(this.state);
}

checkState = () => {
  console.log(this.state);
}

    
    render() {

        return (
            <div>
                <button onClick={this.generateRandom}>new game</button>
                <button onClick={this.makeItWork}>make it work</button>
                {this.state.hiddenView && <div>{this.state.solution.map(color => <div style={{background: color}} className='colorPosition'>{color}</div>)}<h2>{winningMsg}</h2></div>}
                <h2>{attemptArr} <button onClick={this.submitAttempt}>submit</button></h2>

                {/* <h2 className='selectMenu'>{option1.label} */}
                <div className="colorChoices">
                  <button onClick={this.selectColor} id="red"></button>
                  <button onClick={this.selectColor} id="orange"></button>
                  <button onClick={this.selectColor} id="yellow"></button>
                  <button onClick={this.selectColor} id="green"></button>
                  <button onClick={this.selectColor} id="blue"></button>
                  <button onClick={this.selectColor} id="black"></button>
                  <button onClick={this.selectColor} id="ivory"></button>
                  <button onClick={this.selectColor} id="brown"></button>
                </div>
                <form onChange={this.isChecked}>
            <div className="colorPositionDiv">
            <label>
              <input type="checkbox" className='pos1'/><div className='colorPosition pos1' style={color1}>1</div>
            </label>
            <label>
              <input type="checkbox" className='pos2'/><div className="colorPosition" id='pos2' style={color2}>2</div>
            </label>
            <label>
              <input type="checkbox" className='pos3'/><div className="colorPosition" id='pos3' style={color3}>3</div>
            </label>
            <label>
              <input type="checkbox" className='pos4'/><div className="colorPosition" id='pos4' style={color4}>4</div>
            </label>
            <label>
              <input type="checkbox" className='pos5'/><div className="colorPosition" id='pos5' style={color5}>5</div>
            </label>
            </div>
            </form>
            <button onClick={this.checkState}>check state</button>
            <button onClick={this.setColor}>set color</button>
        <div>{attemptArr.map(color => <div className='colorPosition' style={{background: color}}></div>)}div</div>
             <h2>{attemptArr[2]}</h2>
            </div>
            
        );
    }
}