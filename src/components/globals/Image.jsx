import { useState } from 'react';

const Image = ({src, width, height, alt}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div>
      {/* Show logo until the image is loaded */}
      {!isImageLoaded && (
        <div style={{width, height, backgroundColor:'red'}}>

        </div>
      )}

      {/* image */}
      <img 
        src={src} 
        alt={alt}
        style={{ display: isImageLoaded ? 'block' : 'none', width: `${width}px`, height: `${height}px` }} 
        onLoad={() => setIsImageLoaded(true)}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Image;