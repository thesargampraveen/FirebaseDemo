import { Image, StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";
import React from "react";

function Recordscreen(props){
    return(
           <View style={{flex:1, backgroundColor:'black'}}>

                <View  style={{
      backgroundColor: 'gray',
      height: 250,
      width: 370,
      borderRadius: 30,
      margin: 12,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('ani')} >   
               <Image source={require('../../Assets/pra.jpg')}  style={{
        height: 150,
        width: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
      }}/>   
      </TouchableOpacity> 
              
               <Text style={{fontSize:22, color:'black',fontWeight:'800'}}>Sargam Praveen</Text> 
             
                     
         </View>    

         <View>

           <TouchableOpacity style={{height:60, width:370, backgroundColor:'white', margin:12, borderRadius:12}}>
            <Text style={{margin:18, fontSize:17}}>Edit Profile</Text>

           </TouchableOpacity>
           <TouchableOpacity style={{height:60, width:370, backgroundColor:'white', margin:12,borderRadius:12}}>
            <Text style={{margin:18, fontSize:17}}>History</Text>

           </TouchableOpacity>

           <TouchableOpacity style={{height:60, width:370, backgroundColor:'white', margin:12,borderRadius:12}}>
            <Text style={{margin:18, fontSize:17}}>Settings</Text>

           </TouchableOpacity>

           <TouchableOpacity style={{height:60, width:370, backgroundColor:'white', margin:12,borderRadius:12}}>
            <Text style={{margin:20, fontSize:17}}>invite a Friend</Text>

           </TouchableOpacity>
           <TouchableOpacity style={{height:60, width:370, backgroundColor:'white', margin:12,borderRadius:12}}>
            <Text style={{margin:18, fontSize:17}}>Logout</Text>

           </TouchableOpacity>


         </View>
        
            </View>
    )

}

 const styles  = StyleSheet.create({
    comingsoonlogo:{
        height:300,
        width:350,
        alignItems:'center',
        marginHorizontal:29,
        marginVertical:28,
        borderRadius:23,


    }
 })
export default Recordscreen;