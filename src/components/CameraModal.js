import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const CameraModal = ({modalVisible, setModalVisible, choosePhoto, takePhoto}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          backgroundColor: 'rgba(100,100,100, 0.7)',
          padding: 20,
        }}>
        <TouchableOpacity
          style={styles.escapeContainer}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => choosePhoto()}>
                  <Text style={styles.textStyle}>Fotoğraf Seç</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => takePhoto()}>
                  <Text style={styles.textStyle}>Fotoğraf Çek</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

  //Modal Syles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 3,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  escapeContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CameraModal;