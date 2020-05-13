import React, { Component } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Card,
  CardContent,
} from '@material-ui/core';

export default class SearchArea extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
    };
  }

  handleValue = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { searchValue } = this.state;
    this.props.searchOnYoutube(searchValue);
  };

  render() {
    return (
      <Card>
        <CardContent>
          <form className='search-area' onSubmit={this.onSubmit}>
            <FormControl fullWidth>
              <InputLabel>Enter Search Query</InputLabel>
              <Input
                value={this.state.searchValue}
                onChange={this.handleValue}
              />
            </FormControl>
          </form>
        </CardContent>
      </Card>
    );
  }
}
