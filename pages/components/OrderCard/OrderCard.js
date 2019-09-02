import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow';

const allWidth = Dimensions.get('window').width;

const cardWidth = allWidth*0.9;

const leftSpace = 10;

export default class OrderCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            orderState:'待使用',
            orderName:'厦饭酸汤鱼·单人餐：小份…',
            imgUrl:require('../../images/酸菜鱼.jpg'),
            numbers:'2',
            exchangeName:'厦饭酸菜鱼',
            introduction:'真的好吃，吃饭不用菜'
        }
    }



    render(){

        const shadowOpt = {
            width:allWidth*0.9, //包裹的子内容多宽这里必须多宽
            height:170,//同上
            color:"#eee",//阴影颜色
            border:6,//阴影宽度
            radius:10,//包裹的子元素圆角多少这里必须是多少
            opacity:0.7,//透明度
            x:0,
            y:2,
            style:{marginVertical:5}
        };


        return(
            <BoxShadow setting={shadowOpt}

            >
                <View
                    style={styles.container}
                >
                    <View
                        style={styles.topPanel}
                    >
                        <View
                            style={styles.titlePanel}
                        >
                            <Text
                                style={{
                                    color:'#fff'
                                }}
                            >
                                美食
                            </Text>
                        </View>
                        <View
                            style={{
                                width:175/375*allWidth,
                                height:20,
                                marginTop: 4,
                                marginLeft: 10,
                            }}
                        >
                            <Text>
                                {this.state.orderName}
                            </Text>
                        </View>

                        <View
                            style={{
                                width:42,
                                height:17,
                                marginTop: 4,
                                marginLeft: 20,
                            }}
                        >
                            <Text
                                style={{
                                    color:'#666666',
                                    fontSize:14
                                }}
                            >
                                {this.state.orderState}
                            </Text>
                        </View>

                    </View>
                    <View
                        style={{
                            width:cardWidth,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={styles.orderLine}
                        />
                    </View>

                    <View
                        style={styles.bottomPanel}
                    >
                        <View
                            style={styles.detailsPanel}
                        >
                            <View
                                style={{
                                    width:95,
                                    height:65,
                                }}
                            >
                                <Image
                                    source={this.state.imgUrl}
                                    style={{
                                        width:95,
                                        height:65,
                                    }}
                                />

                            </View>
                            <View
                                style={styles.fontsPanel}
                            >
                                <Text
                                    style={{
                                        fontWeight: 'bold',

                                    }}
                                >
                                    {this.state.numbers}份 | {this.state.exchangeName}
                                </Text>
                                <View
                                    style={{
                                        marginTop:16
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:'#999'
                                        }}
                                    >
                                        {this.state.introduction}
                                    </Text>
                                </View>


                            </View>
                        </View>

                        <View
                            style={{
                                width: cardWidth,
                                alignItems:'flex-end'
                            }}
                        >
                            <View
                                style={{
                                    marginTop:8,
                                    width:100,
                                    height: 26,
                                    justifyContent: 'center',
                                    alignItems:'center',
                                    borderWidth:1,
                                    borderRadius:13,
                                    borderColor:'#55acee',
                                    marginRight:24
                                }}
                            >
                                <Text
                                    style={{
                                        color:'#55acee',
                                    }}
                                >
                                    确认收货
                                </Text>
                            </View>
                        </View>

                    </View>


                </View>


            </BoxShadow>
        )
    }

}


const styles = StyleSheet.create({
    container:{
        width: allWidth*0.9,
        height: 170,
        backgroundColor:'#fff',
        borderRadius: 5,
        overflow:'hidden'
    },
    topPanel:{
        marginTop: 12,
        width: cardWidth,
        height: 24,
        flexDirection:'row',

    },
    titlePanel:{
        marginLeft: 12,
        height: 23,
        paddingLeft:11,
        paddingRight:11,
        backgroundColor:'#ffbf2c',
        borderRadius: 11,
        alignItems:'center',
        justifyContent:'center'
    },
    orderLine:{
        width:cardWidth - 2 * leftSpace,
        height:1,
        backgroundColor:'#e8e8e8',
        marginTop:12
    },
    bottomPanel:{
        width:cardWidth,
        marginLeft:12,
        marginTop:12,
    },
    detailsPanel:{
        flexDirection: 'row',
        width:cardWidth
    },
    fontsPanel:{
        marginLeft:12,

    }
});
