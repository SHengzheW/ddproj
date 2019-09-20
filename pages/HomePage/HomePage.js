import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import HomeFirstPage from './HomeFirstPage/HomeFirstPage';
import HomeSecond from './HomeSecondPage/HomeSecondPage';
import ConfirmOrder from './HomeMyOrder/ConfirmOrder/ConfirmOrder';
import SearchPage from './SearchPage/SearchPage';
import SearchResult from './SearchResult/SearchResult';
import MyPage from './HomeMyInfo/MyPage/MyPage';
import OrderList from './HomeMyOrder/OrderList/OrderList';
import CommodityDetails from './CommodityDetails';
import OrderDetails from './HomeMyOrder/OrderDetails/OrderDetails';


/**
 *
 *
 * 底部导航栏
 *
 *
 */

const TabNavigator = createBottomTabNavigator({
    HomeFirst: HomeFirstPage,
    HomeSecond: HomeSecond,
    HomeMyOrder: OrderList,
    HomeMyInfo: MyPage
},{//BottomTavNavtigtorConfig
    defaultNavigationOptions: ({ navigation }) => ({ //用于屏幕的默认导航选项
        tabBarIcon: ({ focused, tintColor }) =>   //设置图标
            getTabBarIcon(navigation, focused, tintColor),
        tabBarLabel: navigation.state.routeName === 'HomeFirst' ? ('首页') : (navigation.state.routeName === 'HomeSecond'? '校园生活':navigation.state.routeName === 'HomeMyOrder'? '我的订单':'我的'),  //设置图标下方的字体
    }),
    tabBarOptions: { //设置图标的样式
        activeTintColor: '#1E90FF',  //活动选项卡的标签和图标颜色。选中时颜色
        inactiveTintColor: '#979797'  //非活动选项卡的标签和图标颜色。 未选中时颜色
    },
});

const getTabBarIcon = (navigation, focused, tintColor) => {  //设置图标默认状态
    const {routeName} = navigation.state;
    if (routeName === 'HomeFirst') { //设置点击Home页面时，图标状态
        return <Image style={{  //图标的样式
            width: 25,
            height: 25
        }}
                      source={focused ? require('../images/首页-选中.png') : require('../images/首页.png')}/>  //返回选中与未选中不同状态时，图标的样式，颜色
    } else if (routeName === 'HomeSecond') { //设置点击Work页面时，图标状态
        return <Image style={{ ////图标的样式
            width: 25,
            height: 25
        }}
                      source={focused ? require('../images/校园生活-选中.png') : require('../images/校园生活.png')}/>  //返回选中与未选中不同状态时，图标的样式，颜色
    }else if (routeName === 'HomeMyOrder') { //设置点击Work页面时，图标状态
        return <Image style={{ ////图标的样式
            width: 25,
            height: 25
        }}
                      source={focused ? require('../images/订单-选中.png') : require('../images/订单.png')}/>  //返回选中与未选中不同状态时，图标的样式，颜色
    }else if (routeName === 'HomeMyInfo') { //设置点击Work页面时，图标状态
        return <Image style={{ ////图标的样式
            width: 25,
            height: 25
        }}
                      source={focused ? require('../images/我的-选中.png') : require('../images/我的.png')}/>  //返回选中与未选中不同状态时，图标的样式，颜色
    }
};



const DetailsStack = createStackNavigator({
    TabNavigator: TabNavigator,
    ConfirmOrder: ConfirmOrder,
    SearchPage: SearchPage,
    SearchResult: SearchResult,
    CommodityDetails: CommodityDetails,
    OrderDetails: OrderDetails
},{
    defaultNavigationOptions:{
        header:null
    }
});

// const FormalPagesStack = createStackNavigator({
//     TabNavigator: TabNavigator,
//     DetailsStack: DetailsStack
// },{
//     defaultNavigationOptions:{
//         header:null
//     }
// });


const AppContainer = createAppContainer(DetailsStack);


export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    static navigationOptions={
        header:null
    };


    render() {
        return <AppContainer/>
    }
}
