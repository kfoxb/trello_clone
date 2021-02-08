import styled from "styled-components";
import { spacingPx } from "../theme";

type RowItemProps = {
  width?: number;
  rounded?: boolean;
  grow?: boolean;
  leftSpacing?: number;
  rightSpacing?: number;
  justifyContent?: 'center' | 'flex-end'
  backgroundColor?: string;
}

export const RowItem = styled.div<RowItemProps>`
  align-items: center;
  background-color: ${({backgroundColor = 'white'}) => backgroundColor};
  border-radius: ${({rounded}) => rounded ? '50%' : '2px'};
  display: flex;
  flex-grow: ${({ grow }) => grow ? '1' : ''};
  height: ${spacingPx(3.2)};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  margin: ${
   ({leftSpacing, rightSpacing}) =>
   `${spacingPx(.4)} ${spacingPx(rightSpacing || .2)} ${spacingPx(.4)} ${spacingPx(leftSpacing || .2)}`
   };
  opacity: 100%;
  width: ${({ width = 3.2 }) => spacingPx(width)};
`
