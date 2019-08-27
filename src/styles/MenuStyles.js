import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({

  container: {
    marginTop:100,
     flex:1,
     alignItems:'center',
     justifyContent:'space-around',
     width:'100%',
     height: '100%',
   flexDirection:'row',
     
   },

  button: {
    flex:2,
    width: 400,
    backgroundColor: '#4b4fbd',
    color: '#ffffff',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'30%', 
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  Icon: {
    width: '50%',
    height:  '50%',
  },
  icon:{
    fontSize: 25,
    color: '#c6bbdc'
    },
});