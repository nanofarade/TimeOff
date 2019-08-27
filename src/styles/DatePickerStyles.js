import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
  container: {
    marginTop:100,
     flex:1,
     alignItems:'center',
     justifyContent:'space-around',
     width:'100%',
     height: '100%',
   flexDirection:'column',
     
   },
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0,
          marginLeft: 36,
          width: 300,
        },
        dateInput: {
          marginLeft: 20,
          width: 380,
        },
        FormInput:
        {
          width: 380,
          marginLeft: 20,
          flex:1,
          //width: 350,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderRadius: 10,
          borderColor:'#4b4fbd',
          paddingHorizontal: 16,
          fontSize: 18,
          color: '#666666',
          marginVertical: 10,
          paddingVertical: 13,
          alignItems: 'center',
          justifyContent: 'center',
          
        }

  
});