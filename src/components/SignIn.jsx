import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SignIn.css';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    return (
      <div className='register'>
        <form className='white login-form' onSubmit={this.handleSubmit}>
          <h5 className='grey-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <input type='email' id='email' placeholder='Email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <input type='password' id='password' placeholder='Password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn red lighten-1 z-depth-0'>Login</button>
          </div>
          <Link to='/join'>Become a Member</Link>
        </form>
      </div>
    )
  }
}

export default SignIn;