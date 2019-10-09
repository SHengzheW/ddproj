import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Image, Button} from 'react-native';




export default class ShopCard extends React.Component{

    constructor(props){
        super(props);

        this.state={
            imgUrl:require('../../images/厦饭.jpg'),
            shopName:props.name,
            distance:'333'
        }

    }


    render(){
        return(
            <View style={styles.cardContainer}>
                <Image
                    source={this.state.imgUrl}
                    style={styles.cardBanner}
                />
                <View style={styles.titlePanel}>
                    <Text
                        style={{
                            fontSize:12
                        }}
                    >
                        {this.state.shopName}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 4
                    }}
                >
                    <Text
                        style={{
                            fontSize:9,
                            color:'#999'
                        }}
                    >
                        距离您{this.state.distance}米
                    </Text>
                </View>




            </View>
        )
    }

}


const styles = StyleSheet.create({
    cardContainer:{
        width:127,
        height:141,
        overflow:'hidden',
        marginRight:10
    },
    cardBanner:{
        width: 127,
        height:95,
        borderRadius:6,

    },
    titlePanel:{
        marginTop:12
    }
});
