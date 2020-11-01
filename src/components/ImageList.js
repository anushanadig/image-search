import React, { useContext } from "react";
import ImageCard from "./ImageCard";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function ImageList() {
  const { loading, images } = useContext(AppContext);
  let imagelist = [];
  if (images) {
    imagelist = images.map((image) => (
      <ImageCard key={image.id} image={image} />
    ));
  }

  return loading ? <Spinner /> : <div className="image-list">{imagelist}</div>;
}

export default ImageList;
