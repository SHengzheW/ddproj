import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import OrderList from './OrderList/OrderList';

// the log in page


const StackNavigator = createStackNavigator({
    OrderList: OrderList
},{
    initialRouteName:'OrderList'
});

const AppContainer = createAppContainer(StackNavigator);

export default class HomeMyOrder extends React.Component{

    render(){
        return(<AppContainer/>);
    }
}



