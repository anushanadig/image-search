import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();

    this.state = {
      spans: 0
    };
  }

  componentDidMount() {
    // console.log("imageref:", this.imageRef);
    // console.log("current", this.imageRef.current);
    // console.log("clientheight", this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

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
