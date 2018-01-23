import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import Splash from '../screens/Splash';
import React from 'react';
import Main from '../screens/Main';
import PictureShow from '../screens/PictureShow';
import PictureIndex from '../screens/PictureIndex';
import LogIn from '../screens/LogIn';
import SearchScreen from '../screens/Search';
import Drawer from '../components/Drawer';
import { Menu, Search } from '../components/Icon';

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
			navigationOptions: ({ navigation }) => ({
		    headerStyle: {
		      elevation: 0,
		      backgroundColor: 'transparent',
		    },
		    headerLeft: (
		      <Menu onPress={() => navigation.navigate('DrawerToggle')} />
		    ),
				headerRight: (
					<Search onPress={() => navigation.navigate('Search')} />
				)
		  })
		},
		LogIn: {
			screen: LogIn,
			navigationOptions: {
        header: () => null,
      }
		},
	  PictureShow: {screen: PictureShow},
	  PictureIndex: {screen: PictureIndex},
		Search: {screen: SearchScreen}
	},
  {
    headerMode: 'screen',
		initialRouteName: 'Search',
		cardStyle: {
	    backgroundColor: Colors.white
	  },
  }
);

export default App;
