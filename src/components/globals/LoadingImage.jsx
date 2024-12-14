import { useState } from 'react';

const LoadingImage = ({src, width, height, alt}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div>
      {!isImageLoaded && (
        <div style={{width, height, backgroundColor:'red', margin: '0 auto'}}>

        </div>
      )}

      <img 
        src={src} 
        alt={alt}
        style={{ display: isImageLoaded ? 'block' : 'none', margin: '0 auto', width,height }} 
        onLoad={() => setIsImageLoaded(true)} 
      />
    </div>
  );
};

export default LoadingImage;