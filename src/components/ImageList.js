import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imagelist = images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{imagelist}</div>;
};

export default ImageList;
