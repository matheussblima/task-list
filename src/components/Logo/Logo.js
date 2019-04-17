import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import images from './Image';
import styles from './styles';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={images.logo}  style={styles.logo}/>
        <Text style={styles.textLogo}>Task List</Text>
      </View>
    )
  }
}
