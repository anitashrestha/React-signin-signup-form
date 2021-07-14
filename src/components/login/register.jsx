import React from 'react';
import loginImg from '../../login.svg';

export class Register extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
    super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">
                    Register
                </div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="LoginImage" />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="Password"/>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <button type="button" className="btn">
                        Register
                    </button>
                </div>
            </div>
        )
    }
}

export default Register;