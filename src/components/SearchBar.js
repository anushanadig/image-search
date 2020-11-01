import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function SearchBar() {
  const { onSearchSubmit, showBackground, isValid } = useContext(AppContext);

  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  let style = !showBackground ? { transform: "translateY(-16rem)" } : {};
  return (
    <>
      <form
        className="form-inline d-flex justify-content-center md-form form-sm search-form"
        onSubmit={onFormSubmit}
        style={style}
      >
        <div className="ui search search-bar">
          <div className="ui icon input search-input">
            <input
              className="prompt"
              type="text"
              placeholder="Search for high resolution images"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
        {!isValid && <h2>Please input valid search term!</h2>}
      </form>
    </>
  );
}
