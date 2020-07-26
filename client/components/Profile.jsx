import React, { Component, Fragment } from 'react';
import ItemCard from './ItemCard.jsx';
import EditItem from './EditItem';
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
      itemImage: e.target.value,
    });
  }
  //

  handleSubmit(e) {
    e.preventDefault();
    const {
      itemTitle,
      itemDescription,
      itemCategory,
      itemImage,
      itemAddress,
    } = this.state.userItems;
    const body = { itemTitle, itemDescription, itemCategory, itemImage, itemAddress };
  }
    /*--- GET request to get all items from server---- */
  componentDidMount() {
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

    /*--- POST request to edit item to server---- */
    // handleSubmit(e) {
    //   e.preventDefault();
    //   const { itemTitle, itemDescription, itemCategory, itemImage, claimed, user_id } = this.state;
    //   const body = { title: itemTitle, description: itemDescription, image: itemImage, category: itemCategory, status: claimed, user_id };
    //   console.log('itemCategory', itemCategory);
  
    //   console.log('submit AddItem req body:', body);
    //   const url = '/item/add';
    //   fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "Application/JSON"
    //     },
    //     body: JSON.stringify(body)
    //   })
    //     .then(res => {
    //       res.json()
    //       // refresh state values
    //       // this.setState({ itemTitle: '', itemDescription: '', itemCategory: '', itemImage: '', itemAddress: '' })
    //       // return to home page
    //       // this.props.history.push('/')
    //       console.log("res in AddItem", res);
    //     })
    //     .catch(err => {
    //       console.log('AddItem Post error: ', err);
    //       // this.setState({ itemTitle: '', itemDescription: '', itemCategory: '', itemImage: '', itemAddress: '' })
    //       this.props.history.push('/')
    //     });
    // }
  render() {
    const { userItems } = this.state;
    const { userFirstName, userLastName, userEmail, userId } = this.state;
    const cards = userItems.map((item) => {
      return (
        <>
          <section className="cardContainer">
            <ItemCard
            item={item}
            inProfile={true}
              // name={item.itemTitle}
              // userid={item.itemUserId}
              // location={item.itemAddress}
              // status={item.itemStatus}
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
        </>
      );
    });

    return (
      <>
        <div
          class="modal fade"
          id="editItemModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">
                  Edit Item
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditItem
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  handleFileChange={this.handleFileChange}
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="submit" class="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>
                  Edit Item
                </button>
              </div>
            </div>
          </div>
        </div>

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
