import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native';

// the log in page

export default class HomeMyInfo extends React.Component{
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
                <Button title="我的信息" onPress={this.naviNext()}/>
            </View>
        )
    }
}



