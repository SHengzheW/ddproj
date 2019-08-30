import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import HomeFirstPage from './HomeFirstPage/HomeFirstPage';
import SearchPage from '../SearchPage/SearchPage';
import SearchResult from '../SearchResult/SearchResult';



const appNavigation = createStackNavigator({
    HomeFirstPage : HomeFirstPage,
    HomeSearchPage : SearchPage,
    SearchResult: SearchResult
},
    {
        initialRouteName:'HomeFirstPage'
    });



const AppContainer = createAppContainer(appNavigation);


export default class HomeContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <AppContainer/>;
    }
}
