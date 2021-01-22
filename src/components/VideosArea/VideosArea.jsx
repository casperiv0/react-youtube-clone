import CurrentVideo from "./CurrentVideo";
import SideVideoItem from "./SideVideoItem";

const VideosArea = ({ currentVideo, handleVideoPlay, videos }) => {
  return (
    <div className="videos-container">
      <div>{currentVideo.videoId ? <CurrentVideo {...currentVideo} /> : null}</div>

      <div>
        {videos
          ? videos.map((video, index) => {
              return (
                <SideVideoItem
                  handleVideoPlay={() => {
                    handleVideoPlay(
                      video.id.videoId,
                      video.snippet.title,
                      video.snippet.description,
                      video.snippet.channelId,
                      video.snippet.channelTitle
                    );
                  }}
                  key={index}
                  videoId={video.id.videoId}
                  channelId={video.snippet.channelId}
                  channelTitle={video.snippet.channelTitle}
                  description={video.snippet.description}
                  thumbnailUrl={video.snippet.thumbnails.medium.url}
                  title={video.snippet.title}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default VideosArea;
