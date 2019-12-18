import React, { Component } from 'react';
import './SignUp.css';
import { sendNewUserToFireBase } from '../actions';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    redirect: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let displayName = this.state.firstName + ' ' + this.state.lastName;
    sendNewUserToFireBase(this.state.email, this.state.password, displayName)();
    this.setState({ ...this.state, redirect: true })
  }
  render() {
    return (
      <div className='register'>
        {this.state.redirect ? <Redirect to='/profile' /> : ''}
        <form className="white register-form" onSubmit={this.handleSubmit}>
          <h5 className="heading">Membership Registration</h5>
          <div className="input-field">
            <input type="email" id='email' placeholder='Email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input type="password" id='password' placeholder='Password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input type="text" id='firstName' placeholder='First Name' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input type="text" id='lastName' placeholder='Last Name' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp