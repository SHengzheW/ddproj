import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import ShopCard from '../../components/ShopCard/ShopCard';
import ActCard from '../../components/ActCard/ActCard';
import {BoxShadow} from 'react-native-shadow';
import global from '../../Global';




const {allWidth, allHeight} = Dimensions.get('window');



export default class HomeFirstPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recommendShopList : [],
            recommendFoodList : [],
            recommendActList : []
        }
    }

    static navigationOptions={
        header:null
    };


    componentDidMount(): void {

        let _this = this;

        //获取顶部banner的相关信息
        fetch(global.baseUrl+'/banner/home',{
            method:'GET',
            headers:{
                Authorization : 'Bearer '+global.token
            }
        }).then((response)=>response.json())
            .then((res)=>{

            });



        //获取热门推荐的美食
        fetch(global.baseUrl+'/summary/all',{
            method : 'GET',
            headers:{
                Authorization : 'Bearer '+global.token
            },
        }).then((response)=>response.json())
            .then((res)=>{
                console.log(res.data);
                _this.setState({
                    recommendFoodList : res.data.foodList,
                    recommendActList : res.data.activityList
                })
            });


        //获取今天吃什么
        fetch(global.baseUrl+'/summary/recommend/shop',{
            method:'GET',
            headers:{
                Authorization : 'Bearer '+global.token
            }
        }).then((response)=>response.json())
            .then((res)=>{
                _this.setState({
                    recommendShopList: res.data.recommendShopList
                });
            }).catch((error)=>{
                console.log(error)
        })

    }


    render(){

        //今天吃什么
        let todayEatItems = [];
        let recommendShopList = this.state.recommendShopList;
        recommendShopList.forEach((item)=>{
           todayEatItems.push(
               <TouchableOpacity
                   onPress={()=>{
                       this.props.navigation.navigate('ShopDetails');
                   }}
               >
                <ShopCard avater={item.shop.avater} name={item.shop.title} key={item.shop.id}/>
               </TouchableOpacity>
           )
        });


        //热门推荐
        let recommendEatItems = [];
        let recommendEat = this.state.recommendFoodList;
        recommendEat.forEach((item)=>{
           recommendEatItems.push(
               <TouchableOpacity
                   onPress={()=>{
                       this.props.navigation.navigate('CommodityDetails',{id:item.id})
                   }}
                   key={item.id}
               >
                   <ActCard  avater={item.avater} title={item.title} soldNum={item.soldNum} shop={item.shop} price={item.price} />
               </TouchableOpacity>
           )
        });


        return(
            <ScrollView>
                <View style={{

                    width:allWidth,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate('SearchPage');
                        }}
                    >
                        <View style={styles.searchPanel}>
                            <Text
                                style={styles.searchText}
                            >搜索美食、校园活动</Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={styles.banner}
                    >
                        <Image
                            style={{
                                width:330,
                                height:110
                            }}
                            source={require('../../images/Banner.jpg')}
                        />
                    </View>

                    <View style={styles.todayEat}>
                        <Text
                            style={styles.eatTitle}
                        >今天吃什么</Text>
                    </View>
                    <View
                        style={styles.shopPanel}
                    >
                        {todayEatItems}
                    </View>

                    <View
                        style={styles.activitiesPanel}
                    >
                        <Text
                            style={{
                                fontSize:18,
                                fontWeight: 'bold'
                            }}
                        >热门推荐 · 美食</Text>
                        <View
                            style={{
                                width:57,
                                height:3,
                                backgroundColor:'#55acee',
                                marginTop:7,
                                marginLeft:7
                            }}
                        >
                        </View>
                        <View style={{
                            width:330,
                            marginTop: 22

                        }}>
                            {recommendEatItems}
                            {/*<TouchableOpacity*/}
                                {/*onPress={()=>{*/}
                                    {/*this.props.navigation.navigate('CommodityDetails')*/}
                                {/*}}*/}
                            {/*>*/}
                                {/*<ActCard/>*/}
                            {/*</TouchableOpacity>*/}
                            {/*<ActCard/>*/}
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    searchPanel:{
        marginTop: 40,
        width:330,
        height:32,
        backgroundColor: 'whitesmoke',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'

    },
    searchText:{
        fontSize:15,
        color:'#555'
    },
    banner:{
        width:330,
        height:110,
        backgroundColor:'whitesmoke',
        marginTop: 10
    },
    todayEat:{
        width:330,
        alignItems:'flex-start',
        marginTop: 20
    },
    eatTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    shopPanel:{
        width: 330,
        marginTop: 16,
        justifyContent:'flex-start',
        flexDirection:'row'

    },
    activitiesPanel:{
        marginTop: 32,
        width: 330,
        justifyContent:'flex-start'
    }
});



