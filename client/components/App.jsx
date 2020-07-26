import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/app.scss';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import AddItem from './AddItem.jsx';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // store most state in App component, make available to child components as props
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
      isloggedIn: false,
      userEmail: 'email@email.com',
      userPoints: '',
      userFirstName: 'Captain',
      userLastName: 'Marvel',
      userId: '',
      password: '',
      userAddress: { zipcode: '', street: '', city: '', state: '' },
      //userPoints: 0,
    };
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
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link" href="#">Link</a> */}
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
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
              </li> */}
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
            render={(props) => <Home {...props} allItems={this.state.allItems} />}
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
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <SignUp
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
                userId={this.state.userId}
                // email={this.state.userEmail}
                // firstName={this.state.userFirstName}
                // lastName={this.state.userLastName}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
