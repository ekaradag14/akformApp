import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CompareCard = ({promiseProp, navigate}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigate}>
        <Text style={{fontSize: 20}}>{promiseProp.Title}</Text>
        <Text>My ${promiseProp.Amount} is at stake.</Text>
        <Text style={{color: 'red', textAlign: 'right'}}>
          until {new Date(promiseProp.ExpirationDate).toLocaleDateString()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 320,
    height: 100,
    marginBottom: 10,
    backgroundColor: 'white',
  },
});

export default CompareCard;
