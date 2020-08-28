import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartPlus,
  faSearchPlus
} from '@fortawesome/free-solid-svg-icons'

import StoreContext from '~/context/StoreContext'
import {
	Container,
	Wrapper,
    Left,
    Right,
    UNRL,
    Title,
    Narative
} from './styles'


const About = ({ }) => {
  
	return(
		<Wrapper>
			<Container>
                <Left>
                    <img css={UNRL} src={"https://cdn.glitch.com/c995571b-8b75-4810-b967-1fb1b241a7c2%2Funrl_waiting.png?v=1598319648098"} />
                </Left>
                <Right>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h1 css={Title}>WHO? - </h1>
                        <p css={Narative}>UNRL</p>
                    </div>
        
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h1 css={Title}>WHAT? - </h1>
                        <p css={Narative}>An individual web developer + designer with a passion 
                        for creating unique digital experiences at the intersection of technology & culture</p>
                    </div>
                    
                </Right>
			</Container>
		</Wrapper>  
	)
}

export default About
