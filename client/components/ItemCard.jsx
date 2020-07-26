import React, { Component } from 'react';
import '../scss/app.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ItemCard extends Component {
  render() {
    return (
      <article className="itemCard">
        <div className="itemText">
          <h5>{this.props.name}</h5>
          <p>
            Location: {this.props.location} <br />
            Owner: {this.props.userid}
            <br />
            Claimed: {this.props.status}
          </p>
        </div>
      </article>
    );
  }
}

export default ItemCard;
