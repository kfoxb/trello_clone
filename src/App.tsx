import React from 'react'
import trace from './trello.png'
import styled from 'styled-components'
import { SiteHeader } from './SiteHeader'
import { BoardHeader } from './BoardHeader'
import { CardContainer } from './CardContainer'

export function App() {
  return (
    <>
      <Trace src={trace} alt="logo" />
    <Grid>
      <SiteHeader></SiteHeader>
      <BoardHeader></BoardHeader>
      <CardContainer></CardContainer>
    </Grid>
    </>
  );
}

const Trace = styled('img')`
  width: 100%;
  position: absolute;
  opacity: 30%;
`

const Grid = styled('div')`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 40px 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "."
    "."
    ".";
`
