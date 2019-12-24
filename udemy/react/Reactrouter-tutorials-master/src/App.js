import React from 'react';
import './App.css';
import { NavLink, Link} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div>

<ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
       <h1>Home</h1>
      </div>
    );
  }
}

export default App;
