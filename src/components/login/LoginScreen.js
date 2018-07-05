import React, {Component} from "react";
import {View, Button, TextInput, Text} from "react-native";
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, login } from '../../actions';

class LoginScreen extends Component {
//todo:  explanation for why we need to import emailChanged to use it
  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onLoginPress(){
    const { email, password } = this.props;

    this.props.login({ email, password });
  }

  renderError(){
    if(this.props.error){
      return(
        <View>
          <Text>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          placeholder="Email"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        {this.renderError()}
        <Button
          style={style.textStyle}
          title="Login"
          onPress={this.onLoginPress.bind(this)}
        />
      </View>
    );
  }
}

const style = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 5
  },
  textStyle: {
    textAlign: "center"
  }
};

//
const mapStateToProps = state => {
  return{
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, login })(LoginScreen);
