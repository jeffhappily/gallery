import { NavigationActions } from 'react-navigation';
import Navigator from '../navigation/Navigator';

// const initialState = Navigator.router.getStateForAction(NavigationActions.init());
const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Splash'));

export default (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);

  return nextState || state;
};
