/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import ItemCard from './ItemCard.jsx';
import AddItem from './AddItem';
import '../scss/app.scss';

class Home extends Component {
  render() {
    const { allItems } = this.props; // provides this.state.allItems as an array

    // use map method to transform allItems into cards
    const cards = allItems.map((item) => (
      <div className="card">
        <ItemCard inProfile={false} item={item} sendMessageButton={this.props.sendMessage} />
      </div>
    ));

    return (
      <>
        <section className="innerNav">
          <section className="leftNav" />
          <section className="rightNav">
            {/* <!-- Button trigger modal --> */}
            <button
              className="btn btn-dark addItemBtn"
              data-target="#addItemModal"
              data-toggle="modal"
              type="button"
            >
              Add Item
            </button>
          </section>
        </section>
        {/* <!!-- Modal Button - Display Content is in AddItem.jsx --!!> */}
        <div
          aria-hidden="true"
          aria-labelledby="exampleModalScrollableTitle"
          className="modal fade"
          id="addItemModal"
          role="dialog"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalScrollableTitle">
                  Add an Item
                </h5>
                <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <AddItem
                  handleChange={this.props.handleChange}
                  handleFileChange={this.props.handleFileChange}
                  handleSubmit={this.props.handleSubmit}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal" type="button">
                  Close
                </button>
                <button
                  className="btn btn-primary"
                  data-dismiss="modal"
                  type="submit"
                  onClick={(e) => this.props.handleSubmit(e)}
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="itemsContainer">{cards}</section>
      </>
    );
  }
}

export default Home;
