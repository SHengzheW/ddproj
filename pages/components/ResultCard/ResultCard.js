import React from 'react';
import {Button, View, Text, ImageBackground} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';

const allWidth = Dimensions.get('window').width;


export default class ResultCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imgUrl:require('../../images/酸菜鱼.jpg'),
            avater:props.avater,
            title:props.title,
            price:props.price,
            soldNum:props.soldNum
        }

    }


    render(){


        let priceItem = [];
        if(this.state.price.minPrice){
            priceItem.push(
                <Text
                    style={{
                        color:'#d65827',
                        fontWeight: 'bold',
                        marginTop:5
                    }}
                >
                    ￥{this.state.price.minPrice} - {this.state.price.maxPrice}
                </Text>
            )
        }else{
            priceItem.push(
                <Text
                    style={{
                        color:'#d65827',
                        fontWeight: 'bold',
                        marginTop:5
                    }}
                >
                    ￥{this.state.price.maxPrice}
                </Text>
            )
        }


        let orgPriceItem = [];
        if(this.state.price.orgMinPrice){
            orgPriceItem.push(
                <Text
                    style={{
                        marginTop:5,
                        color:'#777',
                        fontSize: 12,
                        textDecorationLine: 'line-through'
                    }}
                >
                    ￥{this.state.price.orgMinPrice} - {this.state.price.orgMaxPrice}
                </Text>
            )

        }else{
            orgPriceItem.push(
                <Text
                    style={{
                        marginTop:5,
                        color:'#777',
                        fontSize: 12,
                        textDecorationLine: 'line-through'
                    }}
                >
                    ￥{this.state.price.orgMaxPrice}
                </Text>
            )

        }

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
                                        paddingLeft:10,
                                        paddingRight:10,
                                        justifyContent:'center',
                                        backgroundColor:'white',
                                        opacity:0.96,
                                        borderRadius:2,
                                        width:46,
                                        height:17
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:'#333',
                                            fontSize: 10
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
                                    color:'#333',
                                    height:47,
                                    fontSize: 15
                                }}
                            >
                                {this.state.title}
                            </Text>
                            {priceItem}
                            {orgPriceItem}
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
