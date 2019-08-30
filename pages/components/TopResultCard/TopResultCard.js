import React from 'react';
import {Button, View, Text} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';

const allWidth = Dimensions.get('window').width;

export default class TopResultCard extends React.Component{

    constructor(props){
        super(props);
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
                      
                  </View>
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
        height:151,

    },
    contentPanel:{
        marginTop:20,
        marginLeft:allWidth*0.05,
        flexDirection: 'row'
    },
});
