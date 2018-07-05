import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class WelcomeScreen extends Component {
  render(){
    return(
      <View
        style={style.container}>
        <Text
          style={style.centerText}>
          Welcome Screen
        </Text>
        <Button
          style={style.centerText}
          title='Navigate'
          onPress={() => this.navigateTo()}
        />
      </View>
    );
  }

  navigateTo(){
    Actions.login();
  }
}

const style = {
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerText: {
    textAlign: 'center'
  }
}

export default WelcomeScreen;
