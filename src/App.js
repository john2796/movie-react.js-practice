import React, { Component } from "react";
import Card from "./containers/Card";
import About from "./containers/About";

class App extends Component {
  state = {
    searchTerm: "",
    movies: []
  };
  performSearch = e => {
    e.preventDefault();
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=64c2b191aa0739bffd252c8287ae39c1&query=${
      this.state.searchTerm
    }`;
    fetch(urlString)
      .then(res => res.json())
      .then(res => {
        this.setState({ movies: res.results });
      });
  };

  onChangeHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { movies } = this.state;
    // filter movies

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
                ]
                <h1 style={{ color: "ghostWhite", fontSize: 35 }}>
                  MovieDB Search
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
        <form action="" onSubmit={this.performSearch}>
          <input
            style={{
              fontSize: 25,
              display: "block",
              width: "99%",
              padding: "8px 16px 8px 0px"
            }}
            placeholder="Enter search term "
            value={this.state.searchTerm}
            onChange={this.onChangeHandler}
          />
        </form>
        {/* card */}
        <Card>
          <About />
        </Card>
      </div>
    );
  }
}

export default App;
