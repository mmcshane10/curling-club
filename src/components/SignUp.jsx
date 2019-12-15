import React, { Component } from 'react';
import './SignUp.css'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className='register'>
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