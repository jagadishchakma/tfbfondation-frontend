import './editor.css';
import { useState } from 'react';
import ReactPlayer from "react-player";

const Editor = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  // start video details
  const [video_details, setVideoDetails] = useState([]);
  const [video_title, setVideoTitle] = useState('');
  const [video_description, setVideoDescription] = useState('');
  const [video, setVideo] = useState(null);
  const [video_add_toggle, setVideoAddToggle] = useState(false);
  // end video details

  // start news form submited
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('message', message);
    formData.append('video_details', JSON.stringify(video_details));
    images.forEach((image) => {
      formData.append(`image`, image);
    });
    videos.forEach((video) => {
      formData.append(`video`, video);
    });

    fetch('http://127.0.0.1:8000/bodhidhara/news/insert/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  // end news form submited

  // start video add handle click
  const addVideo = () => {
    setVideos((prevVideos) => [...prevVideos, video]);
    setVideoDetails((preveDetails) => [...preveDetails, { video_title, video_description }]);
    //Clear input fields
    setVideoTitle('');
    setVideoDescription('');
    setVideo(null);
    document.querySelector('input[type="file"]').value = ''; // clear file input
    setVideoAddToggle(false)
  }
  // end video add handle click

  // start remove video from add list
  const removeVideo = (index) => {
    setVideos((prevVideos) => {
      const newVideos = prevVideos.filter((video, i) => i !== index);
      newVideos.forEach((video) => URL.revokeObjectURL(video));
      return newVideos.map((video) => Object.assign(video, { url: URL.createObjectURL(video) }));
    });
    setVideoDetails((prevVideoDetails) => prevVideoDetails.filter((_, i) => i !== index));

  };
  // end remove video from add list


  console.log(videos);
  return (
    <div className="editorBox">
      <h1>Create News</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="newsTitle" placeholder="news title" />
        </div>
        <div>
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="newsMessage" placeholder='news body' />
        </div>

        <div className="row media-add">

          <div className="col-6">
            <p className="video-media" onClick={() => setVideoAddToggle(true)}><i className="fa-solid fa-video"></i> Video</p>
            {video_add_toggle && (
              <div className="video-add shadow p-3 mb-3">
                <i className="fa-solid fa-xmark closeNewsWritingBox" onClick={() => setVideoAddToggle(false)}></i>
                <div className="mb-2"><input className="w-100" type="text" onChange={(e) => setVideoTitle(e.target.value)} value={video_title} placeholder="Video title" /></div>
                <div className="mb-2"><textarea className="w-100" onChange={(e) => setVideoDescription(e.target.value)} value={video_description} placeholder="Video description"></textarea></div>
                <div className="mb-2 overflow-hidden"><input type="file" onChange={(e) => setVideo(e.target.files[0])} /></div>
                <div className="mb-2">
                  <span className={`btn btn-primary w-100 ${(video_title && video_description && video)?'':'disabled'}`} onClick={addVideo}>Add</span>
                </div>
              </div>
            )}
            <div className="video-add-list">
              {
                videos.map((video, index) => (
                  <div className="video-preview" key={index}>
                    <i className="fa-solid fa-xmark closeNewsWritingBox" onClick={() => removeVideo(index)}></i>
                    <ReactPlayer
                      url={URL.createObjectURL(video)}
                      controls
                      width="100%"
                      height="200px"
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-6">
            <p className="image-media"><i className="fa-regular fa-images"></i> Photo</p>
          </div>
        </div>
        <button type="submit" className="btn btn-success w-100 mt-5">Submit</button>
      </form>
    </div>
  );
};

export default Editor;