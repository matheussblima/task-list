import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button, Text, View } from "@shoutem/ui";
import { LinearGradient } from 'expo';
import { colors } from '../../res';
import { Logo } from '../../components';
import styles from './styles';
import { saveUser } from '../../redux/actions';

class Onboarding extends Component {
  async componentWillMount() {
    const { saveUserDispatch } = this.props;
    await saveUserDispatch("teste", "123456");
  }

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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  saveUserDispatch: (username, password) => dispatch(saveUser(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Onboarding);