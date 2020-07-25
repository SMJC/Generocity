import React, { Component } from 'react';
import ItemCard from './ItemCard.jsx'
import AddItem from './AddItem'
import '../styles/Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  


  render() { 
    const {allItems} = this.props; // provides this.state.allItems as an array
    // define *map method to transform allItems into char cards
  const cards = allItems.map((item) => {
    return (
        <ItemCard 
          name={item.name}
          // other props here
          />
         );
      });

    return ( 
      <>
{/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-dark addItemBtn" data-toggle="modal" data-target="#exampleModalScrollable">
  Add Item
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Add an Item</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <AddItem />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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