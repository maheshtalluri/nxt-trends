// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false}

  onSuccessLogin = () => {
    const {history} = this.props

    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(data.error_msg)

    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  renderUsername = () => {
    const {username} = this.state
    console.log(username)
    return (
      <div className="username-container">
        <label htmlFor="username" className="username-label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          onChange={this.onUsername}
          value={username}
          placeholder="Username"
          className="username-input"
        />
      </div>
    )
  }

  //   passwordError = () => {
  //     const {password} = this.state
  //     if (password === '') {
  //       return 'Enter the password'
  //     }
  //     return ''
  //   }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="username-container">
        <label htmlFor="username" className="username-label">
          PASSWORD
        </label>
        <input
          type="password"
          id="username"
          onChange={this.onPassword}
          value={password}
          placeholder="Password"
          className="username-input"
        />
      </div>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-website-logo"
          />
          <div>{this.renderUsername()}</div>
          <div>{this.renderPassword()}</div>
          <button type="submit" className="submit-button">
            Login
          </button>
          {showErrorMsg && <p>{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
