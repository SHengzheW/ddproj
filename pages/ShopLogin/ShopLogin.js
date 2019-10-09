import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity} from 'react-native';



export default class ShopLogin extends React.Component{
    constructor(props){
        super(props);


        this.state={
            name:'',
            nameColor:'lightgray',
            password:'',
            passwordColor:'lightgray'
        }
    }

    static navigationOptions = {
      header: null
    };

    componentDidMount(): void {
    }


    render(){
        return(
          <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.goBack();
                    }}
                >
                    <Image
                        source={require('../images/方向-左.png')}
                        style={{
                            width: 24,
                            height: 24,
                            marginLeft: 15
                        }}
                    />
                </TouchableOpacity>
            </View>

              <View style={styles.mainContent}>
                <Text
                    style={{
                        fontSize: 24,
                        color:'#333',
                        fontWeight: 'bold'
                    }}
                >
                    商家登录
                </Text>

                  <View
                    style={{
                        marginTop: 32
                    }}
                  >
                      <TextInput
                          // style={styles.inputStyle}
                          placeholder='请输入姓名'
                          style={{color:this.state.nameColor,
                              borderColor:this.state.nameColor,
                              height: 40,
                              width:allWidth*0.8,
                              fontSize: 14,
                              borderWidth: 1,
                              borderTopColor: '#fff',
                              borderLeftColor: '#fff',
                              borderRightColor: '#fff',
                          }}
                          onChangeText={(name) => {
                              if(name) {
                                  this.setState({
                                      name:name,
                                      nameColor:'#333'
                                  })
                              }else{
                                  this.setState({
                                      name:'',
                                      nameColor:'lightgray'
                                  })
                              }
                          }}
                          onFocus={()=>{
                              this.setState({
                                  nameColor:'#333'
                              })
                          }}
                          value={this.state.name}
                      />
                  </View>


                  <View
                      style={{
                          marginTop: 20
                      }}
                  >
                      <TextInput
                          // style={styles.inputStyle}
                          placeholder='请输入密码'
                          style={{color:this.state.passwordColor,
                              borderColor:this.state.passwordColor,
                              height: 40,
                              width:allWidth*0.8,
                              fontSize: 14,
                              borderWidth: 1,
                              borderTopColor: '#fff',
                              borderLeftColor: '#fff',
                              borderRightColor: '#fff',
                          }}
                          onChangeText={(name) => {
                              if(name) {
                                  this.setState({
                                      password:password,
                                      passwordColor:'#333'
                                  })
                              }else{
                                  this.setState({
                                      password:'',
                                      passwordColor:'lightgray'
                                  })
                              }
                          }}
                          onFocus={()=>{
                              this.setState({
                                  passwordColor:'#333'
                              })
                          }}
                          value={this.state.password}
                      />
                  </View>


                  <View
                    style={{
                        width: allWidth * 0.8,
                        height: 40,
                        flexDirection:'row',
                        marginTop: 15
                    }}
                  >
                      <View
                        style={{
                            width: allWidth*0.8*0.5,
                            alignItems:'flex-start'
                        }}
                      >
                          <Text
                              style={{
                                  fontSize:13,
                                  color:'#666'
                              }}
                          >
                              忘记密码
                          </Text>

                      </View>
                      <View
                        style={{
                            width: allWidth*0.8*0.5,
                            alignItems:'flex-end'
                        }}
                      >
                          <Text
                            style={{
                                fontSize:13,
                                color:'#666'
                            }}
                          >
                            还未入驻，希望合作
                          </Text>
                      </View>

                  </View>
                  <TouchableOpacity
                      onPress={()=>{
                          this.props.navigation.navigate('ShopClient');
                      }}
                  >
                      <View
                        style={{
                            width: allWidth*0.8,
                            height: 44,
                            backgroundColor:'#55acee',
                            alignItems:'center',
                            justifyContent: 'center',
                            borderRadius: 5
                        }}
                      >
                          <Text
                            style={{
                                fontSize: 16,
                                color:'#fff'
                            }}
                          >
                              登录
                          </Text>

                      </View>
                  </TouchableOpacity>

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
       alignItems: 'center',
       backgroundColor:'#fff'
   },
    topBar:{
       width: allWidth,
        height: 40,
        marginTop: 50,
    },
    mainContent:{
       width: allWidth*0.8,
        height:200,
        marginTop:13,
        alignItems: 'flex-start'
    }
});
