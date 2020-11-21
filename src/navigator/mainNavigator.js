import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList2177184Navigator from '../features/NotificationList2177184/navigator';
import SignUp23177183Navigator from '../features/SignUp23177183/navigator';
import BlankScreen0177182Navigator from '../features/BlankScreen0177182/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList2177184: { screen: NotificationList2177184Navigator },
SignUp23177183: { screen: SignUp23177183Navigator },
BlankScreen0177182: { screen: BlankScreen0177182Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
