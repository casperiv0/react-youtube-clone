import React, { Component } from 'react';
import MainVideo from './MainVideo';
import SideVideoItem from './SideVideoItem';

export default class VideosArea extends Component {


  render() {
    return (
      <div className='videos-container'>
          <div>
        {this.props.mainVideo.videoId ? (
          <MainVideo mainVideo={this.props.mainVideo} />
        ) : null}
          </div>

            <div>
        {this.props.videos
          ? this.props.videos.map((video, index) => {
              return <SideVideoItem handleVideoPlay={() => {this.props.handleVideoPlay(video.id.videoId, video.snippet.title, video.snippet.description, video.snippet.channelId, video.snippet.channelTitle) }} key={index} videoId={video.id.videoId} channelId={video.snippet.channelId} channelTitle={video.snippet.channelTitle} description={video.snippet.description} thumbnail={video.snippet.thumbnails.medium.url} title={video.snippet.title}  />;
            })
          : null}
            </div>
      </div>
    );
  }
}
