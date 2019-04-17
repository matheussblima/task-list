import React, { Component } from 'react';
import { View, Image, TextInput, Button, Text } from "@shoutem/ui";

import styles from './styles';
import {  images } from '../../res'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <Image
                styleName="medium-avatar"
                source={images.avatar}
            />
        </View>
        {/* Section Inputs */}
        <View style={styles.sectionInputs}>
            <TextInput
                style={styles.inputUsername}
                placeholder={'Username'}
            />
            <TextInput
                placeholder={'Senha'}
                secureTextEntry
            />
        </View>
        {/* Section Buttons */}
        <View style={styles.buttonSection}>
            <Button style={styles.buttonLogin} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonLoginText}>LOGIN</Text>
            </Button>
        </View>
      </View>
    )
  }
}
