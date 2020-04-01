const initialState = {
    list: [],
  };
  
  export const list = (state = initialState, action) => {
    switch(action.type) {
      case "GET_LIST":
        return { ...state, list: action.payload.list,};

      default:
        return state;
    }
  };
  
  export default list