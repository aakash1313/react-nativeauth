import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';
import { Header,Button,Spinner } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component{
 state  = {loggedIn: null};
  componentWillMount() {
     firebase.initializeApp({

    apiKey: 'AIzaSyAee3xtP738DcJ_I_tofFJWp8nJMjJBQfg',
    authDomain: 'react-242b9.firebaseapp.com',
    databaseURL: 'https://react-242b9.firebaseio.com',
    projectId: 'react-242b9',
    storageBucket: 'react-242b9.appspot.com',
    messagingSenderId: '854327217949'

     });
     firebase.auth().onAuthStateChanged((user) =>{
       if (user) {
         this.setState({ loggedIn: true })
       } else {
         this.setState({ loggedIn: false })
       }
     });
  }

  renderContent(){
    switch(this.state.loggedIn)
    {
       case true:
       return (
         <TouchableOpacity style={{ height: 40, width: 100 }} onPress={() => firebase.auth().signOut()}>
           <Text>  Log Out! </Text>
         </TouchableOpacity>
       );

       case false:
         return <LoginForm />;
       default:
          return (
            <Spinner size="large" />
          );
    }
  }


  render() {
    return (
        <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
        </View>
    );
  }
}

export default App;
