import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default class SideVideoItem extends Component {
  handleVideoPlay = () => {
    this.props.handleVideoPlay();
  };

  render() {
    return (
      <Card title="Select this video to play." onClick={this.handleVideoPlay} style={{ marginTop: '20px', cursor: "pointer" }}>
        <CardContent style={{ display: 'flex' }}>
          <img src={this.props.thumbnail} alt={this.props.title} />
          <Typography
            style={{ marginLeft: '20px', fontWeight: '600' }}
            variant='h6'>
            {this.props.title}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
