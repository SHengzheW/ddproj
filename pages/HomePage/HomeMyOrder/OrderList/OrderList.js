import React from 'react';
import {View, Button, Text, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import BoxShadow from 'react-native-shadow/lib/BoxShadow';
import OrderCard from '../../../components/OrderCard/OrderCard';

const allWidth = Dimensions.get('window').width;

const tabWidth = Dimensions.get('window').width/5;

export default class OrderList extends React.Component{

    toOrderDetails=()=>{
      this.props.navigation.navigate('ConfirmOrder');
    };


    constructor(props) {
        super(props);

        this.state = {
            leftWhiteSpace: 0,
            firstFont:'bold',
            secondFont:'normal',
            thirdFont:'normal',
            forthFont:'normal',
            fifthFont:'normal'
        }
    }

    static navigationOptions={
        header: null
    };


    render(){

        const shadowOpt = {
            width:330, //包裹的子内容多宽这里必须多宽
            height:240,//同上
            color:"#eee",//阴影颜色
            border:6,//阴影宽度
            radius:10,//包裹的子元素圆角多少这里必须是多少
            opacity:0.7,//透明度
            x:0,
            y:2,
            style:{marginVertical:5}
        };


        return(
            <View
                style={{
                    flex:1,
                    justifyContent:'flex-start',
                    alignItems:'center',
                    backgroundColor:'#fafafa'
                }}
            >
                {/*顶部标题栏*/}
                <View
                    style={{
                        width:Dimensions.get('window').width,
                        height:120,
                        backgroundColor:'white',

                    }}
                >
                    {/*顶部标题栏“我的订单”和搜索图标*/}
                    <View
                        style={{
                            width:Dimensions.get('window').width,
                            height:30,
                            flexDirection:'row',
                            marginTop:40
                        }}
                    >
                        <View
                            style={{
                                width:70,
                                height:30
                            }}
                        >
                        </View>
                        <View
                            style={{
                                alignItems:'center',
                                justifyContent:'center',
                                width:Dimensions.get('window').width-70-70,
                                height:30
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:16,
                                    fontWeight: 'bold'
                                }}
                            >
                                我的订单
                            </Text>
                        </View>
                        <View
                            style={{
                                width:70,
                                height:30,
                                alignItems:'flex-end',
                                justifyContent:'center'
                            }}
                        >
                            <Image
                                source={require('../../../images/搜索.png')}
                                style={{
                                    width:24,
                                    height:24,
                                    marginRight:20
                                }}
                            />
                        </View>
                    </View>

                    {/*标题栏中的tab栏*/}
                    <View
                        style={{
                            width:Dimensions.get('window').width,
                            height:20,
                            marginTop:20,
                            flexDirection:'row'
                        }}
                    >
                        <View
                            style={{
                                width:tabWidth,
                                height:20,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:14,
                                    fontWeight:this.state.firstFont
                                }}

                                onPress={()=>{
                                    this.setState({
                                        leftWhiteSpace: 0,
                                        firstFont:'bold',
                                        secondFont:'normal',
                                        thirdFont:'normal',
                                        forthFont:'normal',
                                        fifthFont:'normal'
                                    })
                                }}
                            >
                                全部
                            </Text>
                        </View>
                        <View
                            style={{
                                width:tabWidth,
                                height:20,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:14,
                                    fontWeight:this.state.secondFont

                                }}

                                onPress={()=>{
                                    this.setState({
                                        leftWhiteSpace: tabWidth,
                                        firstFont:'normal',
                                        secondFont:'bold',
                                        thirdFont:'normal',
                                        forthFont:'normal',
                                        fifthFont:'normal'
                                    })
                                }}
                            >
                                待付款
                            </Text>
                        </View>
                        <View
                            style={{
                                width:tabWidth,
                                height:20,
                                justifyContent:'center',
                                alignItems:'center',

                            }}
                        >
                            <Text
                                style={{
                                    fontSize:14,
                                    fontWeight:this.state.thirdFont
                                }}

                                onPress={()=>{
                                    this.setState({
                                        leftWhiteSpace: 2 * tabWidth,
                                        firstFont:'normal',
                                        secondFont:'normal',
                                        thirdFont:'bold',
                                        forthFont:'normal',
                                        fifthFont:'normal'
                                    })
                                }}
                            >
                                处理中
                            </Text>
                        </View>
                        <View
                            style={{
                                width:tabWidth,
                                height:20,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:14,
                                    fontWeight:this.state.forthFont
                                }}

                                onPress={()=>{
                                    this.setState({
                                        leftWhiteSpace: 3 * tabWidth,
                                        firstFont:'normal',
                                        secondFont:'normal',
                                        thirdFont:'normal',
                                        forthFont:'bold',
                                        fifthFont:'normal'
                                    })
                                }}
                            >
                                待使用
                            </Text>
                        </View>
                        <View
                            style={{
                                width:tabWidth,
                                height:20,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:14,
                                    fontWeight:this.state.fifthFont
                                }}

                                onPress={()=>{
                                    this.setState({
                                        leftWhiteSpace: 4 * tabWidth,
                                        firstFont:'normal',
                                        secondFont:'normal',
                                        thirdFont:'normal',
                                        forthFont:'normal',
                                        fifthFont:'bold'
                                    })
                                }}
                            >
                                已发货
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: allWidth,
                            height:10,

                        }}
                    >
                        <View
                            style={{
                                width:tabWidth,
                                alignItems:'center',
                                marginLeft:this.state.leftWhiteSpace
                            }}
                        >
                            <View
                                style={{
                                    width:tabWidth*0.8,
                                    height:3,
                                    marginTop: 7,
                                    backgroundColor:'#55acee'
                                }}
                            >
                            </View>
                        </View>
                    </View>

                </View>

                <ScrollView>
                    <View
                        style={{
                            flex:1,
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                                this.props.navigation.navigate('ConfirmOrder',{
                                    orderId:'5'
                                });
                            }}
                        >
                            <OrderCard/>
                        </TouchableOpacity>
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>

                    </View>
                </ScrollView>
            </View>

        );
    }
}
