// seting up Class components
//===============================================================
// 1) React renders on MOUNT
// 2) React re-renders whenever props are changed
// 3) React re-renders whenever setState function is called
//===============================================================
import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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
      // adding searchField to our state
      searchField: "",
    };
  }
  // ===================================================
  // WE need to answer following questions:
  // 1) How to get the monster list?
  // the list should rerender as soon as app is mounted (started)
  // A : using React lifecycle methods .
  // ORDER : componentDidMount runs THIRD (after render function)
  // 2) Where to get the list from?
  // we need to fetch it from API
  // https://jsonplaceholder.typicode.com/users
  // 3) Where to put the list?
  // A: gonna be in our state monster array

  // ======================================================
  // onSearchChange optimization, so this method is not reinitialize every time rerender happens
  onSearchChange = (event) => {
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
  };

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
        // whenever we call setState , render is gonna be called again
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  // ORDER: render function runs after construction function
  // it determines what to show and it runs every time React needs to update DOM
  render() {
    // deconstruction
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // we need to filter monsters to match from searchbox
    // we know that monsters = [{'name: Leanne'}, {name : 'Ervin'}] etc ..
    const filteredMonsters = monsters.filter((monster) => {
      // returns boolean
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
