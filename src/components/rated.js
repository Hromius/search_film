import React from 'react';
import { Rate } from 'antd';
import RatedHeader from './rated-header';

export default class Rated extends React.Component {
  tabSelectionFalse = this.props.tabSelectionFalse;

  lengthoverview = (overview) => {
    if (overview.split(' ').length > 40) {
      let str = overview.split(' ');
      let newString = ' ';
      for (let i = 0; i < 40; i++) {
        newString += ' ' + str[i];
      }
      return newString + ' ...';
    } else return overview;
  };
  rateFilm(event, elem) {
    localStorage.setItem(elem.id, JSON.stringify([elem, event]));
  }

  colorRate = (rating) => {
    if (rating <= 3) {
      return <div className="red Rating">{rating}</div>;
    } else if (rating <= 5) {
      return <div className="orange Rating">{rating}</div>;
    } else if (rating <= 7) {
      return <div className="yelloy Rating">{rating}</div>;
    } else if (rating > 7) {
      return <div className="green Rating">{rating}</div>;
    }
  };

  render() {
    let collectionID = [];
    let collection = [];

    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue;
      }

      collectionID = [...collectionID, key];
    }
    console.log(collectionID);

    collectionID.forEach((item) => {
      collection = [...collection, JSON.parse(localStorage.getItem(item))];
    });
    console.log(collection);

    return (
      <>
        <RatedHeader tabSelectionFalse={this.tabSelectionFalse} />
        <div className="FilmBox">
          {collection.map((item) => {
            return (
              <div className="FilmCard" key={item[0].id}>
                <div className="FilmCover">
                  {
                    <img
                      src={`https://image.tmdb.org/t/p/w342${item[0].poster_path}`}
                      alt="logoFilm"
                      width="200"
                      height="300"
                    />
                  }
                </div>
                <div className="FilmDescription">
                  {this.colorRate(item[0].vote_average)}

                  <span className="FilmName">{item[0].original_title}</span>

                  <div>
                    <span>{item[0].release_date} </span>
                  </div>

                  <span className="GenreForm"> Action </span>
                  <span className="GenreForm"> Drama </span>

                  <span className="Preview">{this.lengthoverview(item[0].overview)}</span>
                  <span className="RatingStar">
                    <Rate
                      count={10}
                      allowHalf={true}
                      disabled={true}
                      defaultValue={item[1]}
                      onChange={(event) => {
                        return this.rateFilm(event, item);
                      }}
                    />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
