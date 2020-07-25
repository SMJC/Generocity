import React, { Component, Fragment } from 'react';
import ItemCard from './ItemCard.jsx';
import '../styles/application.scss'; // would each page have different css?

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { allItems, userEmail, userZip } = this.props;
    // query by userId
    const cards = allItems.map((item) => {
      return (
        <section className="cardContainer">
          <section className="cardItem">
            <ItemCard
              name={item.itemTitle}
              userid={item.itemUserId}
              location={item.itemAddress}
              status={item.itemStatus}
            />
          </section>
          <section className="cardItem">Additional functionality</section>
        </section>
      );
    });

    return (
      <>
        <section className="userProfile">
          <p>
            User Email: {userEmail} <br>User Location: {userZip}</br>
          </p>
        </section>
        <section className="itemsContainer">{cards}</section>
      </>
    );
  }
}

export default Profile;
