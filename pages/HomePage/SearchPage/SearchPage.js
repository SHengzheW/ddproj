import React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import global from '../../Global';



const allWidth = Dimensions.get('window').width;




function keywords() {


}



export default class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            keywords : [],
            keywordsItems : [],
            text:''
        }
    }

    static navigationOptions={
        header:null
    };


    componentDidMount(){
        let _this = this;

        //获取所有搜索关键词
        fetch(global.baseUrl+'/keywords/all',{
            method:'GET',
            headers:{
                Authorization:'Bearer '+global.token
            }
        }).then((response)=>response.json())
            .then((res)=>{
                console.log(res.data);
                _this.setState({
                    keywords : res.data.keywordsList
                });

            }).catch((error)=>{
                console.log(error);
        });

    }

    render(){


        let keywords = this.state.keywords;
        let keywordsItems = [];
        keywords.forEach((item)=>{
            keywordsItems.push(
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

                    key={item}
                >
                    <Text

                        onPress={()=>{
                            this.props.navigation.navigate('SearchResult',{searchText:item});
                        }}
                        style={{
                            color:'black',
                            fontSize:14
                        }}
                    >
                        {item}
                    </Text>
                </View>

            )
        });



        let item1 = [];
        if(!this.state.text){
            item1.push(
                <Text
                    style={{
                        color:'#555',
                        fontSize:14,
                        marginLeft:9
                    }}

                    onPress={()=>{
                        this.props.navigation.goBack();
                    }}
                >
                    取消
                </Text>
            )
        }else{
            item1.push(
                <Text
                    style={{
                        color:'#555',
                        fontSize:14,
                        marginLeft:9
                    }}

                    onPress={()=>{
                        this.props.navigation.navigate('SearchResult',{searchText:this.state.text});
                    }}
                >
                    搜索
                </Text>
            )
        }




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
                    <TextInput
                        style={{height: 32, paddingLeft: 20}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>

                  {item1}

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
                      {keywordsItems}

                  </View>


              </View>
          </View>
        );
    }

}


const inputHeight = 32;


const styles = StyleSheet.create({
   searchPanel:{
       marginTop:global.useMarginTop,
       width: allWidth,
       height:inputHeight,
       justifyContent: 'center',
       alignItems: 'center',

       flexDirection:'row'
   },
    leftInputPanel:{
       width:allWidth*0.85,
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
