import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({ mSize }) => {
   return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={mSize || 'large'} />
      </View>
   );
}

const styles = {
  spinnerStyle: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center'
  }
}

export { Spinner };
