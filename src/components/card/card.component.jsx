import { Component } from "react";
import "./card.styles.css";

class Cards extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div>
        <div className='card-container' key={id}>
          <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt={`monster ${name}`}
          />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Cards;
