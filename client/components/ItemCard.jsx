import React, { Component } from 'react';
import '../scss/app.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ItemCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { _id, category, description, image, status, title, user_id } = this.props.item;
    const { sendMessageButton } = this.props;

    let claimed = status ? 'Yes' : 'No'
    let messageButton;
    if (this.props.inProfile) {
      messageButton =  null
    } else {
      messageButton =   <button type="button"
      class="btn btn-primary appButton"
      style={{ width: '100%' }}
      value={user_id}
      onClick={(e) => sendMessageButton(e)}
    >Message Lister</button>
    
    }
    /* TO DO: 
      backend: add location
      frontend: add description & image
      questions: value on message listener button?
    */
    return (
      <article className="itemCard">
        <div className="itemText">
          <h5>{title}</h5>
          <p>
            Location: Enter Location Here <br />
            <br />
            Category: {category}<br />
            Claimed: {claimed}
          </p>
        {messageButton}  
        
        </div>
      </article>
    );
  }
}

export default ItemCard;
