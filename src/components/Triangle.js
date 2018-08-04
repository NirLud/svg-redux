import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { SetShape, SetSize, SetDirection } from "../store/actions/animations";

const moveShape = direction => keyframes`
0% {
 transform: translate(0,0);

}
50% {
 transform: ${(direction === "vertical" && "translate(0,5px)") ||
   (direction === "horizontal" && "translate(5px,0px)")}
}
100% {
 transform: translate(0,0);
}
`;

const StyledTriangle = styled.path`
  animation: ${({ animate, direction }) => animate && moveShape(direction)} 2s
    ease-in infinite;
  animation-delay: ${({ delay }) => delay}ms;
`;

const Triangle = ({ vertices, color, opacity, animate, delay, direction }) => {
  const pathData = [
    "M",
    vertices[0][0],
    vertices[0][1],
    "L",
    vertices[1][0],
    vertices[1][1],
    "L",
    vertices[2][0],
    vertices[2][1],
    "Z"
  ].join(" ");

  return (
    <StyledTriangle
      d={pathData}
      stroke="none"
      fill={color}
      opacity={opacity}
      animate={animate}
      direction={direction}
      delay={delay}
    />
  );
};

const enhance = connect(state => ({
  color: state.animations.color,
  opacity: state.animations.opacity
}));
export default enhance(Triangle);
