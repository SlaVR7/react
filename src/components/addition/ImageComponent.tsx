import { useState } from 'react';
import { ImageComponentProps } from '../../interfaces';
import { Loader } from './Loader';

function ImageComponent({ src, alt }: ImageComponentProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {imageLoaded ? (
        <img src={src} alt={alt} className={'product-image'} />
      ) : (
        <Loader />
      )}

      {imageLoaded || (
        <img
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
