import React, {Component} from 'react';
import {Platform, TextInput, StyleSheet} from 'react-native';

class MyTextInput extends Component {

    constructor(props){
        super(props);

    }

    shouldComponentUpdate(nextProps) {
        return Platform.OS !== 'ios' || this.props.value === nextProps.value;
    }

    render() {
        return <TextInput {...this.props}/>;
    }
}



export default MyTextInput;
