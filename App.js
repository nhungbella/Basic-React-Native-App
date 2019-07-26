import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  AppRegistry,
  Button,
  StyleSheet,
  Linking,
  ScrollView,
  ListView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Constants from 'expo-constants';
const movieList = require("./Info.json")

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.textHeader}>{this.props.name}</Text>
    );
  }
}

class ImageMovie extends Component {
  render() {
    return (
      <Image
        source={{uri: this.props.pic}}
        style={{width: 340, height: 400}}/>
    );
  }
}

class InfoMovie extends Component {
  render() {
    return (
      // Sử dụng TouchableOpacity với chức năng press giống như button
      <TouchableOpacity
        onPress={() => Linking.openURL(this.props.urlMovie)}>
        <Text style={{color: 'dodgerblue',fontSize: 20}}>More Info</Text>
      </TouchableOpacity>
    );
  }
}

export default class AlbumMovies extends Component {
  constructor(props) {
    super(props);
  }
  // Hiển thị chi tiết 1 item như thế nào
  renderItem(item) {
    return (
      <View style={styles.album}>
        <View style={styles.titleMovie}>
          <Text style={{fontSize: 20}}>{ item.title }</Text>
        </View>
        <View style={styles.imageMovie}>
          <ImageMovie pic={ item.image }/>
        </View>
        // Hiển thị ảnh từ web/server
        <View style={styles.infoMovie}>
          <InfoMovie urlMovie={ item.url }/>
        </View>
      </View>
    )}

  render() {
    return (
      <View style={styles.container}>
        // Header ứng dụng
        <View style={styles.header}>
          <Greeting name='Basic React Native App' />
        </View>
        <Text style={styles.title}>Top Ten Movies of IMDB</Text>
        <ScrollView>
          // Sử dụng FlatList để hiển thị ra một danh sách
          <FlatList
            data= { movieList }
            renderItem = {({item}) => this.renderItem(item)}
          />
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    marginTop: 5
  },

  textHeader: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    paddingTop: 20
  },

  title: {
    marginVertical: 20,
    fontSize: 20,
    textAlign: 'center'
  },

  album: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginLeft: 5,
    marginRight: 5,
    elevation: 1,
    marginBottom: 10
  },

  titleMovie: {
    padding: 10,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1
  },

  imageMovie: {
    padding: 5,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1
  },

  infoMovie: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
