import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Picker,
  Button,
  ScrollView,
} from 'react-native';
const Item = Picker.Item;
const {height, width} = Dimensions.get('window');

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      mobile: '',
      password: '',
      value: '',
      list: [],
    };
  }
  onButtonPress(){
  let listArray = this.state.list;
  listArray.push(this.state.fname ,
    this.state.lname ,
    this.state.email ,
    this.state.mobile ,
    this.state.password ,
    this.state.value );
  this.setState({list: listArray});
  };
  WholeData() {
  return this.state.list.map(function(listValue, i){
    return(
      <View key={i}>
        <Text>{listValue}</Text>
      </View>
    );
  });
}
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <View style={{flex:1,}}>
        <Text style={styles.welcome}>
          Signup 
        </Text>
        <Text style={styles.instructions}>
          First Name :
        </Text>
        <TextInput 
          style={styles.input} 
          underlineColorAndroid={'white'} 
          onChangeText={(text) => this.setState({fname : text})}
          value={this.state.fname}
        /> 
        <Text style={styles.instructions}>
          Last Name :  
        </Text>
        <TextInput 
          style={styles.input} 
          underlineColorAndroid={'white'}
          onChangeText={(text) => this.setState({lname : text})}
          value={this.state.lname}
        /> 
        <Text style={styles.instructions}>
          Email Id :  
        </Text>
        <TextInput 
          style={styles.input} 
          underlineColorAndroid={'white'}
          onChangeText={(text) => this.setState({email : text})}
          value={this.state.email}
        /> 
        <Text style={styles.instructions}>
          Mobile No :  
        </Text>
        <TextInput 
          style={styles.input} 
          underlineColorAndroid={'white'}
          onChangeText={(text) => this.setState({mobile : text})}
          value={this.state.mobile}
        /> 
        <Text style={styles.instructions}>
          Password :  
        </Text>
        <TextInput 
          style={styles.input} 
          underlineColorAndroid={'white'}
          onChangeText={(text) => this.setState({password : text})}
          secureTextEntry={true}
          value={this.state.password}
        /> 
        <Text style={styles.instructions}>
          Gender :  
        </Text>
        <View style={styles.background}>
        <Picker
            style={styles.picker}
            selectedValue={this.state.value}
            onValueChange={(text) => this.setState({value : text})}
            mode="dialog">
            <Item label="---select---" color="black" value="---select---" />
            <Item label="Male" color="black" value="Male" />
            <Item label="Female" color="black" value="Female" />
        </Picker>
        </View>
        <View style={styles.button}>
        <Button
         onPress={this.onButtonPress.bind(this)}
          title="Sign up"
        />
        </View>
      </View>
      <View style={{flex:2, backgroundColor:'white',}}>
      </View>
      {this.WholeData()}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    padding: 40 ,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white', 
  },
  instructions: {
    color: 'white',
    marginBottom: 5,
    fontSize: 18,
  },
  input: {
    height: 35,
    width: width * 0.8,
    backgroundColor: 'white', 
  },
  picker: {
    height: 30,
    width: width * 0.4,
  },
  background: {
    backgroundColor: 'white',
    width: width * 0.4,
  },
  button: {
    paddingTop: height * 0.05,
    paddingRight: width * 0.2,
    paddingLeft: width * 0.2,
  }
});