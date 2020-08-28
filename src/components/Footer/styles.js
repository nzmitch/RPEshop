import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'



export const stampWrapper = css`
    display: inline-block;
    position: relative;
`

export const Ul = css`
    display: inline-block;
    position: fixed;
    right: 15em;
    bottom: 6em;
    @media (max-width: 768px) {
        display: flex;
        bottom: 0;
        flex-flow: row nowrap;
    p {
    padding: 0px 1em;
    font-size: 2.1vmin
  }
  }

`
export const stampPath = css`
    position: fixed;
    z-index: 9;
    right: -3rem;
    bottom: -4rem;
`

export const Logo = css`
    position: fixed;
    z-index: 9;
    right: 1rem;
    bottom: 1rem;
`

export const Wrapper = styled.div`
    width: 100%;
`

export const Container = styled.div`

    z-index: 9;
    right: 0rem;
    bottom: 0rem;
    cursor: pointer;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #ababab;
  opacity: 0.7;
`

