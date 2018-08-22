//           <Router>
//           <div id="main">
//           <div class="text" >
//            <center>
//            <h1>Home Page</h1>
//            <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           ref="filterTextInput"
//           onChange={this.handleChange} />
//             <button>search</button>
//             <button>Log in</button>
//             </center>
//          </div>
//          <hr />
//          <Route path="/Topic.js" component={Topic}/>
//          <Route path="/home.js" component={home}/>

//          <div id="left">
//           <h1>User name</h1>
//           <h3>ID</h3>
//           <h3>email</h3>
//           <h2>My favorite topic:</h2>
//           <button onclick={this.handleClick}>my thread</button>
//          <div id="right">
//          </div>
//        </div>
//        </div>
//        </Router>
//     );
//   }
// };
// export default App;
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Favorite_topic from "./Favorite_topic.js";
import Topic from "./Topic.js";
import home from "./home.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Thread from "./Thread/Thread";
import ThreadDetail from "./ThreadDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div class="text">
            <center>
              <h1>Welcome</h1>
              <input type="text" name="search" />
              <button>
                <Link to="/Topic">search</Link>
              </button>
              <button>
                <Link to="/home">Home</Link>
              </button>
              <button>
                <Link to="./thread">Thread</Link>
              </button>
              <button>Log in</button>
            </center>
          </div>
          <hr />
          <Route path="/Topic" component={Topic} />
          <Route path="/home" component={home} />
          <Route path="/thread" component={Thread} />
          <Route path="/threadDetail" component={ThreadDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
