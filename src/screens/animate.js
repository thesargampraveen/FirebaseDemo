import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";  
const animate = () => {
  return (
    <View style={{backgroundColor:'black', flex:1, alignContent:'center',
            justifyContent:'center'}}>
          
          <Image  source={require('../Assets/pra.jpg')} style={{
            height:500, 
            width:400,
            alignSelf:'center',
            borderRadius:23,
            borderWidth:2,
            borderColor:'white'
           
          }}/>
    
      

    </View>
  )
}

export default animate                        

