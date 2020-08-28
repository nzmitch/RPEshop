import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from "@emotion/core"


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

`

export const Container = styled.div`
  align-items: center;
  margin: 0 auto;
  max-width: 90%;
  text-align: left;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3em;
  
`
export const serviceWrapper = css`
    margin: 10em 5em 0em 5em;

`

export const Title = css`
  font-size: 4em;

`

export const Narative = css`
  font-size: 1.2em;
  width: 35%;

`

export const Line = styled.div`
  height: 4px;
  background: #ababab;
  opacity: 0.7;
  width: 60px;
  display: inline-block;
  margin: 0em 1.5em 0em 1.5em;
`

export const Ul = css`
    display: inline-block;
`

export const includesP = css`
  font-size: 0.9em;
  width: 75%;
  margin: 0.4em 0em 0em 0em;
  padding: 0em;

`

export const note = css`
  font-size: 0.8em;
  width: 100%;
  margin: 1em 0em 0em 0em;
  padding: 0em;

`
