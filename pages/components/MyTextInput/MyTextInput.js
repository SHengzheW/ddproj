import React, {Component} from 'react';
import {Platform, TextInput, StyleSheet} from 'react-native';

class MyTextInput extends Component {

    constructor(props){
        super(props);
        this.state={
            color:'lightgray'
        }
    }

    shouldComponentUpdate(nextProps){

        return Platform.OS !== 'ios' || (this.props.value === nextProps.value &&
            (nextProps.defaultValue == undefined || nextProps.defaultValue == '' )) ||
            (this.props.defaultValue === nextProps.defaultValue &&  (nextProps.value == undefined || nextProps.value == '' ));

    }

    render() {
        return <TextInput {...this.props}
                          style={{color:this.state.color,
                              borderColor:this.state.color,
                              height: 40,
                              width:320,
                              fontSize: 16,
                              borderWidth: 1,
                              borderTopColor: '#fff',
                              borderLeftColor: '#fff',
                              borderRightColor: '#fff'}}

                          onFocus={()=>{
                              this.setState({
                                  color:'#333'
                              })
                          }}/>;
    }
}



export default MyTextInput;
