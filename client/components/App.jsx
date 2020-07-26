import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import AddItem from './AddItem.jsx';
import Chat from './chat/Chat.jsx'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // store most state in App component, make available to child components as props
      isloggedIn: false,
      allItems: [
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
      ], // (each item is an object)
      userEmail: 'email@email.com',
      userPoints: '',
      userFirstName: '',
      userLastName: '',
      userId: '',
      password: '',
      userStreet: '',
      userStreet2: '',
      userCity: '',
      userState: '',
      userZip: '',


      //userPoints: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
  }
    componentDidUpdate() {
      this.getAllItems();
    }
    handleChange(e) { 
      this.setState({ [e.target.name]: e.target.value})
    }

    /*--- POST request to /LOG-IN---- */
    handleLoginSubmit(e) {
      e.preventDefault();
     
      const {userEmail, password} = this.state;
      const body = {userEmail, password};
  
      fetch('/log-in', {
        method: 'POST',
        headers: {
          "Content-Type": "Application/JSON"
        },
        body: JSON.stringify(body)
      })
      .then(res => {
        console.log("res in /log-in", res);
        res.json();
  
        this.setState({isLoggedIn: true, password: ''})
        this.props.history.push('/')
      })
      .catch(err => {
        console.log('/LOG-IN Post error: ', err);
        this.setState({userEmail: '', password: ''})
      });
      
     }

  /*----------------POST request To SIGNUP-------------------*/
   handleSignUpSubmit(e) {
    e.preventDefault();
   
    const {userFirstName, userLastName, password, userEmail, userStreet, userStreet2, userState, userCity, userZip} = this.state;
    const body = {userFirstName, userLastName, password, userEmail, userStreet, userStreet2, userState, userCity, userZip};
    console.log("submit signUp req body:", body)
    // make POST request to server
     
    fetch('/sign-up', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      console.log("res in signUp", res);
      res.json();
      // TODO: setState with isLoggedIn, clear pw
      // return to home page
      this.props.history.push('/')
    })
    .catch(err => {
      console.log('AddItem Post error: ', err);
      // todo - clear all fields with setState
      this.setState({})
    });
  };

      /*--- GET Request for All items--- */
    getAllItems() { // call in componentDidMount
    
        fetch('/item/all')
        .then(res => {
          console.log("res in GET /item/all", res);
          res.json();
         
           })
        .then(array => {
          // update state with array
          this.setState({allItems: array})
        } )
        // this.props.history.push('/'))
        .catch(err => {
          console.log('/item/all GET error: ', err);
        });
        
       }
  /*----------------To Do-------------------*/

  // define method to fetch user data from DB
  // define method to fetch all items from DB (for MVP, maybe items from any region will display until user logs in w location info)
  // define method to handle user input (for login and sign up)
  // define method to handle login submit
  // define method to handle sign up submit
  // bind these methods to constructor, pass them down to children

  render() {
    return (
      <div className="backgroundColor" style={{ backgroundColor: '#FDFDFD' }}>
        <nav class="navbar navbar-expand-md navbar-light" style={{ backgroundColor: '#e4f3fe' }}>
          <NavLink to="/" className="nav-brand">
            <a className="navbar-brand" href="#">
              generocity
            </a>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/chat" className="nav-link">
                  Chat
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link" href="#">Link</a> */}
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" style={{ marginRight: '10px' }}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                allItems={this.state.allItems}
                userItems={this.state.userItems}
                userEmail={this.state.userEmail}
                userAddress={this.state.userAddress}
                userId={this.state.userId}
          
              />
            )}
          />
          <Route
            exact
            path="/additem"
            render={(props) => (
              <AddItem
                {...props} // add props here
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props} // add props here
                handleLoginSubmit={this.handleLoginSubmit}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <SignUp
              handleChange={this.handleChange}
              handleSignUpSubmit={this.handleSignUpSubmit}
                {...props} // add props here
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile
                {...props}
                allItems={this.state.allItems}
                userEmail={this.state.userEmail}
                userLocation={this.state.userZip}
              />
            )}
          />
                <Route
            exact
            path="/chat"
            render={(props) => (
              <Chat
                {...props}
                allItems={this.state.allItems}
                userEmail={this.state.userEmail}
                userLocation={this.state.userZip}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
