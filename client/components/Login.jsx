
import React, { Component } from 'react';
import '../styles/application.scss';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) { // add as onchange method
    this.setState({ [e.target.name]: e.target.value})
   }

   handleSubmit(e) {
    e.preventDefault();
   
    const {userEmail, password} = this.state;
    const body = {userEmail, password};

  //   fetch('/addItem', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "Application/JSON"
  //     },
  //     body: JSON.stringify(body)
  //   })
  //   .then(res => {
  //     console.log("res in AddItem", res);
  //     res.json();
      // this.setState({itemTitle: '', itemDescription: '', itemCategory: '', itemImage: '', itemAddress: ''})
      // this.props.history.push('/')
  //   })
  //   .catch(err => {
  //     console.log('AddItem Post error: ', err);
  //     this.setState({itemTitle: '', itemDescription: '', itemCategory: '', itemImage: '', itemAddress: ''})
  //   });
    
   }


render() {
  return (
    <div className="loginWrapper container">
          <div class="row" style={{height: '15vh'}}></div>
    <div class="col">
    <h3 style={{textAlign: 'center', margin: '30px'}}>join the community</h3>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="userEmail" onChange={(e) => this.handleChange(e)}></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={(e) => this.handleChange(e)}></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
</form>
</div>
<div class="row" style={{height: '20vh'}}></div>
    </div>
  )
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