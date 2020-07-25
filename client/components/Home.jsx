/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ItemCard from './ItemCard.jsx';
import AddItem from './AddItem';
import '../styles/application.scss';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemTitle: '',
      itemDescription: '',
      itemCategory: '',
      itemImage: '',
      claimed: false,
      itemAddress: '' // for MVP, maybe we display address so other users can pick up item w/o messaging other users
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this)
  }

  /*------TODO-----*/ 
  // define method to handle user input
  // tracks input for login/signup forms - assign input field a 'name' attribute that corresponds to state prop
  handleChange(e) { // add as onchange method
    this.setState({ [e.target.name]: e.target.value})
   }
  // define method to send input to DB upon submission
    /*------SUBMIT IMAGE UPLOAD-----*/ 
  handleFileChange(e) {
    console.log('input Image:', e.target.value)
      this.setState({
        itemImage: e.target.value /**URL.createObjectURL(e.target.files[0]) is probably only for displaying a temp image */
      })
    }

  handleSubmit(e) {
    e.preventDefault();
   
    const {itemTitle, itemDescription, itemCategory, itemImage, itemAddress} = this.state;
    const body = {itemTitle, itemDescription, itemCategory, itemImage, itemAddress}
    body.itemOwner = this.props.userEmail;
    body.itemZip = this.props.userZip;
    console.log("submit AddItem req body:", body)
    // make POST request to server

  //   fetch('/addItem', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "Application/JSON"
  //     },
  //     body: JSON.stringify(body)
  //   })
  //   .then(res => {
  //     console.log("res in AddItem", res);
  //     res.json();
      // this.setState({itemTitle: '', itemDescription: '', itemCategory: '', itemImage: '', itemAddress: ''})
      // this.props.history.push('/')
  //   })
  //   .catch(err => {
  //     console.log('AddItem Post error: ', err);
  //     this.setState({itemTitle: '', itemDescription: '', itemCategory: '', itemImage: '', itemAddress: ''})
  //   });
  };



  render() { 
    const {allItems} = this.props; // provides this.state.allItems as an array
    // define *map method to transform allItems into char cards
    const cards = allItems.map((item) => {
      return (
        <div className="cardContainer">
          <ItemCard
            name={item.itemTitle}
            userid={item.itemUserId}
            location={item.itemAddress}
            status={item.itemStatus}
          />
        </div>
      );
    });

    return (
      <>
{/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-dark addItemBtn" data-toggle="modal" data-target="#addItemModal">
  Add Item
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="addItemModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Add an Item</h5>
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
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Add Item</button>
      </div>
    </div>
  </div>
</div>
{/* CARDS DISPLAY */ }
      <section className ="itemsContainer">
      {cards}
    </section>
    </>
     );
  }
}

export default Home;
