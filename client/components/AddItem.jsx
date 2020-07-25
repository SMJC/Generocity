import React, { Component } from 'react';


class AddItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemLocation: '', // zipcode
      ownedBy: '',
      claimed: false,
      address: '' // for MVP, maybe we display address so other users can pick up item w/o messaging other users
    }
  }

  /*------TODO-----*/ 
  // define method to handle user input
  // tracks input for login/signup forms - assign input field a 'name' attribute that corresponds to state prop
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
   }
  // define method to send input to DB upon submission
  // add image upload

  render() { 
    return ( 
      <div>Hi from AddItem!

{/* image input */}
      <div class="input-group mb-3">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile02"></input>
          <label class="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
        </div>
        <div class="input-group-append">
          <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
        </div>
      </div>

      </div>
     );
  }
}
 
export default AddItem;