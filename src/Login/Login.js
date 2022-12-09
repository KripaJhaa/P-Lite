import React, { Component } from 'react'


export default class Login extends Component {
  render() {
    return (
        <form className='container'>
        <div className = "mb-3">
          <label for="exampleInputEmail1" className = "form-label">Email address</label>
          <input type="email" className = "form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          <div id="emailHelp" className = "form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className = "mb-3">
          <label for="exampleInputPassword1" className = "form-label">Password</label>
          <input type="password" className = "form-control" id="exampleInputPassword1"/>
        </div>
        <div className = "mb-3 form-check">
          <label className = "form-check-label" for="exampleCheck1">User Type</label>
          <select name="UserType" id="userType">
            <option value="Primary">Primary</option>
            <option value="SL">SL</option>
          </select>
        </div>
        <button type="submit" className = "btn btn-primary">Submit</button>
      </form>
  
    )
  }
}
