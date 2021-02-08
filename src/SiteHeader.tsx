import React from 'react'
import styled from 'styled-components'
import {Bell, Columns, Grid, Home, Info, Plus, Search as FSearch} from 'react-feather'
import { spacing, spacingPx } from './theme';

export function SiteHeader() {
  return (
    <Row>
      <SiteHeaderItem leftSpacing={.4}>
        <Grid />
      </SiteHeaderItem>
      <SiteHeaderItem>
        <Home />
      </SiteHeaderItem>
      <SiteHeaderItem width={9.5}>
        <Columns />
        Boards
      </SiteHeaderItem>
      <SiteHeaderItem width={18} justifyContent='flex-end'>
        <Search/>
      </SiteHeaderItem>
      <SiteHeaderItem grow backgroundColor='' />
      <SiteHeaderItem>
        <Plus/>
      </SiteHeaderItem>
      <SiteHeaderItem>
        <Info />
      </SiteHeaderItem>
      <SiteHeaderItem>
        <Bell />
      </SiteHeaderItem>
      <SiteHeaderItem rightSpacing={.4} rounded><p>KB</p></SiteHeaderItem>
    </Row>
  )
}

type SiteHeaderItemsProps = {
  width?: number;
  rounded?: boolean;
  grow?: boolean;
  leftSpacing?: number;
  rightSpacing?: number;
  justifyContent?: 'center' | 'flex-end'
  backgroundColor?: '';
}

const Row = styled.div`
  display: flex;
  background-color: #333333;
`

const SiteHeaderItem = styled.div<SiteHeaderItemsProps>`
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

const Search = styled(FSearch)`
   margin: ${spacingPx(.2)};
`;
