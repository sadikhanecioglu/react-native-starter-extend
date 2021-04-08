import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Platform, UIManager } from 'react-native';
import {auth} from './auth/AuthState'

import AppView from './AppView';

export default compose(
  connect(
    state => ({
      loggedIn:state.auth.loggedIn
    }),
    dispatch => ({
      auth: () => dispatch(auth())
    })

  ),
  lifecycle({
    async componentDidMount() {
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
          console.log("requesting auth");
          this.props.auth();
      }
    },
  }),
)(AppView);
