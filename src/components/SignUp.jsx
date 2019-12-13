import React, { Component } from 'react';
import './SignUp.css'

class SignUp extends Component {
  constructor(props) {
    super(props)
    let state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            <h5 className="grey-text text-darken-3 heading">Membership Registration</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            </div>
          </form>
        </div>
      )
    }
  }

  export default SignUp