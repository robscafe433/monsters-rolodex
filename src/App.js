// seting up Class components
import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "123wersw23",
        },
        {
          name: "Frank",
          id: "1234werw23",
        },
        {
          name: "Jacky",
          id: "12323werw23",
        },
        {
          name: "Tribet",
          id: "12443werw23",
        },
      ],
    };
  }
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
