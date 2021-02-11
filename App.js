/**
 *
 * @format
 * @flow strict-local
 */

import React, {useReducer} from 'react';
import MainNavigator from './src/Navigation/MainNavigator';
import {FilePathContext} from './src/Context/FilePathContext';
import filePathReducer from './src/reducers/filePathReducer';

const App = () => {
  const [path, dispatch] = useReducer(filePathReducer, []);
  return (
    <FilePathContext.Provider value={{path, dispatch}}>
      <MainNavigator />
    </FilePathContext.Provider>
  );
};

export default App;
