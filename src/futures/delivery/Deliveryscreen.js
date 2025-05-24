import React, { Component } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import AntDesign from "react-native-vector-icons/AntDesign"

class Deliveryscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const snapshot = await firestore().collection("Movies").get();
      const movieList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.setState({ movies: movieList, loading: false });
    } catch (error) {
      console.error("Error fetching movies", error);
      this.setState({ loading: false });
    }
  };

  getFilteredMoviesByCategory = (category) => {
    const { search, movies } = this.state;
    return movies.filter((movie) => {
      const matchesCategory = movie.category?.toLowerCase() === category.toLowerCase();
      const matchesSearch = movie.name?.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  renderMovieItem = ({ item }) => (
    <View style={{ marginHorizontal: 10, alignItems: "center" }}>
      <Image source={{ uri: item.image }} style={styles.movelist} />
      <Text style={styles.movietext}>{item.name}</Text>
    </View>
  );

  render() {
    const { search } = this.state;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
        <View>
          <View  style={styles.searchInput}>

       
          <TextInput
           style={{color:'white',flex:1}}
            placeholder="Search"
            placeholderTextColor="white"
            value={search}
            onChangeText={(text) => this.setState({ search: text })}
          />
            <AntDesign name={"search1"} size={20} color={'white'} marginVertical={15}/>
          </View>
          
                   
          
          <Text style={styles.suggestionText}>
            Suggestions (from recent content)
          </Text>
        </View>

        {/* Web Series */}
        <View style={{ marginVertical: 16 }}>
          <Text style={styles.sectionTitle}>Web Series</Text>
          <FlatList
            data={this.getFilteredMoviesByCategory("Webseries")}
            renderItem={this.renderMovieItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
    
        </View>

        {/* Most Popular */}
        <View>
          <Text style={styles.sectionTitle}>MOST POPULAR</Text>
          <FlatList
            data={this.getFilteredMoviesByCategory("popular")}
            renderItem={this.renderMovieItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
         
        </View>

        {/* Crime */}
        <View>
          <Text style={styles.sectionTitle}>Crime</Text>
          <FlatList
            data={this.getFilteredMoviesByCategory("crime")}
            renderItem={this.renderMovieItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
       
        </View>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  movelist: {
    height: 270,
    width: 120,
    backgroundColor: "red",
    marginHorizontal: 7,
    borderRadius: 20,
    marginVertical: 14,
    borderWidth: 1,
    borderColor: "white",
  },
  movietext: {
    color: "white",
    fontSize: 15,
    fontWeight: "800",
    textAlign: "center",
    marginHorizontal: 5,
  },
  searchInput: {
    height: 50,
    width: "90%",
    borderWidth: 1,
    borderRadius: 22,
    borderColor: "white",
    color: "white",
    fontSize: 18,
    marginVertical: 20,
    marginHorizontal: 12,
    paddingHorizontal: 15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  suggestionText: {
    color: "white",
    marginHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "baseline",
    color: "white",
    marginHorizontal: 12,
    marginVertical: 6,
  },
  noResults: {
    color: "gray",
    fontSize: 16,
    marginLeft: 12,
    fontStyle: "italic",
  },
});

export default Deliveryscreen;
