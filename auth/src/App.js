import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
          }
        )
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;