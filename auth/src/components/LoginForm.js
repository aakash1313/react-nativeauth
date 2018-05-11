import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input,Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this)).catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this)).catch(this.onLoginFailed.bind(this));
    });
  }

  onLoginFailed()
  {
    this.setState({ error: 'Authentication Failed.', email: '', password: '', loading: false });

  }
  onLoginSuccess() {
    this.setState({ email: '', password: '', error: '', loading: false })
  }
  renderButton() {
    if (this.state.loading) {
        return <Spinner size="small" />;
    }
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={{ height: 40, width: 100 }} >
        <Text>  Log in! </Text>
      </TouchableOpacity>
    );
  }

  render() {
      return (
        <Card>
        <CardSection >
        <Input
        placeholder="user@gmail.com"
        label="Email"
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Password"
            label="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
            {this.renderButton()}
       </CardSection>
        </Card>
      );
  }
  }
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
