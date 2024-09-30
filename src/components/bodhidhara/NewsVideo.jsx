import { useEffect, useState } from 'react';

const Play = () => {
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(null);
  let videoId = '1075142280734651'
  let accessToken = 'EAAH9yX1XBJ0BO3Rs0PeZC45njpqG1mDFRdv2zugwx40DuCYGmYYbtQ95VA9lapUSpuAWdKlPJZBp4GjipTDoZAYYCewGheqiZBlWSenHEnK8zLz9fhVFxI9pdZBRZCNzG2o3FSEe8dA0tRfeUK9jqsjEp2fHKTs3zPVgOsZAUXbUMfaZBaS5RKjX7HbCM1FIQg4ZD'
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`https://graph.facebook.com/v17.0/${videoId}?fields=id,title,description,source&access_token=${accessToken}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVideoData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchVideo();
  }, [videoId, accessToken]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!videoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {videoData.source && (
        <video controls width="100%">
          <source src={videoData.source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Play;
