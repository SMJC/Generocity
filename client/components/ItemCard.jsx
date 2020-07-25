import React, { Component } from 'react';
import '../styles/application.scss';

class ItemCard extends Component {
  render() {
    return (
      <article className="itemCard">
        <p>Hi, I'm a {this.props.name}!</p>
        <p>Location: {this.props.location} </p>
        <p>Owner: {this.props.userid}</p>
        <p>Claimed: {this.props.status}</p>
      </article>
    );
  }
}

export default ItemCard;
