import React, {useReducer, useMemo} from 'react';

const initialState = {};

const initialContext = [{...initialState}, () => {}];

export const FilePathContext = React.createContext(initialContext);

const updater = (state, update) => {
  return {...state, ...update};
};

export function UserController(props) {
  const [userState, updateUser] = useReducer(updater, initialState);
  const value = useMemo(() => [userState, updateUser], [userState]);

  return (
    <FilePathContext.Provider value={value}>
      {props.children}
    </FilePathContext.Provider>
  );
}
