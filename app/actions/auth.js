import { NavigationActions } from 'react-navigation';
import { AccessToken } from 'react-native-fbsdk';


const resetNavigate = routeName => (
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName })
    ]
  })
)

const setCurrentUser = user => ({
  type: 'LOG_IN',
  user
})

const _responseInfoCallback = (error, result) => {
  if (error) {
    alert('Error fetching data: ' + error.toString());
  } else {
    let user = {
      name: result.name,
      picture: result.picture.data.url
    }
    logInUser(user)
  }
}

export const logInUser = user => dispatch => {
  dispatch(setCurrentUser(user));
  dispatch(resetNavigate('Main'));
}

export const validateUser = () => dispatch => {
  AccessToken.getCurrentAccessToken().then(
    (data) => {
      if (data) {
        const infoRequest = new GraphRequest(
          '/me?fields=name,picture',
          null,
          _responseInfoCallback
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
      } else {
        dispatch(resetNavigate('LogIn'));
      }
    }
  )
}
