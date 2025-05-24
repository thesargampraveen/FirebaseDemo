
import { Image, ScrollView, StyleSheet, Text, Vibration, View,FlatList } from "react-native";
import React from "react";
const data=[
    {
        id:'1',
        image:require('../Assets/allu.jpeg'),
        desc:'Allu Arjun made his debut in 2003 with Gangotri. He rose to prominence starring in Sukumars cult classic Arya (2004) for which he earned a Nandi Special Jury Award.[7] He consolidated his reputation with the action films Bunny (2005) and Desamuduru (2007). In 2008, he starred in the romantic drama Parugu for which he won his first Filmfare Award for Best Actor',
        name:'Allu Arjun'
       
    },

]


function about(){
   const renderItem=({item})=>(
          
          <View selectable style={styles.item}>
             
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.name}>{item.desc}</Text>
        </View>
      
     
  
      );

    return(
                <ScrollView>
        
                    <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}></FlatList>
            
                    <Text style={{marginVertical:23,marginHorizontal:22, fontSize:29,fontWeight:'700'}}>Movies</Text>
    

        
            </ScrollView>
            )
}
const styles = StyleSheet.create({
    text:{
        marginHorizontal:14

    },
})

export default about