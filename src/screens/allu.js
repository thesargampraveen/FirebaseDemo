import { Image, ScrollView, StyleSheet, Text, Vibration, View, TouchableOpacity, Alert, Button } from "react-native";
import React from "react";

function allu(props){

  const pressme =()=>{
    Alert.alert(" video can't play ");
  }



  return( 
            
            <ScrollView >
                 <View style={{height:470, width:'%100',backgroundColor:'rgba(41, 24, 25, 0.82)',borderRadius:9}}>
                     <Image  source={require('../Assets/push.jpg')} style={styles.comingsoonlogo}/>
                     <Text style={{alignSelf:'center', color:'white',fontSize:20, fontWeight:'bold'}}>Pushpa:2</Text>
                     <TouchableOpacity  onPress={pressme}  style={{height:40, width:390,backgroundColor:'white' , borderRadius:12,}}>
                      <Text  style={{alignSelf:'center',marginVertical:9, fontSize:17, fontWeight:'800'}}>😁  Play  😁</Text>
              
                     </TouchableOpacity>
                          <Text style={{color:'white', marginHorizontal:12, marginVertical:12, fontSize:15}}>Pushpa 2: The Rule is a 2024 Indian Telugu-language action drama film[8] written and directed by Sukumar and produced by Mythri Movie Makers in association with Sukumar Writings. A sequel to Pushpa: The Rise (2021),</Text>
                </View>


                <View style={{height:400,width:'%100', backgroundColor:'black'}}>
                    <Text style={{color:'pink', fontSize:30,alignSelf:'baseline', marginHorizontal:12,fontWeight:'800',}}>More</Text>

                    <ScrollView horizontal={true}>
                         <View style={{flexDirection:'row',}}>
                      <View >
                         <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
                          <Image  source={require('../Assets/bool.jpg')} style={styles.movelist}/>
                          </TouchableOpacity>
                          <Text style={{color:'white',marginHorizontal:30, fontSize:15,fontWeight:'800'}}>Bool</Text>
                          <Text style={{color:'white',marginHorizontal:30,fontSize:15,fontWeight:'800'}} >Bhulaiyaa</Text>
                    
                    
                          
                        </View>
                     
                        <View >
                          <Image  source={require('../Assets/kalki.jpg')} style={styles.movelist}/>
                          <Text style={{color:'white',marginHorizontal:43,fontSize:18,fontWeight:'800',}} >Kalki</Text>
                    
                          
                        </View>
                    
                        <View >
                          <Image  source={require('../Assets/salar.jpg')} style={styles.movelist}/>
                          <Text style={{color:'white',marginHorizontal:43,fontSize:18,fontWeight:'800'}} >Salaar</Text>
                    
                          
                        </View>
                        <View >
                          <Image  source={require('../Assets/mm.jpeg')} style={styles.movelist}/>
                          <Text style={{color:'white',marginHorizontal:43,fontSize:18,fontWeight:'800'}} >Salaar</Text>
                    
                          
                        </View>
                       </View>
                       
                        </ScrollView>

                </View>



             </ScrollView>
    )
}


 const styles  = StyleSheet.create({
    comingsoonlogo:{
        height:220,
        width:200,
        alignItems:'center',
        marginHorizontal:29,
        marginVertical:28,
        borderRadius:23,
        backgroundColor:'black',
        alignSelf:'center',
        borderWidth: 2,
        borderColor:'gray'
      },
    text:{
        marginHorizontal:14

    },
    movelist:{
        height:200,
        width:120,
        backgroundColor:'red',
        marginHorizontal:7,
        borderRadius:20,
        marginVertical:14,
        borderWidth:1,
        borderColor:'white'
    
    
    
      },
      movietext:{
        color:'white',
        marginHorizontal:23,
        fontSize:15,fontWeight:'800'
    
      }

 })
export default allu;


