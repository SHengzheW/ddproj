import React from 'react';
import {View, Text, Button, StyleSheet, TextInput, Picker, Modal, TouchableHighlight, TouchableOpacity, Dimensions} from 'react-native';
import {PickerView} from '@ant-design/react-native';
import PickerWidget from '../components/PickerWidget/PickerWidget';


const seasons = [
    [
        {
            label: '2013',
            value: '2013',
        },
        {
            label: '2014',
            value: '2014',
        },
    ],
    [
        {
            label: '春',
            value: '春',
        },
        {
            label: '夏',
            value: '夏',
        },
    ],
];


const {maxWidth, maxHeight} = Dimensions.get('window');


/*
    显示性别的组件
 */
function ShowGender(props){
    if(!props.gender){
        return <Text style={{
            color:'lightgray',
            fontSize: 16
        }}>请选择性别</Text>
    }else{
        return <Text style={{
            color:'#333',
            fontSize: 16
        }}>{props.gender}</Text>
    }
}


function ShowYear(props){
    if(!props.enterYear){
        return <Text style={{
            color:'lightgray',
            fontSize: 16
        }}>请选择性别</Text>
    }else{
        return <Text style={{
            color:'#333',
            fontSize: 16
        }}>{props.enterYear}</Text>
    }
}


class YearItems extends React.Component{
    render(){
        const time = new Date();
        let years = [];
        var renderItems = [];
        for (let i = 0; i < 20; i++){
            years.push({value:time.getFullYear()-i});
        }
        years.forEach((item)=>{
            renderItems.push(
                <Picker.Item value={item.value} label={item.value} />
            )
        });

        return {renderItems};


    }
}



export default class FinishResume extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            gender:'',
            enterYear:'',
            nameColor:'lightgray',
            genderColor:'lightgray',
            enterYearColor:'lightgray',
            introduction:'',
            introductionColor:'lightgray',
            showModal:false,
            showYearModal:false,
            language:''
        }
    }

    onChange = (value: any) => {
        this.setState({
            value,
        });
    };

    static navigationOptions={
        title:'个人简历'
    };




    render(){

        return(
            <View style={styles.container}>
                {
                    /*用于选择性别的选择框*/
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showModal}

                >
                    <View
                        style={{
                            flex:1,
                            justifyContent:'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{

                                alignItems:'center',
                                height:300,
                                width: maxWidth,

                            }}
                        >
                            <TouchableHighlight
                                onPress={() => {
                                    this.setState({showModal:!this.state.showModal});
                                }}>
                                <Text style={{
                                    fontSize:16,
                                    color:'#55ACEE'
                                }}>确定</Text>
                            </TouchableHighlight>

                            <Picker
                                selectedValue={this.state.gender}
                                style={{ height: 50, width:300 }}
                                onValueChange={(itemValue, itemIndex) => {

                                    this.setState({
                                        gender: itemValue,
                                        genderColor:'#333'
                                    })}}>
                                <Picker.Item label="男" value="男" />
                                <Picker.Item label="女" value="女" />
                            </Picker>
                        </View>
                    </View>
                </Modal>

                {
                    /*
                    选择入学时间
                     */
                }

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showYearModal}

                >
                    <View
                        style={{
                            flex:1,
                            justifyContent:'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{

                                alignItems:'center',
                                height:300,
                                width: maxWidth,

                            }}
                        >
                            <TouchableHighlight
                                onPress={() => {
                                    this.setState({showYearModal:!this.state.showYearModal});
                                }}>
                                <Text style={{
                                    fontSize:16,
                                    color:'#55ACEE'
                                }}>确定</Text>
                            </TouchableHighlight>

                            <Picker
                                selectedValue={this.state.enterYear}
                                style={{ height: 50, width:300 }}
                                onValueChange={(itemValue, itemIndex) => {

                                    this.setState({
                                        enterYear: itemValue,
                                        enterYearColor:'#333'
                                    })}}>
                                <YearItems />
                            </Picker>
                        </View>
                    </View>
                </Modal>



                {
                    /*
                        下方输入框
                     */
                }
                <View style={styles.topImagePanel}>
                    <View style={styles.imagePanel}>
                    </View>
                </View>


                {
                    /*
                        输入姓名
                     */

                }
                <View style={styles.formPanel}>
                    <View>
                        <TextInput
                            // style={styles.inputStyle}
                            placeholder='请输入姓名'
                            style={{color:this.state.nameColor,
                                borderColor:this.state.nameColor,
                                height: 40,
                                width:320,
                                fontSize: 16,
                                borderWidth: 1,
                                borderTopColor: '#fff',
                                borderLeftColor: '#fff',
                                borderRightColor: '#fff'}}
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



                    {
                        /*
                            选择性别
                         */
                    }

                    <View style={{
                        marginTop:28
                    }}>
                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({
                                    showModal:true
                                })
                            }}
                        >
                        <View
                            style={{color:this.state.genderColor,
                                borderColor:this.state.genderColor,
                                height: 40,
                                width:320,
                                fontSize: 16,
                                borderWidth: 1,
                                borderTopColor: '#fff',
                                borderLeftColor: '#fff',
                                borderRightColor: '#fff',
                                justifyContent:'center'
                            }}

                        >
                            <ShowGender gender={this.state.gender}></ShowGender>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop:28
                    }}>
                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({
                                    showYearModal:true
                                })
                            }}
                        >
                            <View
                                style={{color:this.state.enterYearColor,
                                    borderColor:this.state.enterYearColor,
                                    height: 40,
                                    width:320,
                                    fontSize: 16,
                                    borderWidth: 1,
                                    borderTopColor: '#fff',
                                    borderLeftColor: '#fff',
                                    borderRightColor: '#fff',
                                    justifyContent:'center'
                                }}

                            >
                                <ShowYear enterYear={this.state.enterYear}></ShowYear>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={styles.buttonPanel}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate('HomePage');
                        }}
                    >
                        <View style={styles.confirmButton}>
                            <Text style={{
                                fontSize: 16,
                                color:'white'
                            }}>提交审核</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate('HomePage');
                        }}
                    >
                        <View style={styles.briefButton}>
                            <Text style={{
                                fontSize: 16,
                                color:'#333'
                            }}>查看简历模板</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    topImagePanel:{
        marginTop:20
    },
    imagePanel:{
        width:88,
        height:88,
        borderRadius: 44,
        backgroundColor: '#55acee',
        overflow:'hidden'
    },
    formPanel:{
        marginTop: 40,

    },
    inputPanel:{
        width:280,

    },
    buttonPanel:{
        marginTop: 30
    },
    confirmButton:{
        width:320,
        height:40,
        borderRadius: 5,
        backgroundColor: '#55acee',
        alignItems:'center',
        justifyContent:'center'
    },
    briefButton:{
        marginTop: 20,
        width:320,
        height:40,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        alignItems:'center',
        justifyContent:'center'
    }
});


