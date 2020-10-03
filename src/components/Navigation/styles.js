import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from "@emotion/core"

export const Logo = css`
  width: 10em;
  margin-right: 3rem;
  margin-left: 3rem;
`

export const Ul = css`
  listStyle: none;
  float: none;
  display: inline-block;
  width: 100%;
  margin: 0 auto;
  padding: 0 3em 0 0; 
`
export const Cartcontainer = styled.div`
  display: flex;
  padding: 2em;
  right: 0;
  position: absolute
`

export const Line = styled.div`
  height: 20px;
  background: #9a142e;
  width: 4px;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
` 

export const Wrapper = styled.div`
    top: 0;
    width: 100%;
`

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  text-align: right;
  display: flex;
  padding-top: 3em;
  padding-bottom: 9em;
`
export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
`

export const CartLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
`

export const CartCounter = styled.span`
  background-color: transparent;
  color: #9a142e;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

export const NavTitle = styled.h1`
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: 5px;
  font-weight: normal;
  text-decoration: none;
  color: black;
  padding: 0  0 0;
  margin: 0px
`





