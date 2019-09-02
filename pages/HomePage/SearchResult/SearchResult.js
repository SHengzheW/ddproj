import React from 'react';
import {Button, View, Text} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import ResultCard from '../../components/ResultCard/ResultCard';
import TopResultCard from '../../components/TopResultCard/TopResultCard';



const allWidth = Dimensions.get('window').width;



export default class SearchResult extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    static navigationOptions={
        header:null
    };

    render(){


        return(
            <View
                style={{

                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:''
                }}
            >
                <View
                    style={styles.searchPanel}
                >
                    <View
                        style={styles.leftInputPanel}
                    >

                    </View>
                    <Text
                        style={{
                            color:'#55555',
                            fontSize:14,
                            marginLeft:9
                        }}

                        onPress={()=>{
                            this.props.navigation.goBack();
                        }}
                    >
                        取消
                    </Text>
                </View>
                <View
                    style={{
                        marginTop:20
                    }}
                >

                    <TopResultCard/>
                    <TopResultCard isLast={'yes'}/>

                </View>
                <View
                    style={{
                        width:allWidth,
                        height:13,
                        backgroundColor:'whitesmoke'
                    }}
                >

                </View>
                <View
                    style={{
                        marginTop:10,
                    }}
                >

                    <ResultCard/>

                </View>

            </View>
        );
    }

}


const inputHeight = 32;


const styles = StyleSheet.create({
    searchPanel:{
        marginTop:40,
        width: allWidth,
        height:inputHeight,
        justifyContent: 'center',
        alignItems: 'center',

        flexDirection:'row'
    },
    leftInputPanel:{
        width:allWidth*0.77,
        height:inputHeight,
        backgroundColor:'whitesmoke',
        borderRadius:20
    },
    optionsPanel:{
        marginTop: 25,
        width:allWidth*0.83,


    },
    options:{
        marginTop: 14,
        flexDirection: 'row'
    }
});
