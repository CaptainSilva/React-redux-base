/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { View, Text } from 'react-native';
 import { Provider } from 'react-redux';
 import { createStore } from 'redux';
 import reducers from './reducers';


 export default class App extends Component<{}> {
   render() {
     return (
       <Provider store={createStore(reducers)}>
         <View
           style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
           <Text
             style={{
               textAlign: 'center',
             }}>
             Base
           </Text>
         </View>
       </Provider>
     );
   }
 }
