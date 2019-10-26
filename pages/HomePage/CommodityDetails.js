import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Text, Image} from 'react-native';
import {Button, Modal} from '@ant-design/react-native';
import {ImageBackground, Alert} from 'react-native';
import SearchResult from './SearchResult/SearchResult';
import ResultCard from '../components/ResultCard/ResultCard';
import RecommendCard from '../components/RecommendCard/RecommendCard';
import global from '../Global';
import HTMLView from 'react-native-htmlview';

const allHeight = Dimensions.get('window').height;
const allWidth = Dimensions.get('window').width;



function SelectItem(props) {

    if(!props.state) {

        return <View
            style={{
                paddingLeft: 15,
                paddingRight: 15,
                maxWidth: allWidth - 30,
                borderRadius: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: '#eee',
                marginLeft: 5,
                marginTop: 5

            }}
        >

                <Text
                    style={{
                        color: '#222'
                    }}
                >
                    {props.name}
                </Text>
        </View>
    }else{
        return <View
            style={{
                paddingLeft: 15,
                paddingRight: 15,
                maxWidth: allWidth - 30,
                borderRadius: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: '#F8FCFF',
                marginLeft: 5,
                borderColor:'#55acee',
                borderWidth: 1,
                marginTop:5
            }}
        >
            <Text
                style={{
                    color: '#55acee'
                }}
            >
                {props.name}
            </Text>
        </View>

    }
}


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
            foodList:[],
            num:1,
            dialogVisible:false,
            itemList:[],
            chooseItemIndex:'',
            itemTitle:'',
            itemPrice:'',
            itemOrgPrice:'',
            totalNum:'',
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
                let itemList = res.data.itemList;
                for(let index = 0; index<itemList.length; index++ ){
                    itemList[index].state = false;
                    itemList[index].index = index;
                }
                itemList[0].state = true;
                _this.setState({
                    title:res.data.title,
                    soldNum:res.data.soldNum,
                    service:res.data.service.split(','),
                    price:res.data.price,
                    shop:res.data.shop,
                    itemList: itemList,
                    chooseItemIndex: 0,
                    itemTitle: itemList[0].title,
                    itemPrice: itemList[0].price,
                    itemOrgPrice: itemList[0].orgPrice,
                    totalNum: itemList[0].totalNum

                });

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

    render() {

        /***
         * 展示所有的可选项目
         * */
        let selectItems = [];
        let itemList = this.state.itemList;
        itemList.forEach((item)=>{
            selectItems.push(
                <TouchableOpacity
                    onPress={()=>{
                        let chooseIndex = item.index;
                        this.setState({
                            chooseItemIndex: item.index,
                            itemTitle:item.title,
                            itemPrice: item.price,
                            itemOrgPrice: item.orgPrice,
                            totalNum: item.totalNum
                        });

                        let itemList = this.state.itemList;
                        for(let index = 0; index<itemList.length; index++){
                            itemList[index].state = itemList[index].index === chooseIndex;
                        }

                        this.setState({
                            itemList: itemList
                        })

                    }}
                >
                    <SelectItem state={item.state} name={item.title} />
                </TouchableOpacity>
            )
        });

        //测试rn-htmlview
        const htmlContent = "<h2>djwada</h2><p><span style=\"font-style: italic;\">你打打</span></p><p><img src=\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571117754327&di=5e618d3616598b6e5c50a561050a8255&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2017%2F1001%2F2DB7420552DB01E62DCDBDFB88CA0C74396561FC_size101_w640_h463.jpeg\" style=\"max-width:100%;\"><span style=\"font-style: italic;\"><br></span></p><p><br></p>";

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
                <ScrollView
                    style={{
                        width: allWidth,
                        height: allHeight*0.9,

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
                        <View style={{
                            width: allWidth*0.9,
                            marginTop:20
                        }}>
                            <HTMLView
                                value={htmlContent}

                            />

                        </View>
                        <View
                            style={{
                                width: allWidth,
                                height: 30
                            }}
                        />


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


                </ScrollView>
                <View
                    style={{
                        width: allWidth,
                        height: allHeight*0.1,
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
                            <TouchableOpacity
                                onPress={()=>{
                                    this.setState({
                                        dialogVisible: true
                                    })

                                }}
                            >
                            <View
                                style={{
                                    width: 146,
                                    height: 42,
                                    borderRadius: 21,
                                    backgroundColor:'#55acee',
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
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                {/**
                 * 下方弹出的对话框
                 */}
                <Modal
                    popup
                    visible={this.state.dialogVisible}
                    animationType="slide-up"
                    onClose={this.onClose2}
                >
                    <View
                        style={{marginTop: 10,width: allWidth, height: 20, alignItems:'flex-end', justifyContent:'flex-end'}}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({
                                    dialogVisible: false
                                })
                            }}
                        >
                            <Image
                                source={require('../images/关闭.png')}
                                style={{width: 20,height: 20, marginRight: 15}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingVertical: 13, paddingHorizontal: 10, width: allWidth, height: 330 }}>
                        {/**
                         * 显示所选项
                         */}
                        <View
                            style={{
                                width: allWidth,
                                height: 100,
                                flexDirection:'row'
                            }}
                        >
                            <View
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor:'#000'
                                }}
                            />
                            <View
                                style={{
                                    width: allWidth-160,
                                    marginLeft: 15,
                                    // height: 20,

                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {this.state.itemTitle}
                                    </Text>
                                </View>
                                <View>
                                    <Text
                                        style={{
                                            color:'#666',
                                            fontSize: 10,
                                            marginTop: 4
                                        }}
                                    >
                                        剩余{this.state.totalNum}份
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        marginTop: 5
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:'#d65827',
                                            fontWeight:'bold',
                                            fontSize:12
                                        }}
                                    >
                                        ￥ {this.state.itemPrice}
                                    </Text>
                                </View>
                            </View>

                        </View>

                        {/**
                         * 显示可以选择的选项
                         * */}
                         <Text
                            style={{
                                marginTop: 20,
                                fontSize: 12,
                                color:'#222'
                            }}
                         >
                             可选套餐
                         </Text>
                        <View
                            style={{
                                marginTop: 15,
                                width: allWidth-20,
                                flexDirection:'row',
                                paddingLeft: 10,
                                paddingRight: 10,
                                flexWrap:'wrap'
                            }}
                        >
                            {selectItems}


                        </View>

                        <View
                            style={{
                                marginTop: 15,
                                width: allWidth,
                                flexDirection:'row',
                                paddingLeft: 10,
                                paddingRight: 10,

                                height:30
                            }}
                        >
                            <View
                                style={{
                                    width: allWidth-120,
                                    height:30,

                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color:'#222',
                                        marginLeft: -10,
                                        lineHeight: 30
                                    }}
                                >
                                    数量：
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: 100,
                                    height: 30,
                                    flexDirection:'row'
                                }}
                            >
                                <TouchableOpacity
                                    onPress={()=>{
                                        if(this.state.num>1) {
                                            this.setState({
                                                num: this.state.num - 1
                                            })
                                        }
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color:'#55acee',
                                            lineHeight: 30
                                        }}
                                    >
                                        -
                                    </Text>
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        lineHeight: 30
                                    }}
                                >
                                    {this.state.num}
                                </Text>
                                <TouchableOpacity
                                    onPress={()=>{
                                        this.setState({
                                            num: this.state.num+1
                                        })
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color:'#55acee',
                                            lineHeight: 30
                                        }}
                                    >
                                        +
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View
                        style={{
                            width: allWidth,
                            alignItems:'center',
                            justifyContent:'flex-start',
                            marginBottom: 30
                        }}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({
                                    dialogVisible: false
                                });
                                this.props.navigation.navigate('ConfirmOrder',{id:this.state.id, num: this.state.num, itemIndex: this.state.chooseItemIndex});
                            }}
                        >
                        <View
                            style={{
                                width: allWidth*0.8,
                                height: 40,
                                alignItems:'center',
                                justifyContent:'center',
                                borderRadius: 20,
                                backgroundColor:'#55acee'
                            }}
                        >
                            <Text
                                style={{
                                    color:'white'
                                }}
                            >
                                立即购买
                            </Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </Modal>


            </View>
        );
    }

}

const styles = StyleSheet.create({

});
