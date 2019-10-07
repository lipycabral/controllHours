import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from '../pages/Main';
import Relatorio from '../pages/Relatorio';

const DrawerNavigator = createDrawerNavigator({
    Main: {
        screen: Main
    },
    Relatorio: {
        screen: Relatorio
    }
}, {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    navigationOptions: {
        drawerLockMode: 'locked-closed',
    },
})

export default DrawerNavigator