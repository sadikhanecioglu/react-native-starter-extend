import React from 'react';
import { Button, View } from 'react-native';
import Navigator from './navigation/Navigator';

export default function AppView(props) {

  if(props.loggedIn)
  return <Navigator onNavigationStateChange={() => {}} uriPrefix="/app" />
   else{

   console.log("not login showing login page");
   return 				<Button
   onPress={props.auth}

   title={'Check restricted access'}
 />
   }


                  

}
