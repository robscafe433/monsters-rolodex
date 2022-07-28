// seting up Class components
import { Component } from "react";
import "./App.css";

class App extends Component {
  // ORDER : Constructor function will run FIRST

  constructor() {
    // just to see in console the flow of rerendering ( what order runs the functions )
    super();

    // State object for this Component with initial values (monsters)
    this.state = {
      // null state ... no users -> showing empty array in case of error
      monsters: [],
    };
    console.log("1");
  }
  // WE need to answer following questions:
  // 1) How to get the monster list?
  // the list should rerender as soon as app is mounted (started)
  // A : using React lifecycle methods .
  // ORDER : componentDidMount runs THIRD (after render function)
  componentDidMount() {
    console.log("3");
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
  // .then((users) =>
  // this.setState(
  //   () => {
  //     return { monsters: users };
  //   });
  // ======================================================

  // ORDER: render function runs after construction function
  // it determines what to show
  render() {
    console.log("2");
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
