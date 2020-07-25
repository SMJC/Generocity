import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
      userZip: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) { // add as onchange method
    this.setState({ [e.target.name]: e.target.value})
   }

   handleSubmit(e) {
    e.preventDefault();
   
    const {userEmail, password, userZip} = this.state;
    const body = {userEmail, password, userZip};
    console.log("submit signUp req body:", body)
    // make POST request to server

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
  };


  render() { 


    return ( 

      <div className="container">
         <div class="row" style={{height: '15vh'}}></div>
    <div class="col">
    <h3 style={{textAlign: 'center', margin: '30px'}}>join the community</h3>
      <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email" name="userEmail" onChange={(e) => this.handleChange(e)}></input>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password" name="password" onChange={(e) => this.handleChange(e)}></input>
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name=""></input>
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" ></input>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity"></input>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option defaultValue="">Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" name="userZip" onChange={(e) => this.handleChange(e)}></input>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" ></input>
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-dark" onClick={(e) => this.handleSubmit(e)}>Sign Up</button>
    </form>
    </div>
    <div class="row" style={{height: '20vh'}}></div>
    </div>
     );
  }
}
 
export default SignUp;