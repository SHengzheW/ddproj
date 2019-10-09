import React from 'react';
import {Button, View, Text, ImageBackground} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';

const allWidth = Dimensions.get('window').width;


export default class RecommendCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imgUrl:require('../../images/酸菜鱼.jpg'),
            title:props.title,
            price:props.price,
            soldNum:props.soldNum,
            avater:props.avater
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
                                        backgroundColor:'#777',
                                        opacity:0.96,
                                        borderRadius:12,
                                        width:57,
                                        height:24
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:'#333'
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
                                {this.state.title}
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
                                原价￥{this.state.price.minPrice}
                            </Text>
                            <Text
                                style={{
                                    marginTop:9,
                                    color:'#999',
                                    fontSize: 12
                                }}
                            >
                                热销{this.state.soldNum}份
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
        width:allWidth*0.9,
        alignItems:'center'
    },
    card:{
        width:allWidth*0.9,
        height:151,

    },
    contentPanel:{
        marginTop:10,
        flexDirection: 'row'


    },
    leftImagePanel:{

    },
    rightPanel:{
        marginLeft:10,
        width:0.4*allWidth,

    }

});
