import React, { Component } from 'react';
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
        //this.props.viewChange();
        this.props.onComplete(this.state); 
        this.setState({...this.defaultState});
    };
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

                <input type="submit" value="Create User" />
            </form>
            </fieldset>
            
            </div>
        );
    }
}
