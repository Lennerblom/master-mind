import React, { Component } from 'react';
import Game from './game';
import Login from './login';
import { connect } from 'react-redux';
import Slide from '@material-ui/core/Slide';

import {userAdd, userDelete, userUpdate, userFetch } from './lib/user-reducer';
import Instructions from './instructions';

let buttonText = 'how to play'
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginView: true,
            checked: false,
        } 
    }

    updateView = () => {
        this.setState({loginView: false});
    }

    handleSlide = () => {
        if(this.state.checked === false){
          this.setState({checked: true});
          buttonText = 'return to game';
        }
        else{
          this.setState({checked: false});
          buttonText = 'how to play'
        }
    }

    render() {
        return (
            <div>
                <button className='how-to-play' onClick={this.handleSlide}>{buttonText}</button>
                <Slide direction="down" in={this.state.checked} mountOnEnter unmountOnExit><Instructions className='instructions'/></Slide>
                {/* {this.state.loginView && <Login onComplete={this.props.userAdd} viewChange={this.updateView}/>} */}
                 <Game className='game'/>
            </div>
            
        );
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    userAdd: user => dispatch(userAdd(user)),
    userUpdate: user => dispatch(userUpdate(user)),
    userFetch: user => dispatch(userFetch(user)),
    userDelete: user => dispatch(userDelete(user)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);