import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {

  // static defaultProps = {
  //   cardDate : "4 days ago.."
  // }

  render() {
    return (
      <div className="card">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text"><small className="text-muted">{this.props.cardDate}</small></p>
        </div>
      </div>
    );

  }
}

Card.defaultProps = {
  cardTitle : "This is Default Title",
}

Card.propTypes = {
  cardText : PropTypes.string.isRequired
}

export default Card

