import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import Splash from '../screens/Splash';
import React from 'react';
import Main from '../screens/Main';
import PictureShow from '../screens/PictureShow';
import LogIn from '../screens/LogIn';
import Drawer from '../components/Drawer';

const MyDrawer = DrawerNavigator(
	{
		Main: {
			screen: Main,
		},
	},
	{
		contentComponent: props => <Drawer {...props} />
	}
);

const App = StackNavigator(
	{
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: () => null,
      }
    },
	  Main: {
			screen: MyDrawer,
			navigationOptions: {
        header: () => null,
      }
		},
		LogIn: {
			screen: LogIn,
			navigationOptions: {
        header: () => null,
      }
		},
	  PictureShow: {screen: PictureShow},
	},
  {
    headerMode: 'screen',
		cardStyle: {
	    backgroundColor: Colors.white
	  }
  }
);

export default App;
