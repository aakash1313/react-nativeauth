// import libraries for making the component
import React from 'react';
import { Text, View } from 'react-native';

// Create the component
const Header = (props) => {
  const  { textStyle, headerViewStyle } = styles;
  return (
    <View style = {headerViewStyle}>
    <Text style = {textStyle} >{props.headerText}</Text>
    </View>
  );
};

const styles = {

  headerViewStyle: {
     backgroundColor: '#F8F8F8',
     justifyContent: 'center',
     alignItems: 'center',
     paddingTop: 15,
     height: 60,
     shadowColor: '#FFF',
     shadowOffset: { width: 0, height: 2},
     shadowOpacity:  0.5,
     elevation: 5,
     position: 'relative'
  },
  textStyle:{
    fontSize: 20
  }
};

//Make it available to other app
export { Header };
