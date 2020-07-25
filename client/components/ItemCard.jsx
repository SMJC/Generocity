import React, { Component } from 'react';
import '../styles/Home.css';

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ***** may not need this info as state at all - it will be stored in the item object (which is an element in the allItems array)
      itemLocation: '', // zipcode
      ownedBy: '',
      claimed: false,
      address: '', // for MVP, maybe we display address so other users can pick up item w/o messaging other users
    };
  }
  render() {
    return (
      <article className="itemCard">
        <p>Hi, I'm a {this.props.name} ItemCard!</p>
        <p>Location: {this.props.itemLocation} </p>
        <p>Owner: {this.props.ownedBy}</p>
      </article>
    );
  }
}

export default ItemCard;
