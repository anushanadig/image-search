import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import "../styles/style.css";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { images: [], loading: false, showBackground: true };
  async onSearchSubmit(term) {
    this.setState({ loading: true, showBackground: false });
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
        per_page: 20,
      },
    });

    this.setState({
      images: response.data.results,
      loading: false,
    });
  }
  render() {
    let bg = !this.state.showBackground ? { background: "none" } : {};
    return (
      <>
        <header className="header">
          <h1>Unspalsh Clone</h1>
        </header>
        <div className="app-container" style={bg}>
          <SearchBar
            showBackground={this.state.showBackground}
            onSubmit={(...args) => this.onSearchSubmit(...args)}
          />
          {this.state.loading ? (
            <Spinner />
          ) : (
            <ImageList images={this.state.images} className="images" />
          )}
        </div>
      </>
    );
  }
}

export default App;
