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
    if(this.state.fname !== '' 
      && this.state.lname !== '' 
      && this.state.email !== '' 
      && this.state.mobile !== '' 
      && this.state.password !== '' 
      &&  this.state.value !== '' ){
      listArray.push(this.state.fname ,
        this.state.lname ,
        this.state.email ,
        this.state.mobile ,
        this.state.password ,
        this.state.value );
      this.setState({list: listArray});
    }
    else{
      alert("All fields are required")
    }
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
  validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email !== ''){
      if(re.test(email) === false){
        alert("Invalid email")
      }
    }
  }
  validateName(name){
    var re = /^[A-z]+$/;
    if(name !== ''){
      if(!re.test(name)){
        alert("Invalid Name")
      }
    }
  }
  validateMobile(number){
    var re = /^[0-9]+$/;
    if(number !== ''){
      if(!re.test(number)){
        alert("Invalid Number")
      }
      else if(number.length < 10){
        alert("Please provide 10 digits !!!")
      }
    }
  }
  validatePassword(password){
    if(password !== ''){
      if(password.length < 8){
        alert("Minimum 8 digits required")
      }
    }
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
          autoCapitalize={'words'}
          onEndEditing={() => this.validateName(this.state.fname)}
        /> 
        <Text style={styles.instructions}>
          Last Name :  
        </Text>
        <TextInput 
          style={styles.input} 
          underlineColorAndroid={'white'}
          onChangeText={(text) => this.setState({lname : text})}
          value={this.state.lname}
          autoCapitalize={'words'}
          onEndEditing={() => this.validateName(this.state.lname)}
        /> 
        <Text style={styles.instructions}>
          Email Id :  
        </Text>
        <TextInput 
          style={styles.input} 
          underlineColorAndroid={'white'}
          onChangeText={(text) => this.setState({email : text})}
          value={this.state.email}
          onEndEditing={() => this.validateEmail(this.state.email)}
        /> 
        <Text style={styles.instructions}>
          Mobile No :  
        </Text>
        <TextInput 
          style={styles.input} 
          underlineColorAndroid={'white'}
          onChangeText={(text) => this.setState({mobile : text})}
          value={this.state.mobile}
          maxLength= {10}
          onEndEditing={() => this.validateMobile(this.state.mobile)}
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
          onEndEditing={() => this.validatePassword(this.state.password)}
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
            <Item label="---select---" color="black" value="" />
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
      {this.WholeData()}
      </View>
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