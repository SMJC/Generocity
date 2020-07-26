import React, { Component, Fragment } from 'react';
import ItemCard from './ItemCard.jsx';
import '../styles/application.scss'; // would each page have different css?

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstName: 'Captain',
      userLastName: 'Marvel',
      userEmail: 'email@emai.com',
    };
  }

  componentDidMount() {
    // const { userEmail, userFirstName, userLastName } = this.props;
    fetch('/item/' + this.props.userId)
      .then((res) => res.json())
      .then((data) => {
        return this.setState(data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { allItems } = this.props;
    const { userFirstName, userLastName, userEmail } = this.state;
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
          {userFirstName} {userLastName}
          <p>User Email: {userEmail}</p>
        </section>
        <section className="itemsContainer">{cards}</section>
      </>
    );
  }
}

export default Profile;
