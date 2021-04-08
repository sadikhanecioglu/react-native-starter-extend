// @flow
import { authorize } from 'react-native-app-auth';
import { MMKV } from 'react-native-mmkv';

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState = {
  authPending: false,
	loggedIn: false,
	registered: false,
	loginError: false,
	regError: false,
	authToken: null,
	refreshToken: null,
	tokenIsValid: null,
};

export const SET_AUTH_PENDING = 'AuthState/SET_AUTH_PENDING';
export const SET_LOGIN_SUCCESS = 'AuthState/SET_LOGIN_SUCCESS'
export const SET_LOGIN_ERROR = 'AuthState/SET_LOGIN_ERROR'

export const setAuthPending = () =>  {
  return {
    type: SET_AUTH_PENDING,
  };
}

export const setLoginSuccess = (authToken, refreshToken) => {
	return {
		type: SET_LOGIN_SUCCESS,
		authToken,
		refreshToken
	};
};

export const setLoginError = loginError => {
	return {
		type: SET_LOGIN_ERROR,
		loginError
	};
};



//funs
// Note "offline_access" scope is required to get a refresh token
const config = {
  issuer: 'https://identy.redapplegame.com',
  clientId: 'native.code',
  redirectUrl: 'com.react-native-starter-extend:/oauthredirect',
  scopes: ['openid', 'profile'],
  serviceConfiguration : {
    authorizationEndpoint:'https://identy.redapplegame.com/connect/authorize',
    tokenEndpoint:'https://identy.redapplegame.com/connect/token'
  }
};

export const auth =  () => {
  return  async dispatch => {
    dispatch(setAuthPending());

   // debugger;
    //const authState = await 
    
    authorize(config)
    
    
    .then((result) => {
      console.log(result);
    }).catch((err) => {

      console.log(err);

    });

  


    // Connect to the API here
   // dispatch(imagesLoaded(stubImages));
  };
}



export default function AuthStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_AUTH_PENDING:
      return {
        ...state,
        authPending: true
      };
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
      authPending: false,
			loggedIn: true,
			loginError: false,
			authToken: action.authToken,
			refreshToken: action.refreshToken
      }
    case SET_LOGIN_ERROR:
      return {
        ...state,
        authPending: false,
        loggedIn: false,
        loginError: action.loginError 
      }
    default:
      return state;
  }
}
