import React from 'react';
import {Button, View, Text} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';



const allWidth = Dimensions.get('window').width;



export default class SearchPage extends React.Component{

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
                style={styles.optionsPanel}
              >
                  <Text
                      style={{
                          color:'#999',
                          fontSize:14
                      }}
                  >热门搜索
                  </Text>

                  <View
                    style={styles.options}
                  >
                      <View
                        style={{
                            backgroundColor:'whitesmoke',
                            height:33,
                            paddingLeft:14,
                            paddingRight:14,
                            justifyContent:'center',
                            borderRadius: 16,
                            marginRight:5
                        }}
                      >
                          <Text

                              onPress={()=>{
                                  this.props.navigation.navigate('SearchResult');
                              }}
                            style={{
                                color:'black',
                                fontSize:14
                            }}
                          >
                            酸菜鱼
                          </Text>
                      </View>


                      <View
                          style={{
                              backgroundColor:'whitesmoke',
                              height:33,
                              paddingLeft:14,
                              paddingRight:14,
                              justifyContent:'center',
                              borderRadius: 16,
                          }}
                      >
                          <Text
                              style={{
                                  color:'black',
                                  fontSize:14
                              }}
                          >
                              酸菜鱼加面条
                          </Text>
                      </View>

                  </View>


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
