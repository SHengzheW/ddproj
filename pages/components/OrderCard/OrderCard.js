import React from 'react';
import {View, Text, Image, Button, Alert} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import { TouchableOpacity } from 'react-native-gesture-handler';

const allWidth = Dimensions.get('window').width;

const cardWidth = allWidth*0.9;

const leftSpace = 10;

export default class OrderCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            type: this.props.type,
            orderState: this.props.status,
            orderName:'厦饭酸汤鱼·单人餐：小份…',
            imgUrl:require('../../images/酸菜鱼.jpg'),
            numbers:'2',
            exchangeName:'厦饭酸菜鱼',
            introduction:'真的好吃，吃饭不用菜'
        }
    }

    confirmDelivery(){
        Alert.alert('收货成功！');
        this.setState({
            orderState: 2
        });

    }



    render(){

        const shadowOpt = {
            width:allWidth*0.9, //包裹的子内容多宽这里必须多宽
            height:170,//同上
            color:"#eee",//阴影颜色
            border:6,//阴影宽度
            radius:10,//包裹的子元素圆角多少这里必须是多少
            opacity:0.7,//透明度
            x:0,
            y:2,
            style:{marginVertical:5}
        };


        return(
            <BoxShadow setting={shadowOpt}

            >
                <View
                    style={styles.container}
                >
                    <View
                        style={styles.topPanel}
                    >
                        {
                            /**
                             * 订单类型
                             */
                        }
                        <View
                            style={styles.titlePanel}
                        >
                            
                                {
                                    this.state.type === 0 ? <Text style={styles.tagText}>美食</Text> :
                                    this.state.type === 1 ? <Text style={styles.tagText}>校园活动</Text> :
                                    <Text style={styles.tagText}>特惠</Text>
                                
                                
                                }
                            
                        </View>
                        <View
                            style={{
                                width:cardWidth-22-42-80,
                                height:20,
                                marginTop: 4,
                                marginLeft: 10,
                            }}
                        >
                            <Text>
                                {this.state.orderName}
                            </Text>
                        </View>
                        {
                            /**
                             * 订单状态
                             */
                        }
                        <View
                            style={{
                                width:42,
                                height:17,
                                marginTop: 4,
                                marginLeft: 10,
                            }}
                        >
                            {
                                this.state.orderState === 0 ? <Text style={styles.statusText}>未支付</Text> :
                                this.state.orderState === 1 ? <Text style={styles.statusText}>待使用</Text> :
                                this.state.orderState === 4 ? <Text style={styles.statusText}>已发货</Text> :
                                this.state.orderState === 5 ? <Text style={styles.statusText}>处理中</Text> :
                                this.state.orderState === 2 ? <Text style={styles.statusText}>已完成</Text> :
                                <Text style={styles.statusText}>已取消</Text> 
                            }                            
                        </View>

                    </View>
                    <View
                        style={{
                            width:cardWidth,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={styles.orderLine}
                        />
                    </View>

                    <View
                        style={styles.bottomPanel}
                    >
                        <View
                            style={styles.detailsPanel}
                        >
                            <View
                                style={{
                                    width:95,
                                    height:65,
                                }}
                            >
                                <Image
                                    source={this.state.imgUrl}
                                    style={{
                                        width:95,
                                        height:65,
                                    }}
                                />

                            </View>
                            <View
                                style={styles.fontsPanel}
                            >
                                <Text
                                    style={{
                                        fontWeight: 'bold',

                                    }}
                                >
                                    {this.state.numbers}份 | {this.state.exchangeName}
                                </Text>
                                <View
                                    style={{
                                        marginTop:16
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:'#999'
                                        }}
                                    >
                                        {this.state.introduction}
                                    </Text>
                                </View>


                            </View>
                        </View>
                        {
                            /**
                             * 订单卡片下方的按钮
                             */
                        }
                        <View
                            style={{
                                width: cardWidth,
                                alignItems:'flex-end'
                            }}
                        >
                            {
                                this.state.orderState === 0 ?
                                <View style={styles.bottomButton}>
                                    <Text
                                        style={styles.buttonText}
                                    >
                                        去付款
                                    </Text>
                                </View> :
                                this.state.orderState === 1 ?
                                <View style={styles.bottomButton}>
                                    <Text
                                        style={styles.buttonText}
                                    >
                                        兑换码
                                    </Text>
                                </View> :
                                this.state.orderState === 4 ?
                                <View style={{width: cardWidth, flexDirection:'row', alignItems:'flex-end',justifyContent:'flex-end'}}>
                                    <TouchableOpacity
                                        onPress={()=>{
                                            Alert.alert('确认收货','确认收货吗？',
                                                [
                                                    {text:"确认", onPress:this.confirmDelivery.bind(this)},
                                                    {text:"取消", onPress:this.seeDelivery},
                                                    
                                                ]
                                                );
                                        }}
                                    >
                                        <View style={styles.bottomButton}>
                                            <Text
                                                style={styles.buttonText}
                                            >
                                                确认收货
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.bottomButton}>
                                        <Text
                                            style={styles.buttonText}
                                        >
                                            查看物流
                                        </Text>
                                    </View>
                                </View> :
                                <View style={styles.bottomButton}>
                                <Text
                                    style={styles.buttonText}
                                >
                                    删除订单
                                </Text>
                            </View>
                                

                            }
                        </View>

                    </View>


                </View>


            </BoxShadow>
        )
    }

}


const styles = StyleSheet.create({
    container:{
        width: allWidth*0.9,
        height: 170,
        backgroundColor:'#fff',
        borderRadius: 5,
        overflow:'hidden'
    },
    topPanel:{
        marginTop: 12,
        width: cardWidth,
        height: 24,
        flexDirection:'row',

    },
    titlePanel:{
        marginLeft: 12,
        height: 20,
        width: 70,
        paddingLeft:11,
        paddingRight:11,
        backgroundColor:'#87CEFA',
        borderRadius: 11,
        marginTop: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    orderLine:{
        width:cardWidth - 2 * leftSpace,
        height:1,
        backgroundColor:'#e8e8e8',
        marginTop:12
    },
    bottomPanel:{
        width:cardWidth,
        marginLeft:12,
        marginTop:12,
    },
    detailsPanel:{
        flexDirection: 'row',
        width:cardWidth
    },
    fontsPanel:{
        marginLeft:12,

    },
    tagText:{ 
        color:'#fff',
        fontSize: 10
    },
    statusText:{
        color:'#666666',
        fontSize:12
    },
    bottomButton:{
        marginTop:8,
        width:90,
        height: 26,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:13,
        borderColor:'#55acee',
        marginRight:14
    },
    buttonText: {
        color:'#55acee',
    }
});
