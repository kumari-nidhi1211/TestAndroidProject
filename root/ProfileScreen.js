import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
export default class ProfileScreen extends Component {
	render(){
		return(
			<View style={styles.container}>
				
				<Button
         		// onPress={this.onButtonPress.bind(this)}
          		title="Back"
        		/>
			</View>
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
});