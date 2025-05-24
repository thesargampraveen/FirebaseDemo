import { StyleSheet, Text, Vibration, View,  } from "react-native";
import React from "react";

const Dinerscreen =() =>{
    return(
         <View>
                  <Text style={{alignItems:'center', fontSize:30}}>Hi Delivery Please wait..</Text>
                  <Image  source={require("../../Assets/coming_soon2.jpg")} style={styles.comingsoonlogo}/>
              
      
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

export default Dinerscreen;