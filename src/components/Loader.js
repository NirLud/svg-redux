import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  SetShape,
  SetSize,
  SetDirection,
  SetOpacity,
  SetColor
} from "../store/actions/animations";
import Triangle from "./Triangle";

const Button = styled.button`
  width: 90px;
  height: 60px;
`;

const SettingsPanel = styled.div`
  marginbottom: 20px;
`;

const vertices = [[0, 60], [30, 0], [60, 60]];
const vertices2 = [[5, 60], [30, 10], [55, 60]];
const vertices3 = [[10, 60], [30, 20], [50, 60]];
const vertices4 = [[15, 60], [30, 30], [45, 60]];
const vertices5 = [[20, 60], [30, 40], [40, 60]];
const vertices6 = [[25, 60], [30, 50], [35, 60]];

const trianglesVertices = [
  vertices,
  vertices2,
  vertices3,
  vertices4,
  vertices5,
  vertices6
];

const Loader = ({
  size,
  direction,
  opacity,
  SetShape,
  SetSize,
  SetOpacity,
  SetDirection,
  SetColor
}) => {
  if (!size || !size.width) {
    SetSize({
      width: 90,
      height: 90
    });
  }
  return (
    <React.Fragment>
      <SettingsPanel>
        <Button
          onClick={() =>
            SetSize({
              width: size.width + 10,
              height: size.height + 10
            })
          }
        >
          + size
        </Button>
        <Button
          onClick={() =>
            SetSize({
              width: size.width - 10,
              height: size.height - 10
            })
          }
        >
          - size
        </Button>
        <Button
          onClick={() =>
            SetDirection({
              direction: "horizontal"
            })
          }
        >
          horizontal
        </Button>
        <Button
          onClick={() =>
            SetDirection({
              direction: "vertical"
            })
          }
        >
          vertical
        </Button>
        <Button onClick={() => SetOpacity(opacity + 0.01)}>+ opacity</Button>
        <Button onClick={() => SetOpacity(opacity - 0.01)}>- opacity</Button>
        <select onChange={event => SetColor(event.target.value)}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="black">black</option>
        </select>
      </SettingsPanel>
      <svg
        width={`${size.width}%` || "50%"}
        height={`${size.height}%` || "50%"}
        viewBox="0 0 100 100"
      >
        <g>
          {trianglesVertices.map((vertices, index) => (
            <Triangle
              key={index}
              animate
              direction={direction}
              delay={index * 100}
              vertices={vertices}
            />
          ))}
        </g>
      </svg>
    </React.Fragment>
  );
};

const enhance = connect(
  state => ({
    animations: state.animations,
    size: state.animations.size,
    direction: state.animations.direction,
    opacity: state.animations.opacity
  }),
  { SetShape, SetSize, SetDirection, SetOpacity, SetColor }
);

export default enhance(Loader);
