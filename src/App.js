// seting up Class components
import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // null state ... no users -> showing empty array in case of error
      monsters: [],
    };
  }
  // WE need to answer following questions:
  // 1) How to get the monster list?
  // the list should rerender as soon as app is mounted (started)
  // A : using React lifecycle methods .
  componentDidMount() {
    // we gonna fetch the data from this API
    fetch("https://jsonplaceholder.typicode.com/users")
      // if success:
      // to see response object in console:
      // .then((response) => console.log(response))

      // whatever we will get from this response.json file we can use later
      .then((response) => response.json())
      // now we can access users from response.json file
      // .then((users) => console.log(users));

      // Now we gonna assign values (users) to monsters array
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          // callback function just to check if this.state has correct value
          () => {
            console.log(this.state);
          }
        )
      );
  }
  // ===================================================
  // 2) Where to get the list from?
  // we need to fetch it from API
  // https://jsonplaceholder.typicode.com/users
  // 3) Where to put the list?
  // A: gonna be in our state monster array
  // then((users) =>
  // this.setState(
  //   () => {
  //     return { monsters: users };
  //   });
  // ======================================================
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            // it's a good practice to add a key at the highest element (in this case div)
            // so its easier to differentiate these h1 elements from each other .
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
