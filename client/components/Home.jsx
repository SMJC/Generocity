import React, { Component } from 'react';
import ItemCard from './ItemCard.jsx'
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
      <section className ="itemsContainer">
      {cards}
    </section>
     );
  }
}
 
export default Home;