import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import WelcomeScreen from './components/welcome/WelcomeScreen';
import LoginScreen from './components/login/LoginScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="welcome" component={ WelcomeScreen } hideNavBar={true} title="Welcome"/>
        <Scene key="login" component={LoginScreen} title="Please Login"/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
