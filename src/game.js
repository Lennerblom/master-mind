import React, { Component } from 'react';


// const options = [
//     { value: 'red', label: 'red' },
//     { value: 'orange', label: 'orange' },
//     { value: 'yellow', label: 'yellow' },
//     { value: 'green', label: 'green' },
//     { value: 'blue', label: 'blue' },
//     { value: 'black', label: 'black' },
//     { value: 'white', label: 'white' },
//     { value: 'brown', label: 'brown' },
//   ];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white', 'brown'];
//const randomArr = [];
const attemptArr = ['_ ', '_ ', '_ ', '_ ', '_'];
//const clueArr = [];
// const option1 = {value: '_', label: '_'};
// const option2 = null;
// const option3 = null;
// const option4 = null;
// const option5 = null;

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            hiddenView: true,
            solution: [],
            option1: {value: '_', checked: false},
            option2: {value: '_', checked: false},
            option3: {value: '_', checked: false},
            option4: {value: '_', checked: false},
            option5: {value: '_', checked: false},
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

    submitAttempt = () => {
        console.log('submitted');
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

      selectColor = () => {
          console.log('color selected');
          this.setState({option1: {value: 'red', checked: false}})
          console.log(this.state);

      }
      isChecked = (e) => {
          console.log('ischecked!', e.target.className);
          let val = e.target.className;
          if(val === 'pos1' && this.state.option1.checked === false){
              this.setState({option1: {checked: true}});
              console.log("option1", this.state.option1.checked);
          }
          else {
            this.setState({option1: {checked: false}});
          }

      }
    //   handleChange = (e) => {
    //     console.log('name',e.name);
    //       let val = e.value;
    //       console.log('value',val);
          
    //       if(val === this.state.option1){
    //         this.setState({ option1: val });
    //         console.log('option1',this.state.option1)
    //         return;
    //       }
    //       else if(val.id === 2){
    //         this.setState({ option2: val });
    //         console.log('option2',this.state.option2)
    //         return;
    //       }
    //       else if(val === option3){
    //         this.setState({ option3: val });
    //         return;
    //       }
    //       else if(val === option4){
    //         this.setState({ option4: val });
    //         return;
    //       }
    //       else if(val === option5){
    //         this.setState({ option5: val });
    //         return;
    //       }

    //   }
    
    render() {

        return (
            <div>
                <button onClick={this.generateRandom}>new game</button>
                <h2>{this.state.solution}</h2>
                <h2>{attemptArr} <button onClick={this.submitAttempt}>submit</button></h2>

                {/* <h2 className='selectMenu'>{option1.label} */}
                <div className="colorChoices">
                  <button onClick={this.selectColor} id="red"></button>
                  <button onClick={this.selectColor} id="orange"></button>
                  <button onClick={this.selectColor} id="yellow"></button>
                  <button onClick={this.selectColor} id="green"></button>
                  <button onClick={this.selectColor} id="blue"></button>
                  <button onClick={this.selectColor} id="black"></button>
                  <button onClick={this.selectColor} id="white"></button>
                  <button onClick={this.selectColor} id="brown"></button>
                </div>
                <form onChange={this.isChecked}>
                <div className="colorPositionDiv">
                <label>
                  <input type="checkbox" className='pos1'/><div className='colorPosition pos1'></div>
                </label>
                <label>
                  <input type="checkbox"/><div className="colorPosition" id='pos2'></div>
                </label>
                <label>
                  <input type="checkbox"/><div className="colorPosition" id='pos3'></div>
                </label>
                <label>
                  <input type="checkbox"/><div className="colorPosition" id='pos4'></div>
                </label>
                <label>
                  <input type="checkbox"/><div className="colorPosition" id='pos5'></div>
                </label>
                </div>
                </form>

            </div>
            
        );
    }
}