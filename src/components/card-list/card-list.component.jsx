import { Component } from "react";
import "./card-list.styles.css";
import Cards from "../card/card.component";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);

    console.log("render from CardList");

    // deconstruction
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          // const { name, email, id } = monster;
          return <Cards monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
