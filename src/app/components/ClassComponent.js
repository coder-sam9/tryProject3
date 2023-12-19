import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      confPassword: '',
      dob: '',
    };
  }

  updateState = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = () => {
    // Access the updated state variables
    const { name, password, confPassword, dob } = this.state;

    // Use them as needed, for example:
    const loginData = {
      email: name,
      password: password,
      confPassword: confPassword,
      dob: dob,
    };

    // Class logic for handling the loginData
    console.log(loginData);
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Name/Email"
          value={this.state.name}
          onChangeText={(text) => this.updateState('name', text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
          onChangeText={(text) => this.updateState('password', text)}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          value={this.state.confPassword}
          onChangeText={(text) => this.updateState('confPassword', text)}
        />
        <TextInput
          placeholder="Date of Birth"
          value={this.state.dob}
          onChangeText={(text) => this.updateState('dob', text)}
        />

        

        <Button title="Submit" onPress={this.handleSubmit} />

      </View>
    );
  }
}

export default ClassComponent;
