import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      password: ''
    }
  }
  _login() {
    Actions.Main()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textInput}>
          TRAVLOG
        </Text>
        <TextInput
          keyboardType="email-address"
          placeholder="input your id"
          onChangeText={(userId) => this.setState({userId})}
          value={this.state.userId}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholder="input your password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        ></TextInput>
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    textAlign: 'center'
  }
})