import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class SignUp extends Component{
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>
          TRAVLOG SIGNUP
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})