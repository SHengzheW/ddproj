import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {View, Button, Image, Text} from 'react-native';
import BoxShadow from 'react-native-shadow/lib/BoxShadow';

const allWidth = Dimensions.get('window').width;

export default class MyPage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
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
                                        Dr.Pancake
                                    </Text>
                                </View>
                                <View>
                                    <Image
                                        source={require('../../../images/女.png')}
                                        style={{
                                            width:16,
                                            height:16,
                                            marginTop:2
                                        }}
                                    />
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
                                    <Text
                                        style={{
                                            fontSize:9,
                                            color:'#76c5ff'
                                        }}
                                    >
                                        正式会员
                                    </Text>
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
                        </View>
                    </BoxShadow>
                    </View>
                </View>

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
                        待处理订单
                    </Text>
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
        marginTop: 42,
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
        borderRadius:3
    }
});
