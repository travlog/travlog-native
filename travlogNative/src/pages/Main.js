import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Main extends Component{
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>
          TRAVLOG MAIN
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