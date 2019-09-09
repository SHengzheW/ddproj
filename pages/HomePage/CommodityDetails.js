import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Text, Image} from 'react-native';
import SearchResult from './SearchResult/SearchResult';
import ResultCard from '../components/ResultCard/ResultCard';
import RecommendCard from '../components/RecommendCard/RecommendCard';


const allWidth = Dimensions.get('window').width;

export default class CommodityDetails extends React.Component{

    constructor(props){

        super(props);

        this.state={
            soldNumber: 242
        }

    }

    render(){


        return(
            <View
                style={{
                    flex:1,
                    justifyContent:'flex-start',
                    alignItems:'flex-start'
                }}
            >
                {/*照片墙*/}
                <View
                    style={{
                        width: allWidth,
                        height: 250,
                        backgroundColor:'#000'
                    }}
                >

                </View>

                {/*商品介绍*/}
                <View
                    style={{
                        width: allWidth,
                        height: 116,
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            width: allWidth*0.90,
                            height: 44,
                            marginTop: 14,

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}
                        >
                            乐诺华冰淇淋来啦！厦大98周年庆，学姐回馈母校的超大福利
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop:10,
                            width: allWidth*0.9,
                            flexDirection:'row'
                        }}
                    >
                        <View
                            style={{
                                width: allWidth*0.9*0.7,
                                height: 40,
                                alignItems:'flex-start',
                                flexDirection:'row',

                            }}
                        >
                            <View
                                style={{
                                    flexDirection:'row',
                                    height: 14,
                                    justifyContent:'center'
                                }}
                            >
                                <Image
                                    source={require('../images/详情页勾选.png')}
                                    style={{
                                        width: 12,
                                        height: 12,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize:11,
                                        color:'#333',
                                        marginLeft: 4
                                    }}
                                >
                                    仅限堂食
                                </Text>

                            </View>

                        </View>

                        {/*销量栏*/}
                        <View
                            style={{
                                width:allWidth*0.9*0.3,
                                height:40,
                                alignItems:'flex-end'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 11,
                                    color:'#333'
                                }}
                            >
                                销量{this.state.soldNumber}份
                            </Text>

                        </View>

                    </View>


                </View>

                {/*灰色空白*/}
                <View
                    style={{
                        width: allWidth,
                        height: 10,
                        backgroundColor:'#f7f7f7'
                    }}
                >

                </View>

                {/*下方富文本介绍信息*/}
                <View
                    style={{
                        width: allWidth,
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            width: allWidth*0.9,

                        }}
                    >
                        <View
                            style={{
                                marginTop:14
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:14,
                                    fontWeight:'bold'
                                }}
                            >
                                商品详情
                            </Text>
                        </View>
                    </View>
                </View>

                {/*灰色空白*/}
                <View
                    style={{
                        width: allWidth,
                        height: 10,
                        backgroundColor:'#f7f7f7'
                    }}
                />

                {/*商家信息介绍*/}
                <View
                    style={{
                        width: allWidth,
                        height: 120,
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            width: allWidth*0.9,

                        }}
                    >
                        <View
                            style={{
                                marginTop:14
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:14,
                                    fontWeight:'bold'
                                }}
                            >
                                适用商家
                            </Text>
                        </View>
                        <View
                            style={{
                                marginTop: 14,
                                height: 64,
                                flexDirection:'row'
                            }}
                        >
                            {/*商家图标*/}
                            <View
                                style={{
                                    width: 64,
                                    height:64,
                                    backgroundColor:'#f7f7f7',
                                    borderRadius: 32
                                }}
                            >
                            </View>

                            {/*商家信息*/}
                            <View
                                style={{
                                    width: allWidth*0.9*0.9-64-18-10,
                                    marginLeft: 18,
                                    height: 64
                                }}
                            >
                                <View
                                    style={{
                                        width: allWidth*0.9*0.9-64-18-10,

                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color:'#222'
                                        }}
                                    >
                                        LE NUOVAl乐诺华（世贸双子塔店）
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color:'#666',
                                            marginTop: 18
                                        }}
                                    >
                                        厦大世贸EMALL三楼317
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color:'#666',
                                            marginTop: 4
                                        }}
                                    >
                                        营业时间：10:00 - 22:00
                                    </Text>
                                </View>

                            </View>

                            {/*按钮区域*/}
                            <View
                                style={{
                                    width: allWidth*0.9*0.1,
                                    height: 64,
                                    marginLeft: 10,
                                    flexDirection:'column',
                                    alignItems:'flex-end'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color:'#999'
                                    }}
                                >
                                    3km
                                </Text>
                                <Image
                                    source={require('../images/定位.png')}
                                    style={{
                                        width: 14,
                                        height: 14,
                                        marginTop: 10
                                    }}
                                />
                                <Image
                                    source={require('../images/电话.png')}
                                    style={{
                                        width:14,
                                        height:14,
                                        marginTop:9
                                    }}
                                />

                            </View>
                        </View>
                    </View>


                </View>

                {/*灰色空白*/}
                <View
                    style={{
                        width: allWidth,
                        height: 10,
                        backgroundColor:'#f7f7f7'
                    }}
                >

                </View>

                {/*为你推荐*/}
                <View
                    style={{
                        width: allWidth,
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            width: allWidth*0.9,

                        }}
                    >
                        <View
                            style={{
                                marginTop:14
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:14,
                                    fontWeight:'bold'
                                }}
                            >
                                为你推荐
                            </Text>

                        </View>
                        <View
                            style={{
                                marginTop: 4
                            }}
                        >
                            <RecommendCard/>
                        </View>
                    </View>
                </View>


                <View
                    style={{
                        width: allWidth,
                        height: 83,
                        backgroundColor:'#f7f7f7',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <View
                        style={{
                            width: allWidth*0.9,
                            alignItems:'center',
                            flexDirection:'row',

                        }}
                    >
                        <View
                            style={{
                                width: 70,
                                alignItems:'flex-start'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}
                            >
                                ￥14.80
                            </Text>
                            <Text
                                style={{
                                    fontSize:14,
                                    textDecorationLine:'line-through'
                                }}
                            >
                                ￥18.00
                            </Text>
                        </View>
                        <View
                            style={{
                                width: allWidth*0.9-70,
                                alignItems:'flex-end'
                            }}
                        >
                            <View
                                style={{
                                    width: 146,
                                    height: 42,
                                    borderRadius: 21,
                                    backgroundColor:'#8ed6f8',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize: 16,

                                    }}
                                >
                                    立即购买
                                </Text>
                            </View>

                        </View>
                    </View>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({

});
