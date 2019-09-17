import React from 'react';
import {View, Button, Image, ImageBackground, Dimensions, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Modal} from '@ant-design/react-native';
import {Provider} from '@ant-design/react-native';


const allWidth = Dimensions.get('window').width;
const cardWidth =  348/375*allWidth;


export default class OrderDetails extends React.Component{

    constructor(props){
        super(props);

        this.state={
            visible: false
        }
    }

    render() {
        return(


            <View
                style={{
                    flex:1,
                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                    backgroundColor:'#f7f7f7'
                }}
            >
                <View>
                    <Modal
                        transparent
                        maskClosable
                        visible={this.state.visible}
                        closable
                        onClose={()=>{
                            this.setState({
                                visible: false,
                            })
                        }}
                        style={{
                            width: 250,
                            height:300
                        }}

                    >
                    </Modal>
                </View>



                {/*顶部标标题栏*/}
                <View
                    style={{
                        width: allWidth,
                        height: 156,
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            width: 626,
                            height: 300,
                            marginTop:-100,
                            borderBottomRightRadius: 280,
                            borderBottomLeftRadius: 280,
                            backgroundColor:'#a3deff',
                            alignItems:'center',

                        }}
                    >
                        <View
                            style={{
                                marginTop: 160,
                                width: allWidth-40,
                                height: 25,
                                flexDirection:'row'
                            }}
                        >
                            <View
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={()=>{
                                        this.props.navigation.navigate('TabNavigator');
                                    }}
                                >
                                <Image
                                    source={require('../../../images/方向-左.png')}
                                    style={{
                                        width:24,
                                        height:24
                                    }}
                                />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    width: allWidth-40-24*2,
                                    height: 24,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize:18,
                                        color:'#000',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    订单详情
                                </Text>
                            </View>
                            <View
                                style={{
                                    width:24,
                                    height:24
                                }}
                            />
                        </View>

                        {/*订单状态*/}
                        <View
                            style={{
                                height:20,
                                marginTop: 14,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            <Image
                                source={require('../../../images/等待.png')}
                                style={{
                                    width:16,
                                    height: 16,
                                    marginRight: 5
                                }}
                            />
                            <Text
                                style={{
                                    fontSize:14,
                                    color:'white'
                                }}
                            >
                                订单待使用
                            </Text>
                        </View>

                        {/*订单状态*/}
                        <View
                            style={{
                                height:20,
                                marginTop: 14,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:14,
                                    color:'white',
                                    marginRight: 20
                                }}
                            >
                                联系人:Dr.Pancake
                            </Text>
                            <Text
                                style={{
                                    fontSize:14,
                                    color:'white'
                                }}
                            >
                                18860016206
                            </Text>
                        </View>


                    </View>
                </View>


                {/*所有放卡片的区域*/}
                <View
                    style={{
                        width: allWidth,
                        alignItems:'center',
                        marginTop: 60

                    }}
                >
                    {/*第一个卡片*/}
                    <View
                        style={{
                            width: 348/375*allWidth,
                            height: 128,
                            backgroundColor:'#fff',
                            borderRadius: 5,
                            alignItems:'center'
                        }}
                    >
                        <View
                            style={{
                                width: cardWidth-24,
                                height: 74,
                                marginTop: 12,
                                flexDirection:'row'
                            }}
                        >
                            <View
                                style={{
                                    width: 74,
                                    height:74,
                                    backgroundColor:'#f7f7f7'
                                }}
                            >
                            </View>

                            <View
                                style={{
                                    width: cardWidth-74-42-24,
                                    alignItems:'center'
                                }}
                            >
                                <View
                                    style={{
                                        width: cardWidth-74-42-24-20,
                                        height: 17
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12
                                        }}
                                    >
                                        乐诺华冰淇淋来啦！厦大98周年…
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width:176,
                                        height: 28,
                                        marginTop:13
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:'#666',
                                            fontSize: 12
                                        }}
                                    >
                                        A+B套餐：薄荷柠檬苏打/红袖苏打/柠萌苏打 + B：我是地瓜/咸蛋超人/Q仔
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    width: 48,
                                    height: 74,

                                }}
                            >
                                <Text
                                    style={{
                                        fontSize:12
                                    }}
                                >
                                    ￥14.90
                                </Text>
                                <Text
                                    style={{
                                        fontSize:12
                                    }}
                                >
                                    x1
                                </Text>

                            </View>

