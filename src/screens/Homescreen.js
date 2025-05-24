import React, { Component ,createRef } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, FlatList, Dimensions, StyleSheet } from "react-native";

import firestore from '@react-native-firebase/firestore'




const { width } = Dimensions.get('window');

const images = [
  { id: '1', uri: 'https://i.pinimg.com/736x/6e/55/e3/6e55e3f32df259ccd7a45a3c00111293.jpg' },
  { id: '2', uri: 'https://i.ytimg.com/vi/1qxvcgBpj-o/maxresdefault.jpg' },
  { id: '3', uri: 'https://www.hindustantimes.com/ht-img/img/2025/04/08/550x309/Pushpa_ww_bo_22_1735301277155_1744090945711.jpg' },
  { id: '4', uri: 'https://imagesvs.oneindia.com/img/2023/12/salaar-review2-1703184699.jpg' },
  { id: '5', uri: 'https://i.ytimg.com/vi/-rTzyZZGJ84/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqMq-sihr9tfugNQqOEJCIsRsWoQ' },
];



 


class HomeScreen extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      movies: [],
      loading: true,

    };

    this.viewabilityConfig = {
      viewAreaCoveragePercentThreshold: 50,
    };

    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
  }

  onViewableItemsChanged({ viewableItems }) {
    if (viewableItems.length > 0) {
      this.setState({ activeIndex: viewableItems[0].index });
    }
  }
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    try {
      const snapshot = await firestore().collection('Movies').get();
      const movieList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),  // Get all fields (name, image, category)
      }));
      this.setState({ movies: movieList, loading: false });
    } catch (error) {
      console.error("Error fetching movies", error);
      this.setState({ loading: false });
    }
  }
  renderMovieItem = ({ item }) => (
  <TouchableOpacity onPress={() => this.props.navigation.navigate('actor', { movie: item })}>
    <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
      <Image source={{ uri: item.image }} style={styles.movelist} />
      <Text style={styles.movietext}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);







  renderItem = ({ item }) => (
    
    <Image source={{ uri: item.uri }} style={styles.image} />
  );


  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.bg}>
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Movies</Text>
              <TouchableOpacity>
                {/* <Text style={styles.seeAllText}>See all</Text> */}
              </TouchableOpacity>
            </View>

            <View style={styles.container1}>
              <FlatList
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
                onViewableItemsChanged={this.onViewableItemsChanged}
                viewabilityConfig={this.viewabilityConfig}
              />

                
              <View style={styles.dotContainer}>
                {images.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      index === this.state.activeIndex ? styles.activeDot : null,
                    ]}
                  />
                ))}
              </View>
            </View>
          </View>

          {/* MOST POPULAR Section */}
          <View>
            
            <Text style={styles.actortext}>MOST POPULAR</Text>
            <ScrollView horizontal  >
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('actor')}>
              <FlatList
                data={this.state.movies.filter(movie =>movie.category==='popular')}
                renderItem={this.renderMovieItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
              />
                </TouchableOpacity>
                  </ScrollView>
                  
               
        
 
            {/* Crime Section */}
            <Text style={styles.actortext}>crime</Text>
            <ScrollView horizontal>
              <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <FlatList
                data={this.state.movies.filter(movie =>movie.category==='crime')}
                renderItem={this.renderMovieItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
              />
           </TouchableOpacity>
            </ScrollView>

            {/* Web Series Section */}
            <View style={{ marginVertical: 16 }}>
              <Text style={{ fontSize: 26, fontWeight: 'bold', alignSelf: 'baseline', color: 'white', marginHorizontal: 12, marginVertical: 6 }}>
                Web Series
              </Text>
              <ScrollView horizontal>
              <FlatList
                data={this.state.movies.filter(movie =>movie.category==='Webseries')}
                renderItem={this.renderMovieItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
              />
               
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // Same styles you already have in your original code
  bg: { backgroundColor: 'black' },
  actortext: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'baseline',
    color: 'white',
    marginHorizontal: 12, 
  },
  movelist: {
    height: 270,
    width: 120,
    backgroundColor: 'red',
    marginHorizontal: 7,
    borderRadius: 20,
    marginVertical: 14,
    borderWidth: 1,
    borderColor: 'white',
  },
  movietext: {
    color: 'white',
    marginHorizontal: 23,
    fontSize: 15,
    fontWeight: '800',
  },
  container1: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  image: {
    width: 400,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  sectionContainer: {
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
