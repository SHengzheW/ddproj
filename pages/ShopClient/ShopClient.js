import React from 'react';
import {View, Image, Text, TouchableOpacity, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import global from '../Global';
import RecommendCard from '../components/RecommendCard/RecommendCard'

const allWidth = Dimensions.get('window').width;

export default class ShopClient extends React.Component{

    constructor(props){
        super(props);

        this.state={
            shopName:'宴遇 创意中国菜',
            shopType:'美食美味',
            address:'连坂大道133号鲁东',
            businessHours:'11:00-22:00',
            priceAverage:'112',
            briefIntro:'厦门第一创意菜',
            monthSales:'28767',
            monthOrders:'100',
            monthCheck:'100',
            price:{
                minPrice:'',
                maxPrice:'',
                orgMinPrice:'',
                orgMaxPrice:''
            }
        }
    }
    static navigationOptions = {
        header : null
    };


    componentDidMount() {
    }

    render(){


        return(
            <View
                style={styles.container}
            >
                <View style={global.topPanel}>

                    {/**
                       * 顶部小按钮栏
                     */}
                    <View style={styles.topButtonPanel}>
                        <View style={styles.topLeftButton}>
                            <Image
                                source={require('../images/设置.png')}
                                style={{
                                    width:20,
                                    height:20
                                }}
                            />
                        </View>
                        <View style={styles.topRightPanel}>
                            <Image
                                source={require('../images/扫一扫.png')}
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>
                    </View>


                    {/**
                     * 商家信息栏
                     *
                     */}
                    <View
                        style={styles.detailsPanel}
                    >
                        <Image style={{width: 70, height:70, borderRadius: 35}}
                            source={require('../images/宴遇1.jpg')}
                        >
                        </Image>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginTop:8

                        }}>
                            {this.state.shopName}
                        </Text>
                        <Text
                            style={{
                                fontSize:12,
                                marginTop:8
                            }}
                        >
                            {this.state.briefIntro} | {this.state.shopType} | 人均￥{this.state.priceAverage}
                        </Text>
                        <Text style={styles.addressText}>
                            {this.state.address}
                        </Text>
                        <Text
                            style={styles.addressText1}
                        >
                            营业时间：{this.state.businessHours}
                        </Text>


                    </View>

                    {/**
                        分割线
                     */}
                    <View style={{
                        width: allWidth,
                        height: 4,
                        backgroundColor:'#efefef',
                        marginTop: 30
                    }}>

                    </View>


                    {/**
                        下方门店数据
                     */}
                    <View
                        style={styles.statisticsPanel}
                    >
                        <View style={{width: 200,marginLeft: 20, height:30}}>
                            <Text
                                style={{
                                    fontSize:16,
                                    color:'#333',
                                    fontWeight:'bold'
                                }}
                            >
                                商家数据
                            </Text>
                        </View>
                        <View
                            style={{
                                width: allWidth,
                                flexDirection:'row'
                            }}
                        >
                            <View style={{
                                width: allWidth*0.33,
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop: 15,
                            }}>
                                <Text
                                    style={{fontSize: 14, color:'#666'}}
                                >
                                    月浏览量
                                </Text>
                                <Text
                                    style={{fontSize:18, color:'#333',marginTop: 15}}
                                >
                                    {this.state.monthCheck}
                                </Text>


                            </View>
                            <View style={{
                                width: allWidth*0.33,
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop: 15,
                            }}>
                                <Text
                                    style={{fontSize: 14, color:'#666'}}
                                >
                                    月订单数
                                </Text>
                                <Text
                                    style={{fontSize:18, color:'#333',marginTop: 15}}
                                >
                                    {this.state.monthOrders}
                                </Text>

                            </View>
                            <View style={{
                                width: allWidth*0.33,
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop: 15,
                            }}>
                                <Text
                                    style={{fontSize: 14, color:'#666'}}
                                >
                                    月销售额
                                </Text>
                                <Text
                                    style={{fontSize:18, color:'#d65827',marginTop: 15}}
                                >
                                    ￥{this.state.monthSales}
                                </Text>

                            </View>
                        </View>

                    </View>

                    {/**
                        商家发布的商品
                    */}
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
                                marginTop:25
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:16,
                                    color:'#333',
                                    fontWeight:'bold'
                                }}
                            >
                                我的商品
                            </Text>

                        </View>
                        <View
                            style={{
                                marginTop: 20
                            }}
                        >
                            <RecommendCard title={'jjj'} price={this.state.price} soldNum={20}/>
                            
                        </View>
                    </View>
                </View>



                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    topButtonPanel:{
        width: allWidth,
        height:30,
        flexDirection:'row',
    },
    topLeftButton:{
        width:100,
        height:30,
        paddingLeft: 20,
        alignItems: 'flex-start'

    },
    topRightPanel:{
        width: allWidth-100,
        height:50,
        alignItems:'flex-end',
        paddingRight:20
    },
    detailsPanel:{
        width: allWidth,
        alignItems:'center',


    },
    addressText:{
        fontSize:12,
        color:'#666',
        marginTop:15
    },
    addressText1:{
        fontSize:12,
        color:'#666',
        marginTop:6
    },
    statisticsPanel:{
        width: allWidth,
        alignItems:'flex-start',
        justifyContent: 'flex-start',
        marginTop:20
    }

});
