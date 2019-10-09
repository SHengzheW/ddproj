import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';

const allWidth = Dimensions.get('window').width;

const cardHeight = 60;

const leftWhiteSpace = 10;

const contentWidth=allWidth-2*leftWhiteSpace;

function BottomLine(props) {
    if(props.isLast==='yes'){
        return <View/>
    }else{
            return (<View
                style={{
                    marginTop:3,
                    width:contentWidth-40,
                    height:1,
                    backgroundColor:'#d8d8d8'
                }}
            >
            </View>);
    }


}


export default class TopResultCard extends React.Component{

    constructor(props){
        super(props);

        this.state={
            imgUrl:require('../../images/厦饭.jpg'),
            shopName:"厦饭酸菜鱼世贸双子塔店",
            distance:"333",
            isLast:this.props.isLast,
            shop : props.shop
        }
    }

    render(){
        return(
          <View
            style={styles.cardContainer}
          >
              <View
                style={styles.card}
              >
                  <View
                    style={styles.contentPanel}
                  >
                      <View
                        style={{
                            width:57,
                            height:40,

                        }}
                      >
                          <Image
                              source={this.state.imgUrl}
                              style={{
                                  width:57,
                                  height:40
                              }}
                          />
                      </View>
                      <View
                        style={{
                            marginLeft: 10,
                            width: 190
                        }}
                      >
                          <Text
                            style={{
                                fontSize:12,
                                color:'#333'
                            }}
                          >
                              {this.state.shop.title}
                          </Text>
                          <View
                            style={{
                                marginTop:2
                            }}
                          >
                              <Text
                                style={{
                                    fontSize:9,
                                    color:'#999',

                                }}
                              >
                                  距离您{this.state.distance}米

                              </Text>
                          </View>

                      </View>

                      <View
                        style={{
                            width:contentWidth-277,
                            alignItems: 'flex-end',

                        }}
                      >
                          <Image
                            source={require('../../images/更多.png')}
                            style={{
                                width:17,
                                height:17,
                                marginTop: 7,
                            }}
                          />
                      </View>

                  </View>

              </View>
              <View
                  style={{
                      width:allWidth,
                      height:7,
                      alignItems:'center',

                  }}
              >
                  <BottomLine isLast={this.state.isLast}/>
              </View>
          </View>
        );
    }
}






const styles = StyleSheet.create({
    cardContainer:{
        width:allWidth,
        alignItems:'center'
    },
    card:{
        width:allWidth*0.95,
        height:cardHeight,

    },
    contentPanel:{
        marginTop:10,
        marginLeft:10,
        width: contentWidth,
        flexDirection: 'row'
    },
});
