import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';

import { Home, Onboarding, Login } from '../screens';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    Onboarding: {
        screen: Onboarding,
        navigationOptions: {
            header: () => null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    }
});

export default createAppContainer(AppNavigator);