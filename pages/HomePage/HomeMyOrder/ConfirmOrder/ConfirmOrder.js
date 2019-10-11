import React from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import {Provider, Modal} from '@ant-design/react-native';

const allWidth = Dimensions.get('window').width;
const allHeight = Dimensions.get('window').height;



function ShowPayment(props){


}



export default class ConfirmOrder extends React.Component{


    constructor(props) {
        super(props);



        this.state={
            orderId: this.props.navigation.getParam('orderId'),
            price:'14.90',
            num:'1',
            visible:false,
            payment:'alipay',
            agreeDeal:false,
            buyName:'',
            phone:''

        }

    }


    render(){

        {/**
         * 是否同意条款
         */}
        let showAgreeDeal = [];
        if(this.state.agreeDeal){
            showAgreeDeal.push(
                <TouchableOpacity
                    onPress={()=>{
                        this.setState({
                            agreeDeal: !this.state.agreeDeal
                        })
                    }}
                >
                <Image

                    source={require('../../../images/选中-选中.png')}
                    style={{
                        width: 20,
                        height: 20
                    }}
                />
                </TouchableOpacity>
            )

        }else{
            showAgreeDeal.push(
                <TouchableOpacity
                    onPress={()=>{
                        this.setState({
                            agreeDeal: !this.state.agreeDeal
                        })
                    }}
                >
                <Image
                    onPress={()=>{
                        this.setState({
                            agreeDeal: !this.state.agreeDeal
                        })
                    }}
                    source={require('../../../images/选中.png')}
                    style={{
                        width: 20,
                        height: 20
                    }}
                />
                </TouchableOpacity>
            )

        }


        {/**
         * 选择微信支付还是支付宝
         */}
        let showPayment = [];
        if(this.state.payment.indexOf('alipay')===-1){
            showPayment.push(

                <View
                    style={{
                        width: allWidth,
                        height: 106,
                        backgroundColor: '#fff',
                        marginTop:10,

                    }}
                >
                    <TouchableOpacity
                        onPress={()=>{
                            this.setState({
                                payment:'wechat'
                            })
                        }}
                    >
                    <View
                        style={{
                            width: allWidth,
                            height: 52,
                            justifyContent:'center',
                            flexDirection:'row'
                        }}
                    >
                        <View
                            style={{
                                width: 56,
                                height: 52,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Image
                                source={require('../../../images/微信支付-选中.png')}
                                style={{
                                    width: 22,
                                    height: 22
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: allWidth-56-56,
                                height:52,
                                justifyContent:'center'
                            }}
                        >
                            <Text>微信支付</Text>
                        </View>
                        <View
                            style={{
                                width: 56,
                                height: 52,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Image
                                source={require('../../../images/对号.png')}
                                style={{
                                    width: 24,
                                    height: 24
                                }}
                            />

                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            this.setState({
                                payment:'alipay'
                            })
                        }}
                    >
                    <View
                        style={{
                            width: allWidth,
                            height: 2,
                            backgroundColor:'#f7f7f7'
                        }}
                    />
                    <View
                        style={{
                            width: allWidth,
                            height: 52,
                            justifyContent:'center',
                            flexDirection:'row'
                        }}
                    >

                        <View
                            style={{
                                width: 56,
                                height: 52,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Image
                                source={require('../../../images/支付宝-选中.png')}
                                style={{
                                    width: 22,
                                    height: 22
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: allWidth-56-56,
                                height:52,
                                justifyContent:'center'
                            }}
                        >
                            <Text>支付宝</Text>
                        </View>
                        <View
                            style={{
                                width: 56,
                                height: 52
                            }}
                        >


                        </View>


                    </View>


                    </TouchableOpacity>
                </View>
            )

        }else{
            showPayment.push(
                <View
                    style={{
                        width: allWidth,
                        height: 106,
                        backgroundColor: '#fff',
                        marginTop:10,

                    }}
                >
                    <TouchableOpacity
                        onPress={()=>{
                            this.setState({
                                payment:'wechat'
                            })
                        }}
                    >

                        <View
                            style={{
                                width: allWidth,
                                height: 52,
                                justifyContent:'center',
                                flexDirection:'row'
                            }}
                        >

                            <View
                                style={{
                                    width: 56,
                                    height: 52,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                            >
                                <Image
                                    source={require('../../../images/微信支付-选中.png')}
                                    style={{
                                        width: 22,
                                        height: 22
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    width: allWidth-56-56,
                                    height:52,
                                    justifyContent:'center'
                                }}
                            >
                                <Text>微信支付</Text>
                            </View>
                            <View
                                style={{
                                    width: 56,
                                    height: 52
                                }}
                            >


                            </View>


                        </View>


                    </TouchableOpacity>
                    <View
                        style={{
                            width: allWidth,
                            height: 2,
                            backgroundColor:'#f7f7f7'
                        }}
                    />
                    <TouchableOpacity
                        onPress={()=>{
                            this.setState({
                                payment:'alipay'
                            })
                        }}
                    >
                        <View
                            style={{
                                width: allWidth,
                                height: 52,
                                justifyContent:'center',
                                flexDirection:'row'
                            }}
                        >
                            <View
                                style={{
                                    width: 56,
                                    height: 52,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                            >
                                <Image
                                    source={require('../../../images/支付宝-选中.png')}
                                    style={{
                                        width: 22,
                                        height: 22
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    width: allWidth-56-56,
                                    height:52,
                                    justifyContent:'center'
                                }}
                            >
                                <Text>支付宝</Text>
                            </View>
                            <View
                                style={{
                                    width: 56,
                                    height: 52,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                            >
                                <Image
                                    source={require('../../../images/对号.png')}
                                    style={{
                                        width: 24,
                                        height: 24
                                    }}
                                />

                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            )
        }


        return(
            <Provider>
            <View
                style={{
                    flex:1,
                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                    backgroundColor:'#f7f7f7'
                }}
            >
                <View
                    style={{
                        width: allWidth,
                        height: allHeight*0.9
                    }}
                >
                <View
                    style={styles.topBar}
                >
                    {/*顶部栏*/}
                    <View
                        style={styles.barContent}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                                this.props.navigation.navigate('TabNavigator');
                            }}
                        >
                            <View
                                style={styles.backButtonPanel}
                            >
                                <Image
                                    source={require('../../../images/更多.png')}
                                    style={{
                                        transform:[{'rotate': '180deg'}],
                                        height:24,
                                        width:24,
                                        marginLeft: 10
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <View
                            style={styles.barTitlePanel}
                        >
                            <Text
                                style={{
                                    fontSize:18,
                                    fontWeight: 'bold'
                                }}
                            >
                                确认订单
                            </Text>
                        </View>
                        <View
                            style={styles.rightWhitePanel}
                        >

                        </View>

                    </View>
                    {/*联系方式填写栏*/}
                    <View
                        style={styles.contactPanel}
                    >
                        <View
                            style={styles.contactInputPanel}
                        >
                            <View
                                style={styles.leftInputTitlePanel}
                            >
                                <Text
                                    style={{
                                        fontSize:14,
                                        color:'#000'
                                    }}
                                >
                                    联系人
                                </Text>
                            </View>
                            <View style={styles.rightInputTitlePanel}>
                                <TextInput
                                    style={{ width: allWidth - 100, height: 40 }}
                                    onChangeText={text => {
                                        this.setState({
                                            buyName: text
                                        })
                                    }}
                                    value={this.state.buyName}
                                />
                            </View>

                        </View>
                        <View
                            style={{
                                width: allWidth,
                                height:1,
                                backgroundColor:'#f7f7f7',
                                marginTop: 8,
                                marginBottom: 8
                            }}
                        />
                        <View
                            style={styles.contactInputPanel}
                        >
                            <View
                                style={styles.leftInputTitlePanel}
                            >
                                <Text
                                    style={{
                                        fontSize:14,
                                        color:'#000'
                                    }}
                                >
                                    手机号
                                </Text>
                            </View>
                            <View
                                style={styles.rightInputTitlePanel}
                            >
                                <TextInput
                                    style={{ width: allWidth - 100,height: 40 }}
                                    onChangeText={text => {
                                        this.setState({
                                            phone: text
                                        })
                                    }}
                                    value={this.state.phone}
                                />


                            </View>

                        </View>
                    </View>
                </View>

                <View
                    style={styles.orderDetails}
                >
                    {/*订单详情*/}
                    <View
                        style={styles.threeContentPanel}
                    >
                        <View
                            style={{
                                width: 104,
                                height: 82,
                            }}
                        >
                            <Image
                                source={require('../../../images/酸菜鱼.jpg')}
                                style={{
                                    width: 82,
                                    height: 84,
                                    marginLeft: 20,
                                    borderRadius: 3
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: allWidth-104-58,
                                height: 84,
                                justifyContent:'center'
                            }}
                        >
                            <Text>
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 55,
                                height: 84,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text>
                                ￥{this.state.price}
                            </Text>
                            <Text>
                                x {this.state.num}
                            </Text>
                        </View>


                    </View>
                    <View
                        style={{
                            width: allWidth,
                            height:1,
                            backgroundColor:'#f7f7f7',
                            marginTop: 16
                        }}
                    />
                    {/*可用门店*/}
                    <View
                        style={styles.shopDetails}
                    >
                        <View
                            style={{
                                width: 20+56+20,
                                height: 52,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                }}
                            >
                                可用门店
                            </Text>

                        </View>
                        <View
                            style={{
                                width:allWidth-96,
                                height: 52,
                                justifyContent:'center',
                                alignItems:'flex-end'
                            }}
                        >
                            <Text
                                style={{
                                    marginRight: 20
                                }}
                            >
                                LE NUOVA乐诺华（世贸双子塔店）
                            </Text>
                        </View>

                    </View>
                    <View
                        style={{
                            width: allWidth,
                            height:1,
                            backgroundColor:'#f7f7f7',
                        }}
                    />
                    {/*合计*/}
                    <View
                        style={{
                            width: allWidth,
                            height: 52,
                            justifyContent:'center',
                            alignItems:'flex-end',
                        }}
                    >
                        <View
                            style={{
                                flexDirection:'row'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:12,
                                }}
                            >
                                合计：
                            </Text>
                            <Text
                                style={{
                                    color:'#d65827',
                                    fontSize:12,
                                    marginRight: 20
                                }}
                            >
                                ￥14.90
                            </Text>
                        </View>

                    </View>

                </View>

                {/*我已阅读*/}
                <View
                    style={{
                        width: allWidth,
                        height: 52,
                        backgroundColor:'#fff',
                        marginTop: 10,
                        flexDirection:'row'

                    }}
                >
                    <View
                       style={{
                           width: 56,
                           height: 52,
                           justifyContent: 'center',
                           alignItems:'center'
                       }}
                    >
                        {showAgreeDeal}
                        {/*<Image*/}
                            {/*source={require('../../../images/选中.png')}*/}
                            {/*style={{*/}
                                {/*width: 20,*/}
                                {/*height: 20*/}
                            {/*}}*/}
                        {/*/>*/}
                    </View>
                    <View
                        style={{
                            width: allWidth-56-40,
                            height: 52,
                            justifyContent:'center'
                        }}
                    >
                        <Text>
                            我已阅读并同意《商品不接受退款协议》
                        </Text>
                    </View>

                </View>

                {/**支付方式*/}
                {showPayment}
                </View>
                {/*<View*/}
                    {/*style={{*/}
                        {/*width: allWidth,*/}
                        {/*height: allHeight*0.1,*/}
                        {/*backgroundColor:'#fff'*/}
                    {/*}}*/}
                {/*>*/}


                {/*</View>*/}
            </View>
            </Provider>
        );
    }


}


const styles = StyleSheet.create({
   topBar:{
       width:allWidth,
       height: 202,
       backgroundColor: '#fff'
   },
    barContent:{
        width:allWidth,
        height: 50,
        marginTop: 45,
        flexDirection:'row'

    },
    backButtonPanel:{
        width: 100,
        height:50
    },
    barTitlePanel:{
       width: allWidth-100-100,
        height:50,
        alignItems: 'center'
    },
    rightWhitePanel:{
       width:100,
        height:50
    },
    contactPanel:{
       width: allWidth,
    },
    contactInputPanel:{
       width:allWidth,
        height:40,
        justifyContent: 'center',
        flexDirection:'row'
    },
    leftInputTitlePanel:{
       width:20+40+20,
        alignItems:'center',
        justifyContent:'center'
    },
    rightInputTitlePanel:{
        width: allWidth-80,
        height:40,
        alignItems: 'center'
    },
    orderDetails:{
       width: allWidth,
        height: 211,
        backgroundColor:'#fff',
        marginTop:10,
    },
    threeContentPanel:{
        width:allWidth,
        height:82,
        flexDirection: 'row',
        marginTop: 20
    },
    shopDetails:{
        width: allWidth,
        height: 52,
        justifyContent:'center',
        flexDirection:'row'
    }


});
