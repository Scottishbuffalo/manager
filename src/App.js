import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBmKr7wFdM2QKvyz1gDK4QlydrdNS_AHcA',
      authDomain: 'manager-c1815.firebaseapp.com',
      databaseURL: 'https://manager-c1815.firebaseio.com',
      projectId: 'manager-c1815',
      storageBucket: '',
      messagingSenderId: '474891979462',
      appId: '1:474891979462:web:963d5923fee8b1af'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
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
