import { Card, CardContent, Typography, Link } from "@material-ui/core";

const CurrentVideo = ({ videoId, title, description, channelId, channelTitle }) => {
  return (
    <div>
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Card>
        <CardContent>
          <Typography variant="h5" style={{ fontWeight: "600" }}>
            {title}
          </Typography>

          <Typography color="textSecondary">
            <Link href={"https://www.youtube.com/channel/" + channelId} target="_blank">
              {channelTitle}
            </Link>
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrentVideo;
