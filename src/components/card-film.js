import React from 'react';
import './card-film.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
export default class CardFilm extends React.Component {
  lengthoverview = (overview) => {
    if (overview.split(' ').length > 30) {
      let str = overview.split(' ');
      let newString = ' ';
      for (let i = 0; i < 30; i++) {
        newString += ' ' + str[i];
      }
      return newString + ' ...';
    } else return overview;
  };
  rateFilm(event, elem) {
    localStorage.setItem(elem.id, JSON.stringify([elem, event]));
  }

  localRating = (item) => {
    let rate = JSON.parse(localStorage.getItem(item.id));
    if (rate === null) return 0;
    return rate[1];
  };

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
    const { films, load, error } = this.props;
    const Spinner = () => {
      if (load) {
        return <LoadingOutlined className="Spinner" spin />;
      }
    };

    return (
      <div className="FilmBox">
        {Spinner()}
        {error}
        {films.map((item) => {
          return (
            <div className="FilmCard" key={item.id}>
              <div className="FilmCover">
                {
                  <img
                    src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                    alt="logoFilm"
                    width="200"
                    height="300"
                  />
                }
              </div>
              <div className="FilmDescription">
                <div className="Rating">{this.colorRate(item.vote_average)}</div>
                <span className="FilmName">{item.original_title}</span>

                <div>
                  <span>{item.release_date} </span>
                </div>

                <span className="GenreForm"> Action </span>
                <span className="GenreForm"> Drama </span>

                <span className="Preview">{this.lengthoverview(item.overview)}</span>
                <span className="RatingStar">
                  <Rate
                    count={10}
                    allowHalf={true}
                    defaultValue={this.localRating(item)}
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
    );
  }
}
