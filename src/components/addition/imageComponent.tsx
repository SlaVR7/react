import { Component } from 'react';
import { ImageComponentProps, ImageComponentState } from '../../interfaces';

class ImageComponent extends Component<
  ImageComponentProps,
  ImageComponentState
> {
  constructor(props: ImageComponentProps) {
    super(props);

    this.state = {
      imageLoaded: false,
    };
  }

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  render() {
    const { src, alt } = this.props;
    const { imageLoaded } = this.state;

    return (
      <div>
        {imageLoaded ? (
          <img src={src} alt={alt} />
        ) : (
          <img
            className={'loader'}
            src="/src/assets/loading.gif"
            alt="loader"
          />
        )}

        {imageLoaded || (
          <img
            src={src}
            alt={alt}
            style={{ display: 'none' }}
            onLoad={this.handleImageLoad}
          />
        )}
      </div>
    );
  }
}

export default ImageComponent;
