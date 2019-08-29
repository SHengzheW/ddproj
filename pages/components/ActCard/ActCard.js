import React from 'react';
import {Button, Image, View, Text, ImageBackground} from 'react-native';
import {StyleSheet} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import TestPage from '../../TestPage';
import type {DimensionValue} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';


const contentWidth = 300;


export default class ActCard extends React.Component{

    constructor(props){
        super(props);

        this.state={
            distance:'333m',
            actName:'超值单人餐38元吃！双人餐98元吃！3-4人',
            price:'',
            location:'厦饭',
            imgUrl:require('../../images/酸菜鱼.jpg')
        }
    }


    render(){



        const shadowOpt = {
            width:330, //包裹的子内容多宽这里必须多宽
            height:220,//同上
            color:"#eee",//阴影颜色
            border:6,//阴影宽度
            radius:10,//包裹的子元素圆角多少这里必须是多少
            opacity:0.7,//透明度
            x:0,
            y:3,
            style:{marginVertical:5}
        };



        return(
            <BoxShadow setting={shadowOpt}>
            <View
                style={styles.cardContainer}
            >
                <ImageBackground
                    style={{
                        width:330,
                        height:133
                    }}
                    source={this.state.imgUrl}
                >
                    <View style={styles.tagPanel}>
                        <Text>
                            下饭酸菜鱼
                        </Text>
                    </View>
                </ImageBackground>
                <View
                    style={{
                        width:330,
                        height:70,
                        alignItems:'center',
                        marginTop: 9
                    }}
                >
                    <View
                        style={styles.titlePanel}
                    >
                        <Text
                            style={{
                                fontSize:15,
                                color:'#333'
                            }}
                        >
                            {this.state.actName}
                        </Text>
                    </View>
                    <View style={styles.introPanel}>
                        <View
                            style={styles.locationPanel}
                        >
                            <Text
                                style={styles.smallText}
                            >{this.state.location}</Text>
                        </View>

                        <View
                            style={styles.distancePanel}
                        >
                            <Text
                                style={styles.smallText}
                            >{this.state.distance}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width:contentWidth,
                            flexDirection: 'row',
                            marginTop: 9
                        }}
                    >
                        <View
                            style={styles.locationPanel}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: '#000'
                                }}
                            >
                                ￥138
                            </Text>
                        </View>

                        <View
                            style={styles.distancePanel}
                        >
                            <Text
                                style={{
                                    fontSize:12,
                                    color:'#999'
                                }}
                            >
                                热销148份
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
    cardContainer:{
        width:330,
        height:220,
        borderRadius:10,
        backgroundColor:'white',
        overflow:'hidden'
    },
    tagPanel:{
        width:85,
        height:23,
        backgroundColor: 'whitesmoke',
        marginTop:11,
        marginLeft:12,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    introPanel:{
        width:contentWidth,
        flexDirection:'row',
        marginTop: 8

    },
    locationPanel:{
        width:contentWidth/2,
        alignItems: 'flex-start'
    },
    distancePanel:{
        width:contentWidth/2,
        alignItems:'flex-end'
    },
    titlePanel:{
        width:contentWidth,
        overflow: 'hidden'

    },
    smallText:{
        fontSize: 12,
        color:'#333'
    },
    pricePanel:{

    }

});
