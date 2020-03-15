import React from 'react';
import {View, Text,Image, Button, StyleSheet, TextInput, Picker, ScrollView, Modal, TouchableHighlight, TouchableOpacity, Dimensions, Alert} from 'react-native';
import global from '../../../Global';
import ImagePicker from 'react-native-image-picker';



const {maxWidth, maxHeight} = Dimensions.get('window');


export default class ModifyMyInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.navigation.state.params.stageName,
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
            avatarSource: this.props.navigation.state.params.sourceUrl,
            telephoneOpacity: 0.5,
            introductionOpacity: 0.5,
            nameOpacity: 0.5,
            

        }
    }

    reviewResume(){


    }


    selectPhotoTapped() {
        const options = {
            title: '选择图片', 
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照', 
            chooseFromLibraryButtonTitle: '选择照片', 
            customButtons: [
                {name: 'fb', title: 'Choose Photo from Facebook'},
              ],
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high', 
            durationLimit: 10, 
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8, 
            angle: 0,
            allowsEditing: false, 
            noData: false,
            storageOptions: {
                skipBackup: true  
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }



    componentDidMount() {
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

    onChange = (value) => {
        this.setState({
            value,
        });
    };

    static navigationOptions={
        header: null
    };




    render(){

    

        return(
            <View style={styles.container}>
                
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
                                    source={require('../../../images/方向-左.png')}
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
                                修改个人信息
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
                                
                            </Text>

                        </View>


                    </View>
                </View>


                {
                    /*
                        头像选择
                     */
                }
                <View style={styles.topImagePanel}>
                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <View style={styles.imagePanel}>
                            {this.state.avatarSource === "" ? <Text style={{color:'white'}}>选择头像</Text> :
                                <Image style={styles.imagePanel} source={this.state.avatarSource} />
                            }
                        </View>
                    </TouchableOpacity>
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
                            placeholder='请输入用户名'
                            style={{color:this.state.nameColor,
                                borderColor:this.state.nameColor,
                                height: 40,
                                width:320,
                                fontSize: 16,
                                borderWidth: 0,
                                borderBottomWidth: 1,
                                opacity:this.state.nameOpacity,
                                borderTopColor: '#fff',
                                borderLeftColor: '#fff',
                                borderRightColor: '#fff',
                                }}
                            onChangeText={(name) => {
                                if(name) {
                                    this.setState({
                                        name:name,
                                        nameColor:'#333',
                                        nameOpacity: 1
                                    })
                                }else{
                                    this.setState({
                                        name:'',
                                        nameColor:'lightgray',
                                        nameOpacity: 0.5
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


                    {/*
                    固定按钮栏
                */}
                    <View style={styles.buttonPanel}>
                        <TouchableOpacity
                            onPress={()=>{
                                let _this = this;
                                let resumeData = {
                                    stageName : this.state.name,
                                };

                                fetch(global.baseUrl+'/user/stageName',{
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
                                       if(responseJson.code===0){
                                        _this.props.navigation.navigate('MyInfo');
                                        global.token = responseJson.data.token;
                                        Alert.alert('填写成功！');

                                       }else{
                                        Alert.alert('填写失败！');
                                       }
                                    }).catch((error)=>{
                                        Alert.alert('网络出错了...');
                                        console.log(error);
                                })


                                // this.props.navigation.navigate('HomePage');
                            }}
                        >
                            <View style={styles.confirmButton}>
                                <Text style={{
                                    fontSize: 16,
                                    color:'white'
                                }}>修改</Text>
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
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'

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


