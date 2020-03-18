import React from 'react';
import { Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';

export default function App() {

  return (
    <View style={styles.container}>
      <Image
      source={require('../Loin/src/assets/logo.png')}
      style={styles.logo}
      />
      
      <TextInput
      style={styles.input}
      placeholder='Digite seu e-mail'
      />

      <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder='Digite sua senha'
      />
      <TouchableOpacity
      onPress={() => {this.clicou()}}
      style={styles.botao}>
        <Text
        style={styles.botaotext}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

clicou = () => {
  Alert.alert("Aplicatico Cat+Dog", "Você clicou em mim!");
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  input:{
    marginTop: 20,
    padding:10,
    width: 300,
    height:50,
    backgroundColor: '#fff',
    fontSize:16,
    borderRadius: 3,
  },
  botao: {
    width:300,
    height: 50,
    backgroundColor: '#3498db',
    marginTop: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaotext: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fff'
  }
});
