import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { View, Image, TextInput, Button, Text, NavigationBar, Title } from "@shoutem/ui";
import { loginUser } from '../../redux/actions';
  
import styles from './styles';
import {  images } from '../../res';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null, 
      password: null
    };
  }

  onPressLogin = async () => {
    const { loginUserDispatch, navigation } = this.props;
    const { username, password } = this.state;

    const responseLogin = await loginUserDispatch(username, password);

    if(!responseLogin.isSuccess) {
      Alert.alert("Alerta", responseLogin.message)
    } else {
      navigation.navigate('Home');
    }
  }


  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
      <NavigationBar hasHistory centerComponent={<Title>LOGIN</Title>} navigateBack={() => navigation.goBack()} />
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
                onChangeText={(value) => this.setState({ username: value })}
            />
            <TextInput
                placeholder={'Senha'}
                secureTextEntry
                onChangeText={(value) => this.setState({ password: value })}
            />
        </View>
        {/* Section Buttons */}
        <View style={styles.buttonSection}>
            <Button style={styles.buttonLogin} onPress={() => this.onPressLogin()}>
              <Text style={styles.buttonLoginText}>LOGIN</Text>
            </Button>
        </View>
      </View>
    )
  }
}

Login.propTypes = {
  navigation: PropTypes.object
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loginUserDispatch: (username, password) => dispatch(loginUser(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);


