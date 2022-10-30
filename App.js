import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {Header} from 'react-native-elements';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Header
        backgroundColor={'maroon'}
        centerComponent={{
          text: 'Pocket Dictionary',
          style: { color: 'white', fontSize: 25 },
        }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ chunks:db[this.state.text].chunks});
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <HomeScreen />
      </View>
    )
  }
}
