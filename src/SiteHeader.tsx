import React from 'react'
import styled from 'styled-components'
import { Bell, Columns, Grid, Home, Info, Plus } from 'react-feather'
import {Search as FSearch} from 'react-feather'
import { RowItem } from './components'
import { spacingPx } from './theme'

export function SiteHeader() {
  return (
    <Row>
      <RowItem leftSpacing={.4}>
        <Grid />
      </RowItem>
      <RowItem>
        <Home />
      </RowItem>
      <RowItem width={9.5}>
        <Columns />
        Boards
      </RowItem>
      <RowItem width={18} justifyContent='flex-end'>
        <Search/>
      </RowItem>
      <RowItem grow backgroundColor='' />
      <RowItem>
        <Plus/>
      </RowItem>
      <RowItem>
        <Info />
      </RowItem>
      <RowItem>
        <Bell />
      </RowItem>
      <RowItem backgroundColor='#db8d69' rightSpacing={.4} rounded>
        <p>KB</p>
       </RowItem>
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  background-color: #000;
  opacity: 30%;
`

const Search = styled(FSearch)`
   margin: ${spacingPx(.2)};
`;
