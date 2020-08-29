import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const stampWrapper = css`
    display: inline-block;
    position: relative;
`

export const Ul = css`
    display: inline-block;
    position: fixed;
    right: 15em;
    bottom: 6em;
    @media (max-width: ${breakpoints.s}px) {
        display: none;
       
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
    width: 7em;
    @media (max-width: ${breakpoints.s}px) {
        width: 5.5em;
       
    } 
`

export const Gear = css`
    width: 15em;
    @media (max-width: ${breakpoints.s}px) {
        width: 13em;
       
    } 
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

