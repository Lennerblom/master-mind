import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                <form action="http://localhost:3016/signup" method="POST">
                <label>
                Username: <input name="username"/>>
                </label>

                <label>
                    Password: <input name="password" type="password" />
                </label>

                <input type="submit" value="Create User" />
            </form>
            </div>
        );
    }
}