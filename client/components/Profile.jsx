import React, { Component, Fragment } from 'react';
import ItemCard from './ItemCard.jsx';
import '../scss/app.scss'; // would each page have different css?

// create local state for get request of user profile
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 'blah blah',
      userFirstName: 'Captain',
      userLastName: 'Marvel',
      userEmail: 'email@emai.com',
      userItems: [
        {
          itemTitle: 'basketball',
          itemDescription: 'an orange ball',
          itemCategory: 'sporting equipment',
          itemAddress: '94087',
          itemUserId: 'Reid',
          itemStatus: 'false',
        },
        {
          itemTitle: 'vase',
          itemDescription: 'an old vase',
          itemCategory: 'ornament',
          itemAddress: '91054',
          itemUserId: 'Dave',
          itemStatus: 'true',
        },
      ],
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
          <section className="itemText">
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
