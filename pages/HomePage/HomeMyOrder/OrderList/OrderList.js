import React from 'react';
import {View, Button, Text, Image} from 'react-native';
import BoxShadow from 'react-native-shadow/lib/BoxShadow';
import OrderCard from '../../../components/OrderCard/OrderCard';



export default class OrderList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {}
    }

    static navigationOptions={
        title:'我的订单'
    };


    render(){

        const shadowOpt = {
            width:330, //包裹的子内容多宽这里必须多宽
            height:240,//同上
            color:"#eee",//阴影颜色
            border:6,//阴影宽度
            radius:10,//包裹的子元素圆角多少这里必须是多少
            opacity:0.7,//透明度
            x:0,
            y:2,
            style:{marginVertical:5}
        };


        return(
            <View
                style={{
                    flex:1,
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}
            >
                <OrderCard/>

            </View>


        );
    }
}
