import React, { Component } from 'react';
import SearchArea from "./components/SearchArea"
import VideosArea from "./components/VideosArea/VideosArea"
import { apiKey } from "./secret.json"
import axios from 'axios';

class App extends Component {

  constructor() {
    super()

    this.state = {
      videos: [],
      mainVideo:
      {
        videoId: "",
        title: "",
        description: "",
        channelId: "",
        channelTitle: "",
        thumbnailUrl: ""
      }
    }
  }

  searchOnYoutube = (searchQ) => {
    const url = `https://www.googleapis.com/youtube/v3/search`

    axios({
      url: url,
      method: "GET",
      params: {
        part: "snippet",
        maxResults: 10,
        key: apiKey,
        q: searchQ
      }
    })
      .then(res => {
        if (res.status === 200) {
          const video = res.data.items[0];
          this.setState({
            videos: res.data.items,
            mainVideo: {
              videoId: video.id.videoId,
              title: video.snippet.title,
              description: video.snippet.description,
              channelId: video.snippet.channelId,
              channelTitle: video.snippet.channelTitle,
              thumbnailUrl: video.snippet.thumbnails.medium.url,
            }
          })
        }
      })

  }

  handleVideoPlay = (videoId, title, description, channelId, channelTitle, thumbnailUrl) => {
    this.setState({
      mainVideo: {
        videoId: videoId,
        title: title,
        description: description,
        channelId: channelId,
        channelTitle: channelTitle,
        thumbnailUrl: thumbnailUrl
      }
    })
  }


  render() {
    return (
      <div className="container">
        <SearchArea searchOnYoutube={this.searchOnYoutube} />
        <VideosArea videos={this.state.videos} mainVideo={this.state.mainVideo} handleVideoPlay={this.handleVideoPlay} />
      </div>
    );
  }
}

export default App;
