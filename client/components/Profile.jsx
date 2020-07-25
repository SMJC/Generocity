import React, { Component } from 'react';
import ItemCard from './ItemCard.jsx';
import '../styles/Home.css'; // would each page have different css?

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  // display user items
  // add logic/functionality to delete items
  //

  render() {
    const { userItems } = this.props;
    const cards = userItems.map((item) => {
      return (
        <ItemCard
          name={item.name}
          // other props here
        />
      );
    });

    return <section className="itemsContainer">{cards}</section>;
  }
  // render() {
  //   return <div>HI FROM PROFILE!</div>;
  // }
}

export default Profile;
