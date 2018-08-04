import * as actionTypes from "./actionTypes";

export const addStudent = () => {};

export const SetShape = shape => {
  return {
    type: actionTypes.SET_SHAPE,
    payload: shape
  };
};

export const SetDirection = direction => {
  return {
    type: actionTypes.SET_DIRECTION,
    payload: direction
  };
};

export const SetSize = size => {
  return {
    type: actionTypes.SET_SIZE,
    payload: { size }
  };
};

export const SetColor = color => {
  return {
    type: actionTypes.SET_COLOR,
    payload: { color }
  };
};

export const SetOpacity = opacity => {
  return {
    type: actionTypes.SET_OPACITY,
    payload: { opacity }
  };
};
