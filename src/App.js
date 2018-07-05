/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { View, Text } from 'react-native';
 //Makes the store available to connect calls in components
 import { Provider } from 'react-redux';
 //Creates our store
 import { createStore, applyMiddleware } from 'redux';
 //Reducers to pass to the store
 import reducers from './reducers';
 //Middleware to be used by redux
 import ReduxThunk from 'redux-thunk';
 import Router from './Router';
 import firebase from 'firebase';


 export default class App extends Component<{}> {

    componentWillMount(){
      var config = {
        apiKey: "AIzaSyCDGsxd64QvhEpSH41A1F3Rs_wjvntnBVY",
        authDomain: "react-redux-base.firebaseapp.com",
        databaseURL: "https://react-redux-base.firebaseio.com",
        projectId: "react-redux-base",
        storageBucket: "react-redux-base.appspot.com",
        messagingSenderId: "666654665632"
      };
      firebase.initializeApp(config);
    }

   render() {
     const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
     return (
       <Provider store={store}>
         <Router/>
       </Provider>
     );
   }
 }
