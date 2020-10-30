import React from "react";

class ImageCard extends React.Component {
  /** React refs - gives access to a single DOM element.
   * We create refs , assign them to instance varibales, then pass
   * to a particular JSX element as props.
   */

  imageRef = React.createRef();

  state = {
    spans: 0
  };

  componentDidMount() {
    /**
     * Let the image card render itself and it's image, then reach into th DOM and figure out
     * the height of the image, set the image height on state to get the component to rerender.
     * When rendering, assign a 'grid-row-end' to make sure the image takes up the appropriate
     * space.
     */

    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 5);

    this.setState({ spans });
  };

  render() {
    const {
      urls: { regular },
      description
    } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
