import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      display_text: '',
      chunks: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{
            backgroundColor: '#C85250',
            justifyContent: 'space-around',
          }}
          centerComponent={{
            text: 'LEARN WORDS',
            style: {
              color: '#E9EAE0',
              fontFamily: 'comic sans ms',
              fontWeight: 'bold',
            },
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvbSzCkRk6_wQ1e0FE44U2pg-h44Zo5aurg&usqp=CAU',
          }}
        />
        <TextInput
          style={styles.textArea}
          placeholder={'Enter a word'}
          placeholderTextColor={'#E7625F'}
          onChangeText={(input) => {
            this.setState({
              text: input,
            });
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
          }}>
          <Text style={styles.buttonText}>CLICK HERE</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((index) => {
            return (
              <TouchableOpacity style={styles.texts}>
                <Text style={styles.text}>{index}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EAE0',
  },
  textArea: {
    borderWidth: 5,
    marginTop: 50,
    borderColor: '#C85250',
    width: '75%',
    alignSelf: 'center',
    height: 50,
  },
  button: {
    backgroundColor: '#C85250',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#E9EAE0',
    fontFamily: 'comic sans ms',
  },
  text: {
    fontFamily: 'comic sans ms',
    fontSize: 25,
    color: '#E9EAE0',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height: 200,
    borderRadius: 20,
  },
  texts: {
    height:50, 
    width:'80%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "#C85250",
  }
});
