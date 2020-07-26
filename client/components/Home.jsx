/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ItemCard from './ItemCard.jsx';
import AddItem from './AddItem';
import '../scss/app.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    // tracks AddItem values
    this.state = {
      itemTitle: '',
      itemDescription: '',
      itemCategory: '',
      itemImage: '',
      claimed: false,
      user_id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  /*------TODO-----*/

  // define method to handle user input
  // tracks input for login/signup forms - assign input field a 'name' attribute that corresponds to state prop
  handleChange(e) {
    // add as onchange method
    this.setState({ [e.target.name]: e.target.value });
  }
  // define method to send input to DB upon submission
  /*------SUBMIT IMAGE UPLOAD-----*/

  handleFileChange(e) {
    console.log('input Image:', e.target.value);
    this.setState({
      itemImage:
        e.target
          .value /**URL.createObjectURL(e.target.files[0]) is probably only for displaying a temp image */,
    });
  }


  /*--- POST request to add item to server---- */
  handleSubmit(e) {
    e.preventDefault();

    const { itemTitle, itemDescription, itemCategory, itemImage, claimed, user_id } = this.state;
    const body = { title: itemTitle, description: itemDescription, image: itemImage, category: itemCategory, status: claimed, user_id };
    console.log('itemCategory', itemCategory);
    /* TO DO: 
    -acquire user_id when logged in to send to back end to update data 
    -drop down is not populating this.state.itemCategory
    */

    // body.itemOwner = this.props.userId; *dont need userId bc it will be in query string
    // const userAddress = Object.assign({}, this.props.userAddress); 
    // *dont need address bc server will send back the zip
    // body.itemAddress = userAddress; // need to make a deep copy using obj. assign

    console.log('submit AddItem req body:', body);
    const url = '/item/add';
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        res.json()
        // refresh state values
        // this.setState({ itemTitle: '', itemDescription: '', itemCategory: '', itemImage: '', itemAddress: '' })
        // return to home page
        // this.props.history.push('/')
        console.log("res in AddItem", res);
      })
      .catch(err => {
        console.log('AddItem Post error: ', err);
        // this.setState({ itemTitle: '', itemDescription: '', itemCategory: '', itemImage: '', itemAddress: '' })
        this.props.history.push('/')
      });
  }

  render() {
    const { allItems } = this.props; // provides this.state.allItems as an array
    console.log(allItems)
    console.log(this.props.sendMessage)
    // define *map method to transform allItems into char cards
    const cards = allItems.map((item) => {
      return (
        <section className="cardContainer">
          <ItemCard
            item={item}
            // name={item.itemTitle}
            // userid={item.itemUserId}
            // location={item.itemAddress}
            // status={item.itemStatus}
            sendMessageButton={this.props.sendMessage}
          />
        </section>
      );
    });

    return (
      <>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          class="btn btn-dark addItemBtn"
          data-toggle="modal"
          data-target="#addItemModal"
        >
          Add Item
        </button>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="addItemModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">
                  Add an Item
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddItem
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
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* CARDS DISPLAY */}
        <section className="itemsContainer">{cards}</section>
      </>
    );
  }
}

export default Home;
