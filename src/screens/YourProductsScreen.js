import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
const YourProductsScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Akform</Text>
      <Text style={styles.logo}>{navigation.state.params.item.Title}</Text>
      <Button onPress={() => navigation.navigate('Compare')} title='Hey'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05317d',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#7e9b2e',
    marginBottom: 40,
  },
});
YourProductsScreen.navigationOptions = (
  {
    /*navigation*/
  },
) => {
  return {
    headerShown: false,
  };
};
export default YourProductsScreen;
