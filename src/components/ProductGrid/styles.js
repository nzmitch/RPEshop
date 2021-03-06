import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from "@emotion/core"

import { breakpoints } from '../../utils/styles'


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 15em;
  gap: 2.5rem;
  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
  color: black;
`

export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;
  color: black;

  :before {
    content: '- '
  }
`