import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {FilePathContext} from '../Context/FilePathContext';
import CompareCard from '../components/CompareCard';
import dummyPromises from '../components/dummyPromises.json';
const CompareScreen = ({navigation}) => {
  const {path} = useContext(FilePathContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Akform</Text>
      <Image source={{uri: path[0].filePath.uri}} style={styles.imageStyle} />
      <TouchableOpacity
        style={styles.signBtn}
        onPress={() =>
          navigation.navigate('Signup', {isBackFromCompare: true})
        }>
        <Text style={styles.loginText}>Go Back</Text>
      </TouchableOpacity>
      <FlatList
        vertical
        data={dummyPromises}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <CompareCard
              navigate={() => navigation.navigate('YourProducts', {item})}
              promiseProp={item}
            />
          );
        }}
      />
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
  flatList: {
    borderRadius: 10,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 5,
    justifyContent: 'center',
    padding: 20,
  },
  login: {
    color: 'white',
    fontSize: 13,
  },
  loginLink: {
    color: 'white',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  loginText: {
    color: 'white',
    fontSize: 15,
  },
  signBtn: {
    width: '80%',
    backgroundColor: '#7e9b2e',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
});
CompareScreen.navigationOptions = (
  {
    /*navigation*/
  },
) => {
  return {
    headerShown: false,
  };
};
export default CompareScreen;
