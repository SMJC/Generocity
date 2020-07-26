import React, { Component, Fragment } from 'react';
import ItemCard from './ItemCard.jsx';
import '../styles/application.scss'; // would each page have different css?

// create local state for get request of user profile
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 'blah blah',
      userFirstName: 'Captain',
      userLastName: 'Marvel',
      userEmail: 'email@emai.com',
      userItems: [],
    };
  }

  componentDidMount() {
    // const { userEmail, userFirstName, userLastName } = this.props;
    fetch('/item/' + this.props.userId)
      .then((res) => res.json())
      .then((data) => {
        return this.setState({
          userId: data.userId,
          userFirstName: data.userFirstName,
          userLastName: data.userLastName,
          userEmail: data.userEmail,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    fetch('/item/:user')
      .then((res) => res.json())
      .then((data) => {
        return this.setState({ userItems: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { userItems } = this.state;
    const { userFirstName, userLastName, userEmail, userId } = this.state;
    // query by userId
    const cards = userItems.map((item) => {
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
          <p>User Id: {userId}</p>
        </section>
        <section className="itemsContainer">{cards}</section>
      </>
    );
  }
}

export default Profile;
