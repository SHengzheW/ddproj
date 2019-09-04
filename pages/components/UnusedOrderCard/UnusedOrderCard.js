import React from 'react';
import {View, Button, Image, Text} from 'react-native';
import {StyleSheet, Dimensions}  from 'react-native';
import BoxShadow from 'react-native-shadow/lib/BoxShadow';

const allWidth = Dimensions.get('window').width;

const cardWidth = allWidth * 0.9;


export default class UnusedOrderCard extends React.Component{
    constructor(props){
        super(props);

        this.state={
            orderTitle:'厦饭酸汤鱼·单人餐：小份厦饭酸菜鱼 / 川味酸…',
            useDate:'有效时间：2019.4.1 - 2020.4.1'
        }
    }

    render(){


        const shadowOpt = {
            width:allWidth*0.9, //包裹的子内容多宽这里必须多宽
            height: 93,//同上
            color:"#eee",//阴影颜色
            border:2,//阴影宽度
            radius:10,//包裹的子元素圆角多少这里必须是多少
            opacity:0.7,//透明度
            x:0,
            y:0,
            style:{marginVertical:5}
        };


        return(
            <BoxShadow setting={shadowOpt}>
            <View
                style={{
                    width: cardWidth,
                    height:92,
                    backgroundColor:'#fff',
                    alignItems:'center'
                }}
            >
                <View
                    style={{
                        marginTop: 13,
                        width: cardWidth-12-13
                    }}
                >
                    <Text
                        style={{
                            fontSize:14,
                            color:'#333',
                            fontWeight: 'bold'
                        }}
                    >
                        {this.state.orderTitle}
                    </Text>

                    <View
                        style={{
                           marginTop:23,
                            width:cardWidth-13-12,
                            flexDirection:'row'
                        }}
                    >
                        <View
                            style={{
                                width: (cardWidth-12-13) * 0.7,
                                height:25,
                                justifyContent:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontsize:12,
                                    color:'#999'
                                }}
                            >
                                {this.state.useDate}
                            </Text>
                        </View>
                        <View
                            style={{
                                width:(cardWidth-12-13)*0.3,
                                alignItems:'flex-end',
                                height:25
                            }}
                        >
                            <View
                                style={{
                                    width:81,
                                    height:25,
                                    borderWidth:1,
                                    borderRadius:12.5,
                                    borderColor:'#55acee',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color:'#55acee',
                                        fontSize:12
                                    }}
                                >兑换码</Text>

                            </View>
                        </View>

                    </View>
                </View>

            </View>
            </BoxShadow>
        );
    }
}
