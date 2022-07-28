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
      searchField: "",
    };
    console.log("Constructor");
  }
  // WE need to answer following questions:
  // 1) How to get the monster list?
  // the list should rerender as soon as app is mounted (started)
  // A : using React lifecycle methods .
  // ORDER : componentDidMount runs THIRD (after render function)
  componentDidMount() {
    console.log("Component Mount");
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
    console.log("Render");

    // we need to filter monsters to match from searchbox
    // we know that monsters = [{'name: Leanne'}, {name : 'Ervin'}] etc ..
    const filteredMonsters = this.state.monsters.filter((monster) => {
      // returns boolean
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            // console.log({ startingArray: this.state.monsters });
            // lowerCase the search
            const searchField = event.target.value.toLocaleLowerCase();

            // updates our state
            this.setState(
              () => {
                return { searchField };
              },
              () => {
                // console.log({ endingArray: this.state.monsters });
              }
            );
          }}
        />
        {filteredMonsters.map((monster) => {
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
