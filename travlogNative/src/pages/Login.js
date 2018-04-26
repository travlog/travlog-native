import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import * as api from '../service'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      password: ''
    }
  }
  _login() {
    api.user.login()
    Actions.Main()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          TRAVLOG
        </Text>
        <TextInput
          keyboardType="email-address"
          placeholder="input your id"
          onChangeText={(userId) => this.setState({userId})}
          value={this.state.userId}
          style={styles.textInput}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholder="input your password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          style={styles.textInput}
        ></TextInput>
        <View style={styles.buttonGroup}>
          <Button
            onPress={this._login}
            title="Login"
            color="#841584"
          ></Button>
          <Button
            onPress={Actions.SignUp}
            title="회원가입"
          ></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  },
  textInput: {
    marginTop:10,
    width: '100%',
    height: 30
  },
  buttonGroup: {
    marginTop:20
  }
})