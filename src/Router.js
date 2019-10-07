import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';

import DrawerNavigator from './Navigator/DrawerNavigator';

const StackNavigator = createSwitchNavigator({
    Login: {
        screen: Login,
    },
    DrawerNavigator: DrawerNavigator,
}, {
    defaultNavigationOptions: {
        header: null
    }
});





const Router = createAppContainer(StackNavigator);

export default Router;