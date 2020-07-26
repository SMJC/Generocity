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
          itemImage: '',
          itemAddress: '94087',
          itemUserId: 'Reid',
          itemStatus: 'false',
        },
        {
          itemTitle: 'vase',
          itemDescription: 'an old vase',
          itemCategory: 'ornament',
          itemImage: '',
          itemAddress: '91054',
          itemUserId: 'Dave',
          itemStatus: 'true',
        },
      ],
    };
    // handleChange on edit of items
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    //
  }

  //handle event click
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleFileChange(e) {
    console.log('input Image:', e.target.value);
    this.setState({
      itemImage:
        e.target
          .value /**URL.createObjectURL(e.target.files[0]) is probably only for displaying a temp image */,
    });
  }
  //

  handleSubmit(e) {
    e.preventDefault();

    const { itemTitle, itemDescription, itemCategory, itemImage, itemAddress } = this.state;
    const body = { itemTitle, itemDescription, itemCategory, itemImage, itemAddress };
    body.itemOwner = this.props.userEmail;
    body.itemZip = this.props.userZip;
    console.log('submit AddItem req body:', body);
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
    const cards = userItems.map((item) => {
      return (
        <section className="cardContainer">
          <ItemCard
            name={item.itemTitle}
            userid={item.itemUserId}
            location={item.itemAddress}
            status={item.itemStatus}
          />
          <section className="cardItem">
            <button
              type="button"
              class="btn btn-dark editItemBtn"
              data-toggle="modal"
              data-target="#editItemModal"
            >
              Edit Item
            </button>
          </section>
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
