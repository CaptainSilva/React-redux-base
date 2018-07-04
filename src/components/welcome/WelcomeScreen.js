import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class WelcomeScreen extends Component {
  render(){
    return(
      <View
        style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

        <Text
          style={{
            textAlign: 'center',
          }}>
          Welcome Screen
        </Text>
        <Button
        style={{
          textAlign: 'center',
          title='Navigate'
          onPress={this.navigateTo()}
        }}/>
      </View>
    );
  }

  navigateTo(){

  }
}

export default WelcomeScreen;
