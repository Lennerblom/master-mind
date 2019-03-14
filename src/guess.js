import React, { Component } from 'react';

let color1 = {background:'white'};
let color2 = {background:'white'};
let color3 = {background:'white'};
let color4 = {background:'white'};
let color5 = {background:'white'};

export default class Guess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess1: [],
        }
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

    render() {
        return (
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
            
        );
    }
}