import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartPlus,
  faSearchPlus,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'


import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	MenuLink,
	Wrapper,
    NavTitle,
    Logo,
    Ul,
    Cartcontainer,
    Line,
    CartLink,
    NavCart,
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
		<Wrapper>
			<Container>
                
				<MenuLink style={{}}  to='/'>
				    <img css={Logo} src={"https://cdn.glitch.com/b69c105d-ed63-424a-883d-e8bff39866c6%2Fred%20copy.png?v=1601679028313"} />
				</MenuLink>
                
                <Cartcontainer>
                    <MenuLink to='/policies'>
                        FAQ
                    </MenuLink>
                    <Line></Line>
                  <CartLink to='/cart'>
                    {hasItems &&
				      <CartCounter>
                        {quantity}
				      </CartCounter>
				    }
                     <FontAwesomeIcon icon={faShoppingCart} size="" />
                  </CartLink>
               </Cartcontainer>
			</Container>
		</Wrapper>
        
        
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
