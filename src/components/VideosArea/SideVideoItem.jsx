import { Card, CardContent, Typography } from "@material-ui/core";

const SideVideoItem = ({ title, thumbnailUrl, handleVideoPlay }) => {
  return (
    <Card
      title="Select this video to play."
      onClick={handleVideoPlay}
      style={{ marginTop: "20px", cursor: "pointer" }}
    >
      <CardContent style={{ display: "flex" }}>
        <img src={thumbnailUrl} alt={title} />
        <Typography style={{ marginLeft: "20px", fontWeight: "600" }} variant="h6">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SideVideoItem;
