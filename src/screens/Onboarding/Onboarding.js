import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, Text, View } from "@shoutem/ui";
import { LinearGradient } from 'expo';
import { colors } from '../../res';
import { Logo } from '../../components';
import styles from './styles';

export default class Onboarding extends Component {
  render() {
    const { navigation } = this.props;

    return (
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[colors.orange, colors.yellow]} style={{ flex: 1 }}>
          <View style={styles.header}>
            <Logo />
            <View style={styles.containerHeaderText}>
              <Text style={styles.HeaderText}>Descubra novas formas de organizar suas tarefas.</Text>
            </View>
          </View>
          <View style={styles.buttonSection}>
            <Button style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonLoginText}>LOGIN</Text>
            </Button>
          </View>
        </LinearGradient>
    );
  }
}

Onboarding.propTypes = {
  navigation: PropTypes.object
}

