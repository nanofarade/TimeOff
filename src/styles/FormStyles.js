import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
  Logincontainer: {
   marginTop:100,
    padding:'30%',
    flex:1,
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    height: '100%',
  flexDirection:'column',
    
  },
  container: {
    marginTop:100,
     flex:2,
     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     height: '100%',
   flexDirection:'column',
     
   },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'

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
  LoginInput: {
    flex:2,
    marginTop:'30%', 
    width: 400,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 20,
    color: 'black',
    
    marginVertical: 10,
    paddingVertical: 13,
    alignItems: 'center',
    opacity: 0.6,
  },
  
  FormInput: {
    flex:2,
    width: 400,
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
    marginLeft:5,
  },
  Title: {
    fontWeight: 'bold',
    fontFamily: 'TREBUC',
    fontSize: 20,
    fontWeight: '500',
    color: '#4b4fbd',
    textAlign: 'center'
  },
  flexhorizontal: {

   flexDirection:'row',
     
   },
   dropdown: {
    width: 200,
   }
});