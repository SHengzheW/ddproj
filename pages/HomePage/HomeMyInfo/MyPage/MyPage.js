import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {View, Button, Image, Text} from 'react-native';
import BoxShadow from 'react-native-shadow/lib/BoxShadow';
import UnusedOrderCard from '../../../components/UnusedOrderCard/UnusedOrderCard';
import global from '../../../Global';

const allWidth = Dimensions.get('window').width;

const contentWidth = allWidth * 0.9;

export default class MyPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            role:0,
            stageName:'',
            avater:'',
            activityList:[],
            newMessageStatus: false
        }
    }

    componentDidMount(): void {
        let _this=this;
        fetch(global.baseUrl+'/user/identity',{
            method:'get',
            headers:{
                Authorization:'Bearer '+global.token
            }
        }).then((response)=>response.json())
            .then((res)=>{
                console.log(res);
                _this.setState({
                    role: res.data.role,
                    stageName: res.data.stageName,
                    avater: res.data.avater,
                    activityList: res.data.activityList,
                })
            });

        //查看有无未读消息

        fetch(global.baseUrl+'/message/new',{
            method:'get',
            headers:{
                Authorization: 'Bearer '+global.token
            }
        }).then((response)=>response.json())
            .then((res)=>{
                _this.setState({
                    newMessageStatus:res.data.status
                })
            }).catch((err)=>{
                console.log(err);
        })
    }


    static navigationOptions = {
        header:null
    };

    render(){

        const shadowOpt = {
            width:allWidth*0.9, //包裹的子内容多宽这里必须多宽
            height: 93,//同上
            color:"#eee",//阴影颜色
            border:2,//阴影宽度
            radius:10,//包裹的子元素圆角多少这里必须是多少
            opacity:0.7,//透明度
            x:0,
            y:0,
            style:{marginVertical:5}
        };


        let roleItem = [];
        if(this.state.role===0){
            roleItem.push(
                <Text
                    style={{
                        fontSize:9,
                        color:'#76c5ff'
                    }}

                    key={1}
                >
                    未激活
                </Text>
            )
        }else if(this.state.role===1){
            roleItem.push(
                <Text
                    style={{
                        fontSize:9,
                        color:'#76c5ff'
                    }}
                    key={1}
                >
                    带审核
                </Text>
            )
        }else{
            roleItem.push(
                <Text
                    style={{
                        fontSize:9,
                        color:'#76c5ff'
                    }}
                    key={1}
                >
                    正式会员
                </Text>
            )
        }


        return(
            <View
                style={styles.container}
            >
                {/*顶部蓝色部分*/}
                <View
                    style={styles.topPanel}
                >
                    {/*最顶部三个图标按钮*/}
                    <View
                        style={styles.topIconPanel}
                    >
                        {/*左侧*/}
                        <View
                            style={styles.topLeftIconPanel}
                        >

                            <Image
                                source={require('../../../images/设置.png')}
                                style={{
                                    width:20,
                                    height:20,
                                }}
                            />
                        </View>
                        {/*右侧按钮图标*/}
                        <View
                            style={styles.topRightIconPanel}
                        >
                            <View
                                style={{
                                    width: 60,
                                    height:20,
                                    flexDirection:'row',
                                }}
                            >
                                <Image
                                    source={require('../../../images/扫一扫.png')}
                                    style={{
                                        width:20,
                                        height:20
                                    }}
                                />

                                <Image
                                    source={require('../../../images/客服.png')}
                                    style={{
                                        width:20,
                                        height:20,
                                        marginLeft: 20,

                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    {/*头像、昵称和标签*/}


                    <View
                        style={styles.topMiddlePanel}
                    >
                        {/*头像位置*/}
                        <View
                            style={styles.avaterPanel}
                        >
                            <Image
                                source={require('../../../images/厦饭.jpg')}
                                style={{
                                    width:74,
                                    height:74,
                                    borderRadius:37
                                }}
                            />

                            </View>
                        {/*昵称位置*/}

                        <View
                          style={styles.nickNamePanel}
                        >
                            <View
                                style={{
                                    flexDirection:'row'
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize:16,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {this.state.stageName}
                                    </Text>
                                </View>
                                <View>
                                    {/*<Image*/}
                                        {/*source={require('../../../images/女.png')}*/}
                                        {/*style={{*/}
                                            {/*width:16,*/}
                                            {/*height:16,*/}
                                            {/*marginTop:2*/}
                                        {/*}}*/}
                                    {/*/>*/}
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection:'row',
                                    marginTop:3
                                }}
                            >
                                <View
                                    style={{
                                        width: 70,
                                        height:18,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        backgroundColor:'#fff',
                                        borderRadius:9
                                    }}
                                >
                                    {roleItem}
                                </View>
                            </View>

                        </View>
                        {/*详情按钮*/}
                        <View
                            style={{
                                width:allWidth*0.9-80-230,
                                alignItems:'flex-end',
                                justifyContent:'center',
                                height:80
                            }}
                        >
                            <View
                                style={{

                                }}
                            >
                                <Image
                                    source={require('../../../images/更多-白.png')}
                                    style={{
                                        width:12,
                                        height:20
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    {/*四个按钮的位置*/}
                    <View
                        style={{
                            marginTop:20
                        }}
                    >
                    <BoxShadow setting={shadowOpt}>
                        <View
                            style={styles.buttonPanel}
                        >
                            <View
                                style={styles.button}
                            >
                                <Image
                                    source={require('../../../images/微简历.png')}
                                    style={{
                                        width:24,
                                        height:24
                                    }}
                                />
                                <Text
                                    style={{
                                        marginTop:5,
                                        color:'#333',
                                        fontSize:9
                                    }}
                                >
                                    个人简历
                                </Text>
                            </View>
                            <View
                                style={styles.button}
                            >
                                <Image
                                    source={require('../../../images/砍价.png')}
                                    style={{
                                        width:24,
                                        height:24
                                    }}
                                />
                                <Text
                                    style={{
                                        marginTop:5,
                                        color:'#333',
                                        fontSize:9
                                    }}
                                >
                                    我的砍价
                                </Text>
                            </View>
                            <View
                                style={styles.button}
                            >
                                <Image
                                    source={require('../../../images/收藏.png')}
                                    style={{
                                        width:24,
                                        height:24
                                    }}
                                />
                                <Text
                                    style={{
                                        marginTop:5,
                                        color:'#333',
                                        fontSize:9
                                    }}
                                >
                                    我的收藏
                                </Text>
                            </View>
                            <View
                                style={styles.button}
                            >
                                <Image
                                    source={require('../../../images/邀请码.png')}
                                    style={{
                                        width:24,
                                        height:24
                                    }}
                                />
                                <Text
                                    style={{
                                        marginTop:5,
                                        color:'#333',
                                        fontSize:9
                                    }}
                                >
                                    邀请码
                                </Text>
                            </View>

                        </View>
                    </BoxShadow>
                    </View>
                </View>

                {/*底部待使用订单部分*/}
                <View
                    style={{
                        width:allWidth*0.9,
                        marginTop: 70,
                    }}
                >
                    <Text
                        style={{
                            fontSize:14,

                        }}
                    >
                        待使用订单
                    </Text>

                    <View
                        style={{
                            marginTop:20,
                            width: contentWidth,

                        }}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                                this.props.navigation.navigate('OrderDetails')
                            }}
                        >
                            <UnusedOrderCard/>
                        </TouchableOpacity>

                        {/*没有订单时显示的界面*/}
                        <View
                            style={{
                                marginTop:20,
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color:'#666'
                                }}
                            >
                                暂时没有待使用的订单~
                            </Text>
                            <View
                                style={{
                                    width:116,
                                    height:31,
                                    borderRadius:15,
                                    backgroundColor:'#55acee',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop:20
                                }}
                            >
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize:14
                                    }}
                                >去逛逛</Text>
                            </View>
                        </View>
                    </View>

                </View>





            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'flex-start',
       alignItems:'center',
       backgroundColor:'#fafafa'
   } ,
    topPanel:{
        width: allWidth + 130,
        height: 230,
        backgroundColor:'#A3DEFF',
        borderBottomLeftRadius: 210,
        borderBottomRightRadius: 210,
        alignItems: 'center'
    },
    topIconPanel:{
       width:allWidth*0.9,
        height: 20,
        marginTop: global.useMarginTop,
        // marginLeft: 65 + allWidth * 0.05,
        flexDirection:'row',

    },
    topLeftIconPanel:{
       width:100,
        height:20,
    },
    topRightIconPanel:{
       width: allWidth*0.9-100,
        alignItems:'flex-end',

        height:20
    },
    topMiddlePanel:{
       marginTop: 23,
       width:allWidth*0.9,
        height:80,
        flexDirection:'row',
    },
    avaterPanel:{
       overflow:'hidden',
       width:80,
        height:80,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: '#fff'
    },
    nickNamePanel:{
        width:200,
        height:80,
        marginLeft: 20,
        justifyContent:'center'
    },
    buttonPanel:{
        width:allWidth*0.9,
        height:93,
        backgroundColor:'#fff',
        borderRadius:3,
        flexDirection:'row'
    },
    button:{
        width: contentWidth/4,
        height:93,

        justifyContent:'center',
        alignItems:'center'
    }
});
