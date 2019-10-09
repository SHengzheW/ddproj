import React from 'react';
import {View, Button, Text,  Dimensions, Image} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';




export default class SeeResume extends React.Component{
    constructor(props){
        super(props);


        this.state={

        }
    }


    static navigationOptions = {
        header:null
    };


    componentDidMount(): void {
    }



    render(){
        return(
            <View
                style={styles.container}
            >
                <View
                    style={{
                        width: Dimensions.get('window').width,
                        height: 50,
                        // backgroundColor:'#000',
                        marginTop: 40,
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
                                    source={require('../images/方向-左.png')}
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
                                简历预览
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

                <View
                    style={{
                        marginTop: 20,
                        width: allWidth,
                        height: 168,
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            width: 64,
                            height: 64,
                            backgroundColor: 'blue',
                            borderRadius: 32
                        }}
                    >

                    </View>

                    <View
                        style={{
                            width:64,
                            height:20,
                            justifyContent:'center',
                            alignItems:'center',
                            marginTop: 16
                        }}
                    >
                        <Text
                            style={{
                                fontSize:14,
                                color:'#333',
                                fontWeight: 'bold',

                            }}
                        >
                            叮当 女
                        </Text>
                    </View>

                </View>


            </View>

        );
    }


}

const allWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    topBar:{
        width: allWidth,
        height: 50,
        marginTop: 40,
        flexDirection:'row',

    }

});
