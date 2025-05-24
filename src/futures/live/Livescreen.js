import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import firestore from "@react-native-firebase/firestore";

class Livescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  renderMovieItem = ({ item }) => (
    <View style={{ marginHorizontal: 10, alignItems: "center" }}>
      <Image source={{ uri: item.image }} style={styles.movielist} />
      <Text style={styles.movietext}>{item.name}</Text>
    </View>
  );

  render() {
    const { movies } = this.state;

    return (
      <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
        {/* Web Series Section */}
        <View style={{ marginVertical: 16 }}>
          <Text style={styles.sectionTitle}>Web Series</Text>
          <FlatList
            data={movies.filter((movie) => movie.category === "Webseries")}
            renderItem={this.renderMovieItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </View>

        {/* MOST POPULAR Section */}
        <View>
          <Text style={styles.sectionTitle}>MOST POPULAR</Text>
          <FlatList
            data={movies.filter((movie) => movie.category === "popular")}
            renderItem={this.renderMovieItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </View>

        {/* Crime Section */}
        <View>
          <Text style={styles.sectionTitle}>Crime</Text>
          <FlatList
            data={movies.filter((movie) => movie.category === "crime")}
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
  movielist: {
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
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 12,
    marginVertical: 6,
  },
});

export default Livescreen;
