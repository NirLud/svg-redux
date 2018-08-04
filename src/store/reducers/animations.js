import * as actionTypes from "../actions/actionTypes";

const initialState = {
  color: "red",
  direction: "vertical",
  display: true,
  size: {
    width: 10,
    height: 10
  },
  opacity: 0.5
};

const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COLOR:
      return updateObject(state, { color: action.payload.color });

    case actionTypes.SET_DIRECTION:
      return updateObject(state, { direction: action.payload.direction });

    case actionTypes.SET_DISPLAY:
      return updateObject(state, { display: action.payload.display });

    case actionTypes.SET_SIZE:{
      if(action.payload.size.width >= 100){
        return updateObject(state, { size: {width: 10, height: 10} });
      }
      return updateObject(state, { size: action.payload.size });
    }

    case actionTypes.SET_OPACITY:
      return updateObject(state, { opacity: action.payload.opacity });
    default:
      return state;
  }
};

export default reducer;
