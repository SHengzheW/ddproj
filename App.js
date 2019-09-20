/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import FirstPage from './pages/firstPage/FirstPage';
import FinishResume from './pages/FinishResume/FinishResume';
import HomePage from './pages/HomePage/HomePage';
import FinishInvitation from './pages/FinishInvitation/FinishInvitation';
import TestPage from './pages/TestPage';
import {Provider} from '@ant-design/react-native';




const AppNavigator = createStackNavigator({
  First: FirstPage,
  FinishResume: FinishResume,
  FinishInvitation: FinishInvitation,
  HomePage: HomePage,
  TestPage: TestPage
},
    {
      initialRouteName:'First',

    });


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{


  render(){
    return(
        <Provider>
          <AppContainer/>
        </Provider>
    )
  }

}
