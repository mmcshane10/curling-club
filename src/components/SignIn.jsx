import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SignIn.css';
import { Link } from 'react-router-dom';
import { logInUser } from '../actions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    redirect: false
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    event.preventDefault();
    logInUser(this.state.email, this.state.password)();
    this.setState({...this.state, redirect: true})
  }
  
  render() {
    return (
      <div className='register'>
        {this.state.redirect ? <Redirect to='/profile' /> : ''}
        <form className='white login-form' onSubmit={this.handleSubmit}>
          <h5 className='heading'>Sign In</h5>
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