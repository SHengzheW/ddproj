import React from 'react';
import {View, Text, Button, Dimensions, Image, StyleSheet} from 'react-native';
import SchoolActCard from '../../components/SchoolActCard/SchoolActCard';
import ActCard from '../../components/ActCard/ActCard';
import global from '../../Global';


const allWidth= Dimensions.get('window').width;

const useWidth = allWidth * 0.9


export default class HomeSecondPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            schoolActList : []
        }
    }


    componentDidMount() {
        fetch(global.baseUrl+'/summary/activity',{
            method : 'GET',
            headers:{
                Authorization : 'Bearer '+global.token
            },
        }).then((response)=>response.json())
            .then((res)=>{
                console.log(res.data);
            })
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
                            width:useWidth,
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
                    width:useWidth,
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
        marginTop: global.useMarginTop,
        width:useWidth,
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
        width: useWidth,
        height:110,
        backgroundColor:'whitesmoke',
        marginTop: 10
    },
    todayEat:{
        width:useWidth,
        alignItems:'flex-start',
        marginTop: 20
    },
    eatTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    shopPanel:{
        width: useWidth,
        marginTop: 16,
        justifyContent:'flex-start',
        flexDirection:'row'

    },
    activitiesPanel:{
        marginTop: 32,
        width: useWidth,
        justifyContent:'flex-start'
    }
});
