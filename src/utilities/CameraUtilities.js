// import {useContext} from 'react';
// import {Platform, PermissionsAndroid} from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {FilePathContext} from '../Context/FilePathContext';

// const requestCameraPermission = async () => {
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'App needs camera permission',
//         },
//       );
//       // If CAMERA Permission is granted
//       return (
//         granted === PermissionsAndroid.RESULTS.GRANTED ||
//         granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
//       );
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   } else {
//     return true;
//   }
// };

// const requestExternalWritePermission = async () => {
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'External Storage Write Permission',
//           message: 'App needs write permission',
//         },
//       );
//       // If WRITE_EXTERNAL_STORAGE Permission is granted
//       return (
//         granted === PermissionsAndroid.RESULTS.GRANTED ||
//         granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
//       );
//     } catch (err) {
//       console.warn(err);
//       alert('Write permission err', err);
//     }
//     return false;
//   } else {
//     return true;
//   }
// };

// const captureImage = async (type, setFilePath) => {
//     const {dispatch} = useContext(FilePathContext);
//   let resp;
//   let options = {
//     mediaType: type,
//     maxWidth: 300,
//     maxHeight: 550,
//     quality: 1,
//     videoQuality: 'low',
//     durationLimit: 30, //Video max duration in seconds
//     saveToPhotos: true,
//   };
//   let isCameraPermitted = await requestCameraPermission();
//   let isStoragePermitted = await requestExternalWritePermission();
//   if (isCameraPermitted && isStoragePermitted) {
//     launchCamera(options, (response) => {
//       //   console.log('Response = ', response);

//       if (response.didCancel) {
//         alert('User cancelled camera picker');
//         return;
//       } else if (response.errorCode == 'camera_unavailable') {
//         alert('Camera not available on device');
//         return;
//       } else if (response.errorCode == 'permission') {
//         alert('Permission not satisfied');
//         return;
//       } else if (response.errorCode == 'others') {
//         alert(response.errorMessage);
//         return;
//       }
//       //   console.log('base64 -> ', response.base64);
//       //   console.log('uri -> ', response.uri);
//       //   console.log('width -> ', response.width);
//       //   console.log('height -> ', response.height);
//       //   console.log('fileSize -> ', response.fileSize);
//       //   console.log('type -> ', response.type);
//       //   console.log('fileName -> ', response.fileName);
//       resp = response;
//     });

//   }
// };

// const chooseFile = (type, setFilePath) => {
//   let options = {
//     mediaType: type,
//     maxWidth: 300,
//     maxHeight: 550,
//     quality: 1,
//   };
//   launchImageLibrary(options, (response) => {
//     console.log('Response = ', response);

//     if (response.didCancel) {
//       alert('User cancelled camera picker');
//       return;
//     } else if (response.errorCode == 'camera_unavailable') {
//       alert('Camera not available on device');
//       return;
//     } else if (response.errorCode == 'permission') {
//       alert('Permission not satisfied');
//       return;
//     } else if (response.errorCode == 'others') {
//       alert(response.errorMessage);
//       return;
//     }
//     console.log('base64 -> ', response.base64);
//     console.log('uri -> ', response.uri);
//     console.log('width -> ', response.width);
//     console.log('height -> ', response.height);
//     console.log('fileSize -> ', response.fileSize);
//     console.log('type -> ', response.type);
//     console.log('fileName -> ', response.fileName);
//     setFilePath(response);
//   });
// };

// module.exports = {
//   requestCameraPermission,
//   requestExternalWritePermission,
//   captureImage,
//   chooseFile,
// };
