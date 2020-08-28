import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from "@emotion/core"


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

`

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 90%;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3em;
  
`

export const Left = styled.div`
  
`

export const Right = styled.div`
  white-space: pre-wrap;
`

export const UNRL = css`
  width: 50em;
`

export const Title = css`
  font-size: 4em;

`

export const Narative = css`
  font-size: 1.2em;
  width: 60%;

`

