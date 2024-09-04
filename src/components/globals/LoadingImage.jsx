import React, { useState } from 'react';

const LoadingImage = ({imageUrl}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div>
      {/* Show logo until the blog image is loaded */}
      {!isImageLoaded && (
        <div style={{width:'600px', height:'599px', backgroundColor:'red'}}>

        </div>
      )}

      {/* Blog post image */}
      <img 
        src={imageUrl} 
        alt="Blog Post" 
        style={{ display: isImageLoaded ? 'block' : 'none' }} 
        onLoad={() => setIsImageLoaded(true)} 
        width={600}
        height={599}
      />
    </div>
  );
};

export default LoadingImage;