import React, { Component } from 'react'
import { Text } from 'react-native'
import { LinearGradient } from 'expo';
import { colors } from '../../res';
import { Logo } from '../../components';

export default class Onboarding extends Component {
  render() {
    return (
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[colors.orange, colors.yellow]} style={{ flex: 1 }}>
            <Logo />
        </LinearGradient>
    );
  }
}



