import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import MyPage from './MyPage/MyPage';

// the log in page

const StackNavigator = createStackNavigator({
    MyPage : MyPage
},{
    initialRouteName:'MyPage'
});


const AppContainer = createAppContainer(StackNavigator);


export default class HomeMyInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <AppContainer/>;
    }
}



