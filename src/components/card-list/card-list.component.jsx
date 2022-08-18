import React, { Component } from "react";
import "./card-list.styles.css";
import Cards from "../card/card.component";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);

    console.log("render from CardList");

    // deconstruction
    const { monsters, id } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          // const { name, email, id } = monster;
          return <Cards monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
