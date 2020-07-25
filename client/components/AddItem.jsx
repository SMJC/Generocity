import React, { Component } from 'react';


class AddItem extends Component {
  constructor(props){
    this.state = {
      itemLocation: '', // zipcode
      ownedBy: '',
      claimed: false,
      address: '' // for MVP, maybe we display address so other users can pick up item w/o messaging other users
    }
  }

  /*------TODO-----*/ 
  // define method to handle user input
  // define method to send input to DB upon submission
  // add image upload

  render() { 
    return ( 
      <div></div>
     );
  }
}
 
export default AddItem;