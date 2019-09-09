import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View } from "react-native";
import {createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import {Button} from '@ant-design/react-native';

class FeedScreen extends Component{

    static navigationOptions={
        header:null
    };

    render(){
        return(
            <View
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text>
                    FeedScreen
                </Text>
                <Button
                    onPress={()=>{
                        this.props.navigation.navigate('')
                    }}
                >点一下</Button>
            </View>
        );

    }
}

class ProfileScreen extends Component{

    static navigationOptions={
        header:null
    };

    render(){
        return(
            <View
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text>
                    ProfileScreen
                </Text>
                <Button
                    onPress={()=>{
                        this.props.navigation.navigate('')
                    }}
                >点一下</Button>
            </View>
        );

    }
}


class AuthScreen extends Component{

    static navigationOptions={
        header:null
    };

    render(){
        return(
            <View
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text>
                    AuthScreen
                </Text>
                <Button
                    onPress={()=>{
                        this.props.navigation.navigate('FeedHome')
                    }}
                >点一下</Button>
            </View>
        );

    }
}

class DetailsScreen extends Component{

    static navigationOptions={
        header:null
    };

    render(){
        return(
            <View
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text>
                    DetailsScreen
                </Text>
                <Button
                    onPress={()=>{
                        this.props.navigation.navigate('Home')
                    }}
                >点一下</Button>
            </View>
        );

    }
}


const FeedStack = createStackNavigator({
    FeedHome: FeedScreen,
    /* any other route you want to render under the tab bar */
});

const TabNavigator = createBottomTabNavigator({
    Feed: FeedStack,
    Profile: ProfileScreen,
});

const HomeStack = createStackNavigator({
    Tabs: TabNavigator,
    Details: DetailsScreen,
    /* any other route you want to render above the tab bar */
});

const AppNavigator = createSwitchNavigator({
    Auth: AuthScreen,
    Home: HomeStack,
});


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;
