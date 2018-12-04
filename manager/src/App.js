import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDXtkjxcMJ04u28VO5OlkhL0cyJj-3BIcE", // copy in API key.
      authDomain: "manager-d8bc7.firebaseapp.com",
      databaseURL: "https://manager-d8bc7.firebaseio.com",
      projectId: "manager-d8bc7",
      storageBucket: "manager-d8bc7.appspot.com",
      messagingSenderId: "955462005742"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;