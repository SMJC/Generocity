import React, { Component } from 'react';
import '../scss/app.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="loginWrapper container loginAndSignUp">
        <div className="row" style={{ height: '15vh' }} />
        <div className="col" style={{ maxWidth: '90%' }}>
          <h3 style={{ textAlign: 'center', margin: '30px', color: '$warmGray' }}>connect</h3>
          <form>
            <div className="form-group loginAndSignUp">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                aria-describedby="emailHelp"
                className="form-control"
                id="exampleInputEmail1"
                name="userEmail"
                placeholder="hi@theneighborhood.com"
                type="email"
                onChange={(e) => this.props.handleChange(e)}
              />
              <small className="form-text text-muted" id="emailHelp">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group loginAndSignUp">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => this.props.handleChange(e)}
              />
            </div>
            <button
              className="btn btn-primary loginAndSignUpBtn"
              type="submit"
              onClick={(e) => this.props.handleLoginSubmit(e)}
            >
              Get connected!
            </button>
          </form>
        </div>
        <div className="row" style={{ height: '20vh' }} />
      </div>
    );
  }
}
export default Login;

// import react, useState, useEffect
// import react router objects

// require App component

// create form function
// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
// const useInput = init => {
//   const [ value, setValue ] = useState(init);
//   const onChange = e => {
//     setValue(e.target.value);
//   }
//   // return the value with the onChange function instead of setValue function
//   return [ value, onChange ];
// }

// pass in props, create CreateItem component
// all the states and setStates utilizes the userInput('')

/* eslint-disable react/prefer-stateless-function */

// const LogIn = () => {
//   return <div />;
// };
// function to save item
// check for errors
// if all good, set state

// post req to Item
// catch errors

// return interface
// input fields

// create buttons with onClick for save and cancel;
