import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'red', label: 'red' },
    { value: 'orange', label: 'orange' },
    { value: 'yellow', label: 'yellow' },
    { value: 'green', label: 'green' },
    { value: 'blue', label: 'blue' },
    { value: 'black', label: 'black' },
    { value: 'white', label: 'white' },
    { value: 'brown', label: 'brown' },
  ];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white', 'brown'];
//const randomArr = [];
const attemptArr = ['_ ', '_ ', '_ ', '_ ', '_'];
//const clueArr = [];
// const option1 = {value: '_', label: '_'};
const option2 = null;
const option3 = null;
const option4 = null;
const option5 = null;

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            hiddenView: true,
            solution: [],
            option1: {value: '_', label: '_'},
            option2: {value: '_', label: '_'},
            option3: {value: '_', label: '_'},
            option4: {value: '_', label: '_'},
            option5: {value: '_', label: '_'},
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
      handleChange = (e) => {
        console.log('name',e.name);
          let val = e.value;
          console.log('value',val);
          
          if(val === this.state.option1){
            this.setState({ option1: val });
            console.log('option1',this.state.option1)
            return;
          }
          else if(val.id === 2){
            this.setState({ option2: val });
            console.log('option2',this.state.option2)
            return;
          }
          else if(val === option3){
            this.setState({ option3: val });
            return;
          }
          else if(val === option4){
            this.setState({ option4: val });
            return;
          }
          else if(val === option5){
            this.setState({ option5: val });
            return;
          }

      }
    
    render() {

        return (
            <div>
                <button onClick={this.generateRandom}>new game</button>
                <h2>{this.state.solution}</h2>
                <h2>{attemptArr} <button onClick={this.submitAttempt}>submit</button></h2>

                {/* <h2 className='selectMenu'>{option1.label} */}
                <Select
                    value={this.state.option1}
                    onChange={this.handleChange}
                    className='selectMenu'
                    options={options}
                    name='option1'
                    placeholder={this.state.option1.label}
                />
                {/* </h2> */}
                {/* <h3>{this.state.option2}</h3> */}
                <Select
                    value={option2}
                    id="2"
                    onChange={this.handleChange}
                    className='selectMenu'
                    options={options}
                />

                <Select
                    value={option3}
                    onChange={this.handleChange}
                    className='selectMenu'
                    options={options}
                />
                <Select
                    value={option4}
                    onChange={this.handleChange}
                    className='selectMenu'
                    options={options}
                />
                <Select
                    value={option5}
                    onChange={this.handleChange}
                    className='selectMenu'
                    options={options}
                />
            </div>
            
        );
    }
}