import React, { Component } from "react";
import MovieRow from "./containers/MovieRow";

const movies = [
  {
    id: 0,
    title: "Avengers: Infinity War",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, soluta ratione. "
  },
  {
    id: 1,
    title: "Captain, Marvel",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, soluta ratione. "
  },
  {
    id: 2,
    title: "Avengers: Wonnder Woman",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, soluta ratione. "
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    const movieRows = [];
    movies.forEach(movie => {
      const movieRow = <MovieRow movie={movie} key={movie.id} />;
      movieRows.push(movieRow);
    });

    this.state = { rows: movieRows };

    this.performSearch();
  }

  performSearch = () => {
    const urlString = "...";
    fetch(urlString)
      .then(res => res.json())
      .then(res => console.log(res));
  };

  render() {
    return (
      <div className="App">
        <table
          style={{ background: "black", display: "block", paddingLeft: 16 }}
        >
          <tbody>
            <tr>
              <td>
                <span aria-label="title" role="img" style={{ fontSize: 100 }}>
                  👾
                </span>
              </td>
              <td>
                <h1 style={{ color: "ghostWhite", fontSize: 35 }}>
                  MovieDB Search
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          style={{
            fontSize: 25,
            display: "block",
            width: "99%",
            padding: "8px 16px 8px 0px"
          }}
          placeholder="Enter search term "
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
