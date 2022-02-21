import React from 'react';
import './find.css';
import { DebounceInput } from 'react-debounce-input';
export default class Find extends React.Component {
  onChanges = this.props.onChanges;
  tabSelectionTrue = this.props.tabSelectionTrue;
  query = this.props.query;
  render() {
    return (
      <header>
        <div className="Greetings">Будь как дома, путник!</div>
        <div className="Page-mode ">
          <div className="Search-top">Поиск</div>

          <div className="Collection-top" onClick={this.tabSelectionTrue}>
            Коллекция
          </div>
        </div>
        <div>
          <DebounceInput
            className="Search"
            type="text"
            minLength={1}
            debounceTimeout={500}
            onChange={this.onChanges}
            value={this.query}
            placeholder="Введите ваш запрос"
          />
        </div>
      </header>
    );
  }
}
