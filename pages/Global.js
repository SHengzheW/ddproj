import {Dimensions} from 'react-native';

let global={
   allWidth : Dimensions.get('window').width,
   baseUrl : 'http://47.98.157.79:8080/v1',
   token:'',
   topPanel:{
      marginTop:40
   },
   useMarginTop: 15

};



export default global;
