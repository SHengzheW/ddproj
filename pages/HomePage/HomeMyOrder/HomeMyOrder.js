import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native';

// the log in page

export default class HomeMyOrder extends React.Component{
    constructor(props){
        super(props);
    }

    naviNext(){
        // this.props.navigation.navigate('')
    }


    render(){
        return(
            <View style={{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Text>商品首页</Text>
                <Button title="我的订单" onPress={this.naviNext()}/>
            </View>
        )
    }
}



