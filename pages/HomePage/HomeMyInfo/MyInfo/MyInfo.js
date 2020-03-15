import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {View, Button, Image, Text} from 'react-native';
import BoxShadow from 'react-native-shadow/lib/BoxShadow';
import UnusedOrderCard from '../../../components/UnusedOrderCard/UnusedOrderCard';
import global from '../../../Global';

const allWidth = Dimensions.get('window').width;

export default class MyInfo extends React.Component{

    constructor(props){
        super(props);
        this.state={
            stageName: this.props.navigation.state.params.stageName,
            sourceUrl: this.props.navigation.state.params.sourceUrl

        }
    }


    render(){


        return(
            <View style={styles.Container}>

                {
                    /**
                     * 顶部导航栏
                     * 
                     */
                }
                <View
                    style={{
                        width: Dimensions.get('window').width,
                        height: 50,
                        backgroundColor:'#fff',
                        marginTop: 1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            width: Dimensions.get('window').width*0.9,
                            height: 25,
                            flexDirection:'row'
                        }}
                    >
                        <View
                            style={{
                                width: 35,
                                height:24,
                            }}
                        >
                            <TouchableOpacity
                                onPress={()=>{
                                    this.props.navigation.goBack();
                                }}
                            >
                                <Image
                                    source={require('../../../images/方向-左.png')}
                                    style={{
                                        width:24,
                                        height:24,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: Dimensions.get('window').width*0.9-70,
                                height: 24,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',

                                }}
                            >
                                个人资料
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 35,
                                height: 24,
                                justifyContent:'center',
                                alignItems:'center',

                            }}
                        >
                        </View>


                    </View>


                </View>


                {
                    /**
                     * 下方各个信息框
                     * 
                     */
                }
                <View style={styles.avaterPanel}>
                    <View style={styles.secondPanel}>
                        <Text style={styles.titlePanel}>头像</Text>
                    </View>
                    <View style={{width:allWidth*0.2,height:80}} />

                    
                    <View style={styles.thirdPanel}>
                        {
                            this.state.sourceUrl === "" ? <View style={{width:60,height:60,borderRadius:30,backgroundColor:'#55ACEE'}}></View> :
                            <Image source={this.state.sourceUrl} style={{width:60,height:60,borderRadius:30,backgroundColor:'#55ACEE'}} />
                        }
                    </View>
                </View>
                
                <View style={styles.namePanel}>
                    <View style={style=styles.secondPanel}>
                        <Text style={styles.titlePanel}>姓名</Text>
                    </View>
                    <View style={{width:allWidth*0.2,height:60}} />
                    <View style={styles.thirdPanel}>
                        <Text style={styles.titlePanel}>{this.state.stageName}</Text>
                    </View>

                </View>

                <View style={styles.buttonPanel}>
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate('ModifyMyInfo',{stageName: this.state.stageName, sourceUrl: this.state.sourceUrl});}}
                    >
                        <View style={styles.modifyButton}>
                            <Text style={{
                                fontSize:16,
                                color:'white'
                            }}>
                                修改信息
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            

            </View>
        )


    }



}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        backgroundColor:'whitesmoke'
    },
    avaterPanel:{
        width: allWidth,
        height: 80,
        marginTop:1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    
    namePanel:{
        width: allWidth,
        height: 60,
        marginTop:4,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    titlePanel:{
        fontSize:16,
        marginLeft: 20,
    },
    secondPanel:{
        width: allWidth*0.4,
        height:60,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    thirdPanel:{
        
        width: allWidth*0.39,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonPanel:{
        marginTop: 20,
        width: allWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modifyButton:{
        width: allWidth*0.85,
        backgroundColor: '#55ACEE',
        height: 40,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center'
    }
})