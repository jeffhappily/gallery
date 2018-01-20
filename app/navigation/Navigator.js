import { StackNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import Splash from '../screens/Splash';
import React from 'react';
import Main from '../screens/Main';
import PictureShow from '../screens/PictureShow';


const App = StackNavigator(
	{
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: () => null,
      }
    },
	  Main : {
			screen: Main,
			navigationOptions: {
        header: () => null,
      }
		},
	  PictureShow : {screen: PictureShow},
	},
  {
    headerMode: 'screen',
		cardStyle: {
	    backgroundColor: Colors.white
	  }
  }
)

export default App;
