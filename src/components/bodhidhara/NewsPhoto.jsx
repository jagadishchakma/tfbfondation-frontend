import { useEffect, useState } from 'react';
import { accessToken, pageId } from '../../utilities/fbApp';
import LoadingImage from '../globals/LoadingImage';

const NewsPhoto = ({ imageId, height, width }) => {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://graph.facebook.com/v17.0/${imageId}/picture?access_token=${accessToken}`);
        const imageUrl = response.url;
        setImageData(imageUrl);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImage();
  }, [imageId, accessToken]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <LoadingImage src={imageData} width={width} height={height} alt="News Photo" />
    </div>
  );
};

export default NewsPhoto;