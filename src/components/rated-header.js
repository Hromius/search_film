import React from 'react';
import './find.css';

export default class RatedHeader extends React.Component {
  onChanges = this.props.onChanges;
  tabSelectionFalse = this.props.tabSelectionFalse;
  render() {
    return (
      <header>
        <div className="Greetings">Будь как дома, путник!</div>
        <div className="Page-mode ">
          <span className="Search-top" onClick={this.tabSelectionFalse}>
            Поиск
          </span>
          <span className="Collection-top">Коллекция</span>
        </div>
      </header>
    );
  }
}
