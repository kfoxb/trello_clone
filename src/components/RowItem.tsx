import styled from "styled-components";
import { spacingPx } from "../theme";

type RowItem = {
  width?: number;
  rounded?: boolean;
  grow?: boolean;
  leftSpacing?: number;
  rightSpacing?: number;
  justifyContent?: 'center' | 'flex-end'
  backgroundColor?: string;
}

export const RowItem = styled.div<RowItem>`
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  background-color: ${({backgroundColor = 'white'}) => backgroundColor};
  margin: ${
   ({leftSpacing, rightSpacing}) =>
   `${spacingPx(.4)} ${spacingPx(rightSpacing || .2)} ${spacingPx(.4)} ${spacingPx(leftSpacing || .2)}`
   };
  height: ${spacingPx(3)};
  width: ${({ width = 3 }) => spacingPx(width)};
  border-radius: ${({rounded}) => rounded ? '50%' : ''};
  flex-grow: ${({ grow }) => grow ? '1' : ''};
  opacity: 80%;
`
