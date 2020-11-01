import React, { createContext, useState } from "react";
import unsplash from "../api/unsplash";

export const AppContext = createContext({});

export default function AppContextProvider(props) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const [isValid, setIsValid] = useState(true);

  async function onSearchSubmit(term) {
    window.location.hash = `images?term=${term}`;
    if (term === "") {
      setIsValid(false);
    } else {
      setLoading(true);
      setShowBackground(false);
      setIsValid(true);
    }

    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
        per_page: 20,
      },
    });

    setImages(response.data.results);
    setLoading(false);
    console.log(window.location.hash);
  }

  return (
    <AppContext.Provider
      value={{
        images,
        setImages,
        loading,
        setLoading,
        showBackground,
        setShowBackground,
        isValid,
        onSearchSubmit,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
