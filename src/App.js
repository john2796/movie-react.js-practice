import React, { Component } from "react";
import Card from "./containers/Card";
import About from "./containers/About";

class App extends Component {
  state = {
    results: [],
    loading: true,
    searchText: ""
  };

  componentDidMount() {
    this.performSearch();
  }
  performSearch = (query = "Captain Marvel") => {
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=64c2b191aa0739bffd252c8287ae39c1&query=${query}`;
    fetch(urlString)
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          results: res.results
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.performSearch(this.query.value);
    e.currentTarget.reset();
  };

  render() {
    const { results, loading } = this.state;
    let card = results.map(movie => (
      <Card movie={movie} key={movie.id}>
        <About />
      </Card>
    ));
    console.log(results);
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            onChange={this.onSearchChange}
            name="search"
            ref={input => (this.query = input)}
            placeholder="Search..."
          />
        </form>
        {loading ? <p>Loading...</p> : <p>testing</p>}
      </div>
    );
  }
}

export default App;
