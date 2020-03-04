import React from 'react';
import {View, Text,Image, Button, StyleSheet, TextInput, Picker, ScrollView, Modal, TouchableHighlight, TouchableOpacity, Dimensions} from 'react-native';
import {PickerView, TextareaItem} from '@ant-design/react-native';
import PickerWidget from '../components/PickerWidget/PickerWidget';
import global from '../Global';



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


function ShowProfession(props){
    if(!props.profession){
        return <Text style={{
            color:'lightgray',
            fontSize: 16
        }}>请选择专业</Text>
    }else{
        return <Text style={{
            color:'#333',
            fontSize: 16
        }}>{props.profession}</Text>
    }
}


function ShowYear(props){
    if(!props.enterYear){
        return <Text style={{
            color:'lightgray',
            fontSize: 16
        }}>请选择入学年份</Text>
    }else{
        return <Text style={{
            color:'#333',
            fontSize: 16
        }}>{props.enterYear}</Text>
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
            language:'',
            telephone: '',
            telephoneColor:'lightgray',
            profession:'',
            professionColor:'lightgray',
            showProfessionModal:false,
            professionList:['软件工程','人力资源管理','计算机科学与技术'],

        }
    }

    componentDidMount(): void {
        let _this = this;
        /*获取所有主修专业列表*/
        fetch(global.baseUrl+'/user/profession/title',{
            method:'get',
            headers:{
                Authorization : 'Bearer ' + global.token
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                
                console.log(responseJson.data.professionList);

                this.setState({
                    professionList : responseJson.data.professionList
                });
                // this.setState({
                //     profession: this.state.professionList[0]
                // });
            }).catch((error)=>{
                console.log(error);
        })
    }

    onChange = (value: any) => {
        this.setState({
            value,
        });
    };

    static navigationOptions={
        header: null
    };




    render(){

        {/*展示入学年份*/}
        const time = new Date();
        let years = [];
        let renderItems = [];
        for (let i = 0; i < 20; i++){
            years.push({value: time.getFullYear()-i});
        }
        renderItems.push(
            <Picker.Item value={""} label="请选择" key={-2}/>
        )
        years.forEach((item)=>{
            renderItems.push(
                <Picker.Item value={item.value} label={item.value.toString()} key={item.value}/>
            )
        });


        {/*展示主修专业列表*/}
        let professionItems = [];
        let professions = this.state.professionList;
        professionItems.push(
            <Picker.Item value={""} label="请选择专业" key={-1} />
        )
        professions.forEach((item)=>{
           professionItems.push(
               <Picker.Item value={item} label={item} key={item}/>
           )
        });



        return(
            <View style={styles.container}>
                {

                    /**
                     * 用于选择性别的选择框
                     * */
                }
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.showModal}
                    style={{
                        width: Dimensions.get('window').width,
                        height: 400
                    }}

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
                                <Picker.Item label="请选择" value=""/>
                                <Picker.Item label="男" value="男" />
                                <Picker.Item label="女" value="女" />
                            </Picker>
                        </View>
                    </View>
                </Modal>

                {
                    /**
                    选择入学时间
                     */
                }

                <Modal
                    animationType="slide"
                    transparent={false}
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
                                {renderItems}
                            </Picker>
                        </View>
                    </View>
                </Modal>


                {
                    /*
                    选择主修专业
                     */
                }

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.showProfessionModal}

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
                                    this.setState({showProfessionModal:!this.state.showProfessionModal});
                                }}>
                                <Text style={{
                                    fontSize:16,
                                    color:'#55ACEE'
                                }}>确定</Text>
                            </TouchableHighlight>

                            <Picker
                                selectedValue={this.state.profession}
                                style={{ height: 50, width:300 }}
                                onValueChange={(itemValue, itemIndex) => {

                                    this.setState({
                                        profession: itemValue,
                                        professionColor:'#333'
                                    })}}>
                                {professionItems}
                            </Picker>
                        </View>
                    </View>
                </Modal>


                {/*

                    顶部导航栏

                */}
                <View
                    style={{
                        width: Dimensions.get('window').width,
                        height: 50,
                        // backgroundColor:'#000',
                        marginTop: 1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            width: Dimensions.get('window').width*0.9,
                            height: 25,
                            flexDirection:'row'
                        }}
                    >
                        <View
                            style={{
                                width: 35,
                                height:24,
                            }}
                        >
                            <TouchableOpacity
                                onPress={()=>{
                                    this.props.navigation.goBack();
                                }}
                            >
                                <Image
                                    source={require('../images/方向-左.png')}
                                    style={{
                                        width:24,
                                        height:24,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: Dimensions.get('window').width*0.9-70,
                                height: 24,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',

                                }}
                            >
                                个人简历
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 35,
                                height: 24,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:17,
                                    color:'#b8b8b8',
                                }}
                            >
                                跳过
                            </Text>

                        </View>


                    </View>
                </View>


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
                <ScrollView style={styles.formPanel}>
                    <View>
                        <TextInput
                            // style={styles.inputStyle}
                            placeholder='请输入姓名'
                            style={{color:this.state.nameColor,
                                borderColor:this.state.nameColor,
                                height: 40,
                                width:320,
                                fontSize: 16,
                                borderWidth: 0,
                                borderBottomWidth: 1,
                                opacity:0.5,
                                borderTopColor: '#fff',
                                borderLeftColor: '#fff',
                                borderRightColor: '#fff',
                                }}
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


                    {/*常用电话*/}
                    <View
                        style={{
                            marginTop: 28
                        }}
                    >
                        <TextInput
                            // style={styles.inputStyle}
                            placeholder='请输入常用电话'
                            style={{color:this.state.telephoneColor,
                                borderColor:this.state.telephoneColor,
                                height: 40,
                                width:320,
                                fontSize: 16,
                                borderWidth: 0,
                                borderBottomWidth: 1,
                                opacity:0.5,
                                borderTopColor: '#fff',
                                borderLeftColor: '#fff',
                                borderRightColor: '#fff',
                            }}
                            onChangeText={(telephone) => {
                                if(telephone) {
                                    this.setState({
                                        telephone:telephone,
                                        telephoneColor:'#333'
                                    })
                                }else{
                                    this.setState({
                                        telephone:'',
                                        telephoneColor:'lightgray'
                                    })
                                }
                            }}
                            onFocus={()=>{
                                this.setState({
                                    telephoneColor:'#333'
                                })
                            }}
                            value={this.state.telephone}
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
                                borderWidth: 0,
                                borderBottomWidth: 1,
                                borderTopColor: '#fff',
                                borderLeftColor: '#fff',
                                borderRightColor: '#fff',
                                justifyContent:'center',

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
                                    borderWidth: 0,
                                    borderBottomWidth: 1,
                                    borderTopColor: '#fff',
                                    borderLeftColor: '#fff',
                                    borderRightColor: '#fff',
                                    justifyContent:'center',

                                }}

                            >
                                <ShowYear enterYear={this.state.enterYear}></ShowYear>
                            </View>
                        </TouchableOpacity>

                    </View>

                    {
                        /*
                            选择专业
                         */
                    }

                    <View style={{
                        marginTop:28
                    }}>
                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({
                                    showProfessionModal:true
                                })
                            }}
                        >
                            <View
                                style={{color:this.state.professionColor,
                                    borderColor:this.state.professionColor,
                                    height: 40,
                                    width:320,
                                    fontSize: 16,
                                    borderWidth: 0,
                                    borderBottomWidth: 1,
                                    borderTopColor: '#fff',
                                    borderLeftColor: '#fff',
                                    borderRightColor: '#fff',
                                    justifyContent:'center',

                                }}

                            >
                                <ShowProfession profession={this.state.profession}></ShowProfession>
                            </View>
                        </TouchableOpacity>


                        {/*个人简介*/}


                    </View>


                    <View
                        style={{
                            marginTop:28
                        }}
                    >
                        <TextareaItem
                            placeholder={'请输入个人简介'}
                            style={{
                                color:this.state.introductionColor,
                                borderColor:this.state.introductionColor,
                                width: 320,
                                fontSize: 16,
                                borderWidth: 0,
                                borderBottomWidth: 1,
                                opacity:0.5,
                                borderTopColor: '#fff',
                                borderLeftColor: '#fff',
                                borderRightColor: '#fff',
                                paddingLeft:0
                            }}
                            rows={4}
                            count={500}
                            onChangeText={(introduction) => {
                                if(introduction) {
                                    this.setState({
                                        introduction:introduction,
                                        introductionColor:'#333'
                                    })
                                }else{
                                    this.setState({
                                        introduction:'',
                                        introductionColor:'lightgray'
                                    })
                                }
                            }}
                            onFocus={()=>{
                                this.setState({
                                    introductionColor:'#333'
                                })
                            }}
                            value={this.state.introduction}
                        />
                    </View>

                    {/*
                    固定按钮栏
                */}
                    <View style={styles.buttonPanel}>
                        <TouchableOpacity
                            onPress={()=>{
                                let _this = this;
                                let resumeData = {
                                    name : this.state.name,
                                    gender : this.state.gender === '男' ? 0 : 1,
                                    grade : this.state.enterYear,
                                    profession : this.state.profession,
                                    telephone : this.state.telephone,
                                    detail : this.state.introduction
                                };

                                fetch(global.baseUrl+'/user/info',{
                                    method:'put',
                                    mode:'cors',
                                    headers:{
                                        'Content-Type' : 'application/json',
                                        Authorization : 'Bearer '+global.token
                                    },
                                    body: JSON.stringify(resumeData)
                                }).then((response)=>response.json())
                                    .then((responseJson)=>{
                                       console.log(responseJson);
                                       _this.props.navigation.navigate('HomePage')
                                    }).catch((error)=>{
                                        console.log(error);
                                })


                                // this.props.navigation.navigate('HomePage');
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
                                this.props.navigation.navigate('SeeResume');
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


                </ScrollView>








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


