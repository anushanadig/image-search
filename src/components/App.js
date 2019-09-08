import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.onSearchSubmit = this.onSearchSubmit.bind(this);
  //   }
  state = { images: [] };
  async onSearchSubmit(term) {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    console.log(this);
    this.setState({
      images: response.data.results
    });
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={(...args) => this.onSearchSubmit(...args)} />
        {this.state.images.length !== 0 && (
          <ImageList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
