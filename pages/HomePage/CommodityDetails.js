import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Text, Image} from 'react-native';
import {ImageBackground, Alert} from 'react-native';
import SearchResult from './SearchResult/SearchResult';
import ResultCard from '../components/ResultCard/ResultCard';
import RecommendCard from '../components/RecommendCard/RecommendCard';
import global from '../Global';

const allWidth = Dimensions.get('window').width;

export default class CommodityDetails extends React.Component{

    constructor(props){

        super(props);

        this.state={
            soldNumber: 242,
            id: this.props.navigation.state.params.id,
            title:'',
            soldNum:'',
            service:[],
            price:'',
            shop:'',
            foodList:[]
        }

    }

    componentDidMount(): void {
        let _this = this;
        fetch(global.baseUrl+'/detail/food?id='+this.state.id,{
            method:'get',
            headers:{
                Authorization: 'Bearer '+global.token
            }
        }).then((response)=>response.json())
            .then((res)=>{
                console.log(res.data);
                _this.setState({
                    title:res.data.title,
                    soldNum:res.data.soldNum,
                    service:res.data.service.split(','),
                    price:res.data.price,
                    shop:res.data.shop


                })
            }).catch((err)=>{
                console.log(err);
        });


        //为你推荐
        fetch(global.baseUrl+'/summary/recommend/food/similar?id='+this.state.id,{
            method:'get',
            headers:{
                Authorization: global.token
            }
        }).then((response)=>response.json())
            .then((res)=>{
                console.log('推荐');
                console.log(res);
                _this.setState({
                    foodList:res.data.foodList
                })
            }).catch((error)=>{
                console.log(error);
        })

    }

    render(){

        //推荐的商品
        let recommendFoodListItems = [];
        let foodList = this.state.foodList;
        foodList.forEach((item) => {
                recommendFoodListItems.push(
                    <RecommendCard title={item.title} price={item.price} avater={item.avater} soldNum={item.soldNum}/>
                )
                    });

        //为你推荐
        let recommendItem = [];
        if(this.state.foodList.length!==0){
            recommendItem.push(
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
                            {recommendFoodListItems}
                        </View>
                    </View>
                </View>
            )
        }




        //价格组件
        let priceItem = [];
        let orgPriceItem = [];
        if(this.state.price.minPrice!==this.state.maxPrice){
            priceItem.push(
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}
                >
                    ￥{this.state.price.minPrice}-{this.state.price.maxPrice}
                </Text>
            );

            orgPriceItem.push(
                <Text
                    style={{
                        fontSize:14,
                        textDecorationLine:'line-through'
                    }}
                >
                    ￥{this.state.price.orgMinPrice}-{this.state.price.orgMaxPrice}
                </Text>

            )
        }else{
            priceItem.push(
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}
                >
                    ￥{this.state.price.minPrice}
                </Text>
            );

            orgPriceItem.push(
                <Text
                    style={{
                        fontSize:14,
                        textDecorationLine:'line-through'
                    }}
                >
                    ￥{this.state.price.orgMinPrice}
                </Text>
            )

        }

        //提供的服务
        let serviceItems = [];
        let service = this.state.service;
        service.forEach((item)=>{
           serviceItems.push(
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
                       {item}
                    </Text>
               </View>
           );
        });


        return(
            <View
                style={{
                    flex:1,
                    justifyContent:'flex-start',
                    alignItems:'flex-start'
                }}
            >
                {/*照片墙*/}
                <ImageBackground
                    source={require('../images/厦饭.jpg')}
                    style={{
                        width: allWidth,
                        height: 250,

                    }}
                >
                    <View
                        style={{
                            width: allWidth,
                            height:24,
                            flexDirection:'row',
                            marginTop:45,
                        }}
                    >
                        <View
                            style={{
                                width: 40,
                                height:24,
                                paddingLeft:15
                            }}
                        >
                            <TouchableOpacity
                                onPress={()=>{
                                    this.props.navigation.goBack();
                                }}
                            >
                            <Image
                                source={require('../images/方向-左.png')}
                                style={{
                                    width:24,
                                    height:24
                                }}

                            />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: allWidth-50,
                                height: 24,
                                alignItems:'flex-end',
                                justifyContent:'flex-end',
                                flexDirection:'row'
                            }}
                        >
                            <TouchableOpacity
                                onPress={()=>{
                                    console.log('开始收藏')
                                    fetch(global.baseUrl+'/user/star',{
                                        method:'put',
                                        headers:{
                                            Authorization: global.token,
                                            'Content-Type':'application/json'
                                        }
                                    }).then((response)=>response.json())
                                        .then((res)=>{
                                            console.log(res);
                                        })
                                }}
                            >
                            <Image
                                source={require('../images/收藏.png')}
                                style={{
                                    width:24,
                                    height:24
                                }}
                            />
                            </TouchableOpacity>

                            {/*<Image*/}
                                {/*source={require('../images/方向-左.png')}*/}
                                {/*onPress={()=>{*/}
                                    {/*this.props.navigation.goBack();*/}
                                {/*}}*/}
                            {/*/>*/}

                        </View>

                    </View>

                </ImageBackground>

                {/**
                 商品介绍
                 */}
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
                            {this.state.title}
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
                            {serviceItems}


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
                                销量{this.state.soldNum}份
                            </Text>

                        </View>

                    </View>


                </View>

                {/**
                 灰色空白
                 */}
                <View
                    style={{
                        width: allWidth,
                        height: 10,
                        backgroundColor:'#f7f7f7'
                    }}
                >

                </View>

                {/**
                 下方富文本介绍信息
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

                {/**
                 商家信息介绍
                 */}
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
                                        {this.state.shop.title}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color:'#666',
                                            marginTop: 18
                                        }}
                                    >
                                        {this.state.shop.address}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color:'#666',
                                            marginTop: 4
                                        }}
                                    >
                                        营业时间：{this.state.shop.businessHours}
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
                {recommendItem}


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
                                width: 200,
                                alignItems:'flex-start'
                            }}
                        >
                            {priceItem}
                            {orgPriceItem}
                        </View>
                        <View
                            style={{
                                width: allWidth*0.9-200,
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
