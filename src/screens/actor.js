// MovieDetail.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const MovieDetail = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity>
      <Image source={{ uri: movie.image }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{movie.name}</Text>
     
      <Text style={styles.description}>{movie.desc}</Text>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
  },
    title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    height: 300,
    width:260,
    alignSelf:'center',
    borderWidth:1,
    resizeMode:'contain',
    borderColor:'white',

   
  },
  description: {
    fontSize: 16,
    color: 'white',
    padding:12

  },
});

export default MovieDetail;
