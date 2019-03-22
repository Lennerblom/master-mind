import React, { Component } from 'react';
import Game from './game';
import Login from './login';
import { connect } from 'react-redux';

import {userAdd, userDelete, userUpdate, userFetch } from './lib/user-reducer';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginView: true,
        } 
    }

    updateView = () => {
        this.setState({loginView: false});
        

    }

    render() {
        return (
            <div>
                {this.state.loginView && <Login onComplete={this.props.userAdd} viewChange={this.updateView}/>}
                <Game/>
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