import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo';

export default class Onboarding extends Component {
  render() {
    return (
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[ '#FF9900', '#FCFA00']} style={{ flex: 1 }}>
            <Text> textInComponent </Text>
        </LinearGradient>
    );
  }
}



