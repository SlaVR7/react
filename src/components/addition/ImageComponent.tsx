import { useState } from 'react';
import { Loader } from './Loader';

export interface ImageComponentProps {
  src: string;
  alt: string;
}

function ImageComponent({ src, alt }: ImageComponentProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {!imageLoaded ? (
        <img src={src} alt={alt} className={'product-image'} />
      ) : (
        <Loader />
      )}

      {imageLoaded || (
        <img
          data-testid="product-image"
          src={src}
          alt={alt}
          style={{ display: 'none' }}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </div>
  );
}

export default ImageComponent;
