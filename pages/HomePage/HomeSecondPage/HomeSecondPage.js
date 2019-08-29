import React from 'react';
import {View, Text, Button} from 'react-native';



export default class HomeSecondPage extends React.Component{
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
                <Button title="校园生活" onPress={this.naviNext()}/>
            </View>
        )
    }
}
