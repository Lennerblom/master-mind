import React, { Component } from 'react';
//import bcrypt from 'bcrypt';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            username: '',
            password: '',
        };
        const initialState = this.props.user || this.defaultState;

        this.state = {...initialState}
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.viewChange();
        this.props.onComplete(this.state); 
        this.setState({...this.defaultState});
    };
    onChange = (e) => {
      let val =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    //   if(e.target.type === "password"){
    //     bcrypt.hash(e.target.value,10)
    //     .then(hashedPassword => {
 
    //     e.target.value = hashedPassword;
    //     val = hashedPassword;
    //     console.log('hashed:', val);
    //     })
        
    //   }
  
    const changedBit = {
      [e.target.name]: val
    };
    this.setState(changedBit);
    }
    render() {
        return (
            <div>
                <fieldset className="login-form">
                <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <label>Username:
                  <input type="text" name="username" value={this.state.username}/>
                </label>

                <label>Password:
                  <input name="password" type="password" value={this.state.password}/>
                </label>
                <label>
                  <input type="submit" value="Create User" />
                </label>
            </form>
            </fieldset>
            
            </div>
        );
    }
}
