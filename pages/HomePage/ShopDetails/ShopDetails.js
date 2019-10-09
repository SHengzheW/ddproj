import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import RecommendCard from '../../components/RecommendCard/RecommendCard';
import global from '../../Global';

const allWidth = Dimensions.get('window').width;




export default class ShopDetails extends React.Component{


    constructor(props){
        super(props);

        this.state={
            id:'20',
            shopName:'宴遇 创意中国菜',
            shortBrief:'厦门第一创意菜',
            priceAverage:'46',
            peopleNum:'20',
            address:'湖滨北路133号',
            businessHours:'10:00-21:00',
            title:'宴遇 创意中国菜',
            price:{
                minPrice:20,
                maxPrice:20,
                orgMinPrice:20,
                orgMaxPrice:30
            }

        }

    }
    componentDidMount(): void {
        fetch(global.baseUrl+'/details/shop?id='+this.state.id,{
            method:'get',
            headers:{
                Authorization:'Bearer '+global.token
            }
        }).then((response)=>response.json())
            .then((res)=>{
                console.log(res.data);
            })
    }


    render(){


        return(
            <View style={styles.container}>

                {/**
                   * 顶部图片
                 */}
                <View style={styles.topPanel}>
                    <ImageBackground
                        source={require('../../images/宴遇.png')}
                        style={styles.topPanel}
                    >
                        <View
                            style={{
                                width: allWidth,
                                height: 30,
                                paddingLeft:20,
                                paddingRight:20,
                                flexDirection:'row',
                                marginTop: 40
                            }}
                        >
                            <View
                                style={{
                                    width: 90,
                                    height:30
                                }}
                            >
                                <TouchableOpacity
                                    onPress={()=>{
                                        this.props.navigation.goBack();
                                    }}
                                >
                                    <Image
                                        source={require('../../images/方向-左.png')}
                                        style={{
                                            width:25,
                                            height:25
                                        }}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View>

                            </View>

                        </View>

                    </ImageBackground>

                </View>

                {/**
                   * 商家标题信息
                 **/}
                <View style={styles.titlePanel}>
                    <View style={{
                        marginTop:-40
                    }}>
                        <View style={styles.circlePanel}>
                            <Image style={styles.circleAvater}
                                source={require('../../images/宴遇1.jpg')}
                            />
                        </View>

                    </View>
                    <View style={{marginTop:6}}>
                        <Text
                            style={{
                                fontSize:16,
                                color:'#333',
                                fontWeight: 'bold'
                            }}
                        >
                            {this.state.shopName}
                        </Text>
                    </View>
                    <View style={{marginTop:6}}>
                        <Text
                            style={{
                                fontSize:12,
                                color:'#333',
                            }}
                        >
                            {this.state.shortBrief} | 美食美味 | 人均￥{this.state.priceAverage}
                        </Text>
                    </View>
                    <View style={{marginTop:6, flexDirection:'row'}}>
                        <View style={{
                            width:40,
                            height:40,
                            borderRadius:20,
                            backgroundColor:'#efe'
                        }} />
                        <View style={{
                            width:40,
                            height:40,
                            borderRadius:20,
                            backgroundColor:'#faa',
                            marginLeft: -20
                        }}

                        />
                        <View
                            style={{
                                marginLeft:10,
                                height:40,
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            <Text
                                style={{fontSize:12,color:'#333'}}
                            >{this.state.peopleNum}人想去</Text>
                        </View>
                    </View>
                </View>


                {/**
                   *商家距离信息
                 */}
                <View
                    style={{
                        width: allWidth,
                        height: 120,
                        alignItems:'center',
                        marginTop:10,
                        backgroundColor:'white'
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
                                门店信息
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
                            <Image
                                style={{
                                    width: 64,
                                    height:64,
                                    backgroundColor:'#f7f7f7',
                                    borderRadius: 32
                                }}

                                source={require('../../images/宴遇1.png')}
                            >
                            </Image>

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
                                        {this.state.title}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color:'#666',
                                            marginTop: 18
                                        }}
                                    >
                                        {this.state.address}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color:'#666',
                                            marginTop: 4
                                        }}
                                    >
                                        营业时间：{this.state.businessHours}
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
                                    source={require('../../images/定位.png')}
                                    style={{
                                        width: 14,
                                        height: 14,
                                        marginTop: 10
                                    }}
                                />
                                <Image
                                    source={require('../../images/电话.png')}
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


                {/**
                   * 热销商品
                 */}
                <View
                    style={{
                        width: allWidth,
                        alignItems:'center',
                        marginTop:10,
                        backgroundColor:'white'
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
                                热销商品
                            </Text>

                        </View>
                        <View
                            style={{
                                marginTop: 4
                            }}
                        >
                            <RecommendCard title={this.state.title} price={this.state.price} avater="" soldNum="40"/>
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
       justifyContent:'flex-start',
       alignItems:'flex-start',
       backgroundColor:'#efefef'
   } ,
    topPanel:{
       width: allWidth,
        height:250,

    },
    titlePanel:{
       width: allWidth,
        height:150,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    circlePanel:{
       width: 80,
        height:80,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:40,
        backgroundColor:'white'
    },
    circleAvater:{
        width: 78,
        height:78,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:39,
    }
});
