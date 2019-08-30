import React from 'react';
import {View, Text, Button, Dimensions, Image, StyleSheet} from 'react-native';
import SchoolActCard from '../../components/SchoolActCard/SchoolActCard';
import ActCard from '../../components/ActCard/ActCard';


const {allWidth, allHeight} = Dimensions.get('window');


export default class HomeSecondPage extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={{
                width: allWidth,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={styles.searchPanel}>
                    <Text
                        style={styles.searchText}
                    >搜索校园活动</Text>
                </View>

                <View
                    style={styles.banner}
                >
                    <Image
                        style={{
                            width:330,
                            height:110
                        }}
                        source={require('../../images/Banner.jpg')}
                    />
                </View>

                <View style={styles.todayEat}>
                    <Text
                        style={styles.eatTitle}
                    >热门活动</Text>
                </View>

                <View style={{
                    width:330,
                    marginTop: 22

                }}>
                    <SchoolActCard/>

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    searchPanel:{
        marginTop: 40,
        width:330,
        height:32,
        backgroundColor: 'whitesmoke',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'

    },
    searchText:{
        fontSize:15,
        color:'#555'
    },
    banner:{
        width:330,
        height:110,
        backgroundColor:'whitesmoke',
        marginTop: 10
    },
    todayEat:{
        width:330,
        alignItems:'flex-start',
        marginTop: 20
    },
    eatTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    shopPanel:{
        width: 330,
        marginTop: 16,
        justifyContent:'flex-start',
        flexDirection:'row'

    },
    activitiesPanel:{
        marginTop: 32,
        width: 330,
        justifyContent:'flex-start'
    }
});
