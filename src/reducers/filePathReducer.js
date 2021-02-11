const filePathReducer = (state, action) => {
  switch (action.type) {
    case 'RETURN':
      return state.path;
    case 'ADD':
      return [{filePath: action.filePath}];
    default:
      return state;
  }
};

export {filePathReducer as default};
