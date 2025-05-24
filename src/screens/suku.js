import { Image, ScrollView, StyleSheet, Text, Vibration, View } from "react-native";
import React from "react";

const suku =() =>{
    return(
        <ScrollView>
        <View>
            <Text style={{alignSelf:'center', fontSize:30}}>Director Rajamouli..</Text>
         <Image  source={require("../Assets/suku.webp")} style={styles.comingsoonlogo}/>

           <Text selectable style={styles.text}>
           Koduri Srisaila Sri Rajamouli (/ˈrɑːdʒəmaʊlɪ/ RAH-juh-mow-li; born 10 October 1973) is an Indian filmmaker who works in Telugu cinema. Known for his epic, action and fantasy genre films, he is the highest grossing Indian director of all time,[2] as well as the highest-paid director in Indian cinema.[3] Rajamouli is a recipient of various national and international honours including a New York Film Critics Circle award, a Critics' Choice Movie Award, two Saturn Awards, four National Film Awards, and five Filmfare Awards. In 2016, the Government of India honoured him with the Padma Shri, for his contributions in the field of art. In 2023, he was included on the Time's list of the 100 most influential people in the world.[4]

Rajamouli has been described by film trade analyst Komal Nahta as "the biggest Indian film director ever" and by SOAS professor Rachel Dwyer as "India's most significant director today".[5][6] He has directed twelve feature films, all of which have been box office successes.[6][7] Three of his films—Baahubali: The Beginning (2015), Baahubali 2: The Conclusion (2017), and RRR (2022)—rank among the top 15 highest grossing-films in India. Each of these films was the most expensive Indian production at the time of its release. Baahubali 2 became the first Indian film to gross over ₹1,000 crore and held the record as the highest-grossing Indian film. It also sold over 100 million tickets, the highest for any film in India since Sholay (1975).[8]

The 2009 fantasy action film, Magadheera was the highest-grossing Telugu film ever at the time of its release. Eega (2012) won nine awards at the Toronto After Dark Film Festival, including the Most Original Film. Baahubali films have received six Saturn Award nominations with Baahubali 2 winning the Best International Film. RRR received various international accolades including an Academy Award and a Golden Globe Award for the song "Naatu Naatu", and a Critics' Choice Movie Award for Best Foreign Language Film.
d to Eluru where he studied till Intermediate first year. He then took a break of two years and finished his Intermediate second year in Kovvur. After that, he did not pursue any further formal education.[30] 
 </Text>
        

    </View>
    </ScrollView>
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


    },
    text:{
        marginHorizontal:14

    }
 })
export default suku;