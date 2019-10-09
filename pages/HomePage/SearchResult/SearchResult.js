import React from 'react';
import {Button, View, Text} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import ResultCard from '../../components/ResultCard/ResultCard';
import TopResultCard from '../../components/TopResultCard/TopResultCard';
import global from '../../Global';


const allWidth = Dimensions.get('window').width;



export default class SearchResult extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:'',
            shopList:[],
            foodList:[],
            activityList:[]
        }
    }

    componentDidMount(): void {

        let _this = this;

        this.state.searchText = this.props.navigation.state.params.searchText;


        //进行搜索
        fetch(global.baseUrl+'/search/info/all?page=0&limit=10&key='+this.state.searchText,{
            method:'get',
            headers:{
                Authorization: 'Bearer '+global.token
            },
        }).then((response)=>response.json())
            .then((res)=>{
                console.log(res.data);
                _this.setState({
                    shopList:res.data.shopList,
                    activityList: res.data.activityList,
                    foodList:res.data.foodList
                })
            }).catch((err)=>{
                console.log(err);
        })

    }

    static navigationOptions={
        header:null
    };

    render(){


        //商铺列表
        let shopListItems = [];
        let shopList = this.state.shopList;

        for(let i = 0; i < shopList.length; i++){
            if(i!==shopList.length-1){
                shopListItems.push(
                    <TopResultCard shop={shopList[i]} key={shopList[i].id}/>
                );
            }else{
                shopListItems.push(
                    <TopResultCard shop={shopList[i]} isLast={'yes'} key={shopList[i].id}/>
                );
            }
        }


        //美食列表
        let foodListItems = [];
        let foodList = this.state.foodList;
        foodList.forEach((item)=>{

            foodListItems.push(
                <ResultCard title={item.title} soldNum={item.soldNum} price={item.price} avater={item.avater} key={item.id} />
            )
        });






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
                        <Text
                            style={{

                            }}
                        >
                            {this.state.searchText}
                        </Text>

                    </View>
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
                </View>
                <View
                    style={{
                        marginTop:20
                    }}
                >
                    {shopListItems}
                </View>
                <View
                    style={{
                        width:allWidth,
                        height:13,
                        backgroundColor:'whitesmoke'
                    }}
                >

                </View>
                <View
                    style={{
                        marginTop:10,
                    }}
                >
                    {foodListItems}
                </View>

            </View>
        );
    }

}


const inputHeight = 32;


const styles = StyleSheet.create({
    searchPanel:{
        marginTop:40,
        width: allWidth,
        height:inputHeight,
        justifyContent: 'center',
        alignItems: 'center',

        flexDirection:'row'
    },
    leftInputPanel:{
        width:allWidth*0.77,
        height:inputHeight,
        backgroundColor:'whitesmoke',
        borderRadius:20,
        justifyContent:'center',
        paddingLeft:10
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
