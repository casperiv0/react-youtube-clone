import { useState } from "react";
import SearchArea from "./components/SearchArea";
import VideosArea from "./components/VideosArea/VideosArea";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  const searchOnYoutube = async (searchQ) => {
    const url = `https://www.googleapis.com/youtube/v3/search`;

    try {
      const res = await axios({
        url: url,
        method: "GET",
        params: {
          part: "snippet",
          maxResults: 10,
          key: API_KEY,
          q: searchQ,
        },
      });

      if (res.status === 200) {
        const video = res.data.items[0];

        setVideos(res.data.items);
        setCurrentVideo({
          videoId: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
          channelId: video.snippet.channelId,
          channelTitle: video.snippet.channelTitle,
          thumbnailUrl: video.snippet.thumbnails.medium.url,
        });
      }
    } catch (e) {
      console.error(e);
      alert("An error occurred");
    }
  };

  function handleVideoPlay(videoId, title, description, channelId, channelTitle, thumbnailUrl) {
    setCurrentVideo({
      videoId,
      title,
      description,
      channelId,
      channelTitle,
      thumbnailUrl,
    });
  }

  return (
    <div className="container">
      <SearchArea searchOnYoutube={searchOnYoutube} />
      <VideosArea videos={videos} currentVideo={currentVideo} handleVideoPlay={handleVideoPlay} />
    </div>
  );
};

export default App;
