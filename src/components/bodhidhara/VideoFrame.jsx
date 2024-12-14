import { useEffect, useState } from 'react';
import {accessToken, pageId} from '../../utilities/fbApp';

const VideoFrame = ({videoId,height,width}) => {
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`https://graph.facebook.com/v17.0/${videoId}?fields=id,title,description,source,picture&access_token=${accessToken}`);
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
      {videoData.picture && (
        <img src={videoData.picture} style={{width:`${width}`, height:`${height}`}}/>
      )}
    </div>
  );
};

export default VideoFrame;
