import React from 'react';
import { Text, AppRegistry } from 'react-native';

const App = () => (
       <Text>Some text</Text>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
