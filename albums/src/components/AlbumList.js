import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        console.log("in componentWillMount in AlbumList");
        // debugger;
    }

    render() {
  return (
      <View>
          <Text>Album list</Text>
      </View>
  );
}
}

export default AlbumList;
