import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle } = styles;

   return (
   <View style={styles.viewStyle}>
     <Text style={textStyle}>{props.headerText}</Text>
     </View>
    );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#f8c8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
textStyle: {
fontSize: 20  
}
};

export { Header };
