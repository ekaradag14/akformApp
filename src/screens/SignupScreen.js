import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Image,
  Button,
  TextInput,
  Platform,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Instructions from '../components/Instructions';
import CameraModal from '../components/CameraModal';
import {FilePathContext} from '../Context/FilePathContext';

const SignupScreen = ({navigation}) => {
  const {path, dispatch} = useContext(FilePathContext);
  const [filePath, setFilePath] = useState();
  const [isInstructionsFinished, setIsInstructionsFinished] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  //#region Camera
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return (
          granted === PermissionsAndroid.RESULTS.GRANTED ||
          granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
        );
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return (
          granted === PermissionsAndroid.RESULTS.GRANTED ||
          granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
        );
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        //   console.log('Response = ', response);

        if (response.didCancel) {
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        //   console.log('base64 -> ', response.base64);
        //   console.log('uri -> ', response.uri);
        //   console.log('width -> ', response.width);
        //   console.log('height -> ', response.height);
        //   console.log('fileSize -> ', response.fileSize);
        //   console.log('type -> ', response.type);
        //   console.log('fileName -> ', response.fileName);
        setFilePath(response);
        dispatch({
          type: 'ADD',
          filePath: response,
        });
        navigation.navigate('Compare');
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      setFilePath(response);
      dispatch({
        type: 'ADD',
        filePath: response,
      });
      navigation.navigate('Compare');
    });
  };

  //#endregion

  useEffect(() => {
    console.log('path', path);
  }, [path]);

  useEffect(() => {
    navigation.state.params &&
      navigation.state.params.isBackFromCompare &&
      setIsInstructionsFinished(true);
    dispatch({
      type: 'ADD',
      filePath: {},
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Akform</Text>

      <Instructions
        setIsInstructionsFinished={setIsInstructionsFinished}
        isBackFromCompare={
          navigation.state.params && navigation.state.params.isBackFromCompare
        }
      />

      <CameraModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        choosePhoto={() => chooseFile('photo')}
        takePhoto={() => captureImage('photo')}
      />
      {isInstructionsFinished && (
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05317d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#7e9b2e',
    marginBottom: 40,
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
SignupScreen.navigationOptions = (
  {
    /*navigation*/
  },
) => {
  return {
    headerShown: false,
  };
};
export default SignupScreen;