                        </View>
                        <View
                            style={{
                                width: cardWidth-24,
                                marginTop: 10,
                                alignItems:'flex-end'
                            }}
                        >
                            <TouchableOpacity
                                onPress={()=>[
                                    this.setState({
                                        visible:true
                                    })
                                ]}
                            >
                            <View
                                style={{
                                    borderRadius:11,
                                    height:22,
                                    width:86,
                                    borderWidth:1,
                                    borderColor:'#1faef4',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color:'#1faef4',
                                        fontSize:10
                                    }}
                                >
                                    兑换码
                                </Text>

                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*第二个卡片*/}
                    <View
                        style={{
                            marginTop: 20,
                            width: 348/375*allWidth,
                            height: 120,
                            backgroundColor:'#fff',
                            borderRadius: 5
                        }}
                    >
                        <View
                            style={{
                                marginLeft: 12,
                                marginTop: 14,
                                flexDirection:'row',
                                height: 20,
                                width: cardWidth-24,
                                alignItems:'center'
                            }}
                        >
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                    backgroundColor:'#f7f7f7'
                                }}
                            >
                            </View>
                            <View
                                style={{

                                }}
                            >
                             <Text
                                style={{
                                    fontSize:12,
                                    fontWeight:'bold',
                                    marginLeft: 10
                                }}
                             >
                                 LE NUOVA乐诺华（世贸双子塔店）
                             </Text>
                            </View>
                        </View>


                        {/*门店地址*/}
                        <View
                            style={{
                                marginLeft:12,
                                marginTop:21,
                                flexDirection:'row',
                                alignItems:'center'
                            }}
                        >
                            <View
                                style={{
                                   width: 48,
                                    height: 17,
                                    justifyContent:'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color:'#666',
                                        fontSize: 12
                                    }}
                                >
                                    门店地址
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: cardWidth-30-48-48,
                                    height: 17,
                                    marginLeft: 15,
                                    justifyContent:'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color:'#666',
                                        fontSize: 12
                                    }}
                                >
                                    思明区大学路177号世贸双子塔4层
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: 28,
                                    height: 17,
                                    justifyContent:'center'
                                }}
                            >
                                <Image
                                    source={require('../../../images/定位.png')}
                                    style={{
                                        width: 14,
                                        height: 14
                                    }}
                                />
                            </View>
                        </View>


                        {/*营业时间*/}
                        <View
                            style={{
                                marginLeft:12,
                                marginTop:10,
                                flexDirection:'row',
                                alignItems:'center'
                            }}
                        >
                            <View
                                style={{
                                    width: 48,
                                    height: 17,
                                    justifyContent:'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color:'#666',
                                        fontSize: 12
                                    }}
                                >
                                    营业时间
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: cardWidth-30-48-48,
                                    height: 17,
                                    marginLeft: 15,
                                    justifyContent:'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color:'#666',
                                        fontSize: 12
                                    }}
                                >
                                    思明区大学路177号世贸双子塔4层
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: 28,
                                    height: 17,
                                    justifyContent:'center'
                                }}
                            >
                                <Image
                                    source={require('../../../images/电话.png')}
                                    style={{
                                        width: 14,
                                        height: 14
                                    }}
                                />
                            </View>
                        </View>

                    </View>

                    {/*第三个卡片*/}
                    <View
                        style={{
                            marginTop: 20,
                            width: 348/375*allWidth,
                            height: 109,
                            backgroundColor:'#fff',
                            borderRadius: 5
                        }}
                    >
                        <View
                            style={{
                                marginLeft: 12,
                                marginTop: 18,
                                flexDirection:'row'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 11,
                                    color:'#999',

                                }}
                            >
                                订单编号：XXD20190805204912XSDHAJFHEI23D
                            </Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color:'#333',
                                    marginLeft: 15
                                }}
                            >
                                复制
                            </Text>
                        </View>

                        <View
                            style={{
                                marginLeft: 12,
                                marginTop: 6,
                                flexDirection:'row'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 11,
                                    color:'#999',

                                }}
                            >
                                下单时间：2019年8月5日 20:30:16
                            </Text>
                        </View>

                        <View
                            style={{
                                marginLeft: 12,
                                marginTop: 6,
                                flexDirection:'row'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 11,
                                    color:'#999',

                                }}
                            >
                                订单合计：￥38.00
                            </Text>
                        </View>

                        <View
                            style={{
                                marginLeft: 12,
                                marginTop: 6,
                                flexDirection:'row'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 11,
                                    color:'#999',

                                }}
                            >
                                实付金额：￥38.00
                            </Text>
                        </View>




                    </View>

                </View>

            </View>

        );
    }


}
