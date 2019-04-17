import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';

import { Home } from '../screens';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    }
});

export default createAppContainer(AppNavigator);