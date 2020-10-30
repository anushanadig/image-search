import React from "react";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
// import FormControl from "react-bootstrap/FormControl";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    let style = !this.props.showBackground ? { top: "5%" } : {};
    return (
      <>
        <form
          class="form-inline d-flex justify-content-center md-form form-sm search-form"
          onSubmit={this.onFormSubmit}
          style={style}
        >
          <div class="ui search search-bar">
            <div class="ui icon input search-input">
              <input
                class="prompt"
                type="text"
                placeholder="Search for high resolution images"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <i class="search icon"></i>
            </div>
            <div class="results"></div>
          </div>
        </form>
      </>
    );
  }
}

export default SearchBar;
