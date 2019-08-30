import React from 'react';
import {Button, View, Text, ImageBackground} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';

const allWidth = Dimensions.get('window').width;


export default class ResultCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imgUrl:require('../../images/酸菜鱼.jpg')
        }

    }


    render(){

        return(
            <View
                style={styles.cardContainer}
            >
                <View
                    style={styles.card}
                >
                    <View
                        style={styles.contentPanel}
                    >
                        <View
                            style={styles.leftImagePanel}
                        >
                            <ImageBackground
                                source={this.state.imgUrl}
                                style={{
                                    width:0.43*allWidth,
                                    height:119,
                                }}
                            >
                                <View
                                    style={{
                                        marginTop: 5,
                                        marginLeft: 10,
                                        paddingLeft:14,
                                        paddingRight:14,
                                        justifyContent:'center',
                                        backgroundColor:'#ffbf2c',
                                        opacity:0.96,
                                        borderRadius:12,
                                        width:57,
                                        height:24
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:'white'
                                        }}
                                    >
                                        美食
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <View
                            style={styles.rightPanel}
                        >
                            <Text
                                style={{
                                    color:'#333'
                                }}
                            >
                                超值单人餐38元吃！双人餐98元吃！3-4人餐15…
                            </Text>
                            <Text
                                style={{
                                    color:'#111',
                                    fontWeight: 'bold',
                                    marginTop:5
                                }}
                            >
                                ￥138
                            </Text>
                            <Text
                                style={{
                                    marginTop:5,
                                    color:'#999',
                                    fontSize: 12
                                }}
                            >
                                原价￥148
                            </Text>
                            <Text
                                style={{
                                    marginTop:9,
                                    color:'#999',
                                    fontSize: 12
                                }}
                            >
                                热销199份
                            </Text>




                        </View>
                    </View>
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    cardContainer:{
        width:allWidth,
        alignItems:'center'
    },
    card:{
        width:allWidth*0.95,
        height:151,

    },
    contentPanel:{
        marginTop:20,
        marginLeft:allWidth*0.05,
        flexDirection: 'row'


    },
    leftImagePanel:{

    },
    rightPanel:{
        marginLeft:10,
        width:0.4*allWidth,

    }

});
