/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './src/pages/Login'
import SignUp from './src/pages/SignUp'
import Main from './src/pages/Main'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const scenes = Actions.create(
  <Scene key="root" headerMode="none">
    <Scene key="Login" component={Login} title="Login" initial={true}/>
    <Scene key="SignUp" component={SignUp} title="Register"/>
    <Scene key="Main" component={Main}/>
  </Scene>
);

export default class App extends Component{
  render() {
    return (
      <Router scenes={scenes}/>
    );
  }
}