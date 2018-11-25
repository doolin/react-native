import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "", // copy in API key.
      authDomain: "manager-d8bc7.firebaseapp.com",
      databaseURL: "https://manager-d8bc7.firebaseio.com",
      projectId: "manager-d8bc7",
      storageBucket: "manager-d8bc7.appspot.com",
      messagingSenderId: "955462005742"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;