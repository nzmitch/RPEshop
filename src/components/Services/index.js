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
    serviceWrapper,
    Title,
    Narative,
    Line,
    Ul,
    includesP,
    note

} from './styles'


const Services = ({ }) => {
    
    function ShopifyModule() {
        var x = document.getElementById("ShopifyModule");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
    function VirtualPopUpModule() {
        var x = document.getElementById("VirtualPopUpModule");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
    function WebVr() {
        var x = document.getElementById("WebVr");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
    
  
	return(
		<Wrapper>
			<Container>
                <h1 css={Title}>SERVICES</h1>
                <p css={Narative}>UNRL specializes in growing brands with accessible & affordable eCommerce solutions</p>
                
                <div css={serviceWrapper}>
                    <div onClick={ShopifyModule} >
                        <h2 style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}> <span style={{color: '#ababab', opacity: '0.7'}}>01</span> <Line></Line>Headless shopify store build</h2>
                    </div>
                    <div style={{display: 'none'}} id="ShopifyModule">
                        <p style={{width: '60%'}}>Headless eCommerce separates your front-end design from your back-end infrastructure, empowering you to publish to and from virtually any platform. This allows for completely unique Shopify builds that set you apart from your competitors.</p>
                        <div css={Ul}>
                            <p css={includesP}> <span style={{color: '#ababab', opacity: '0.7'}}>-</span> Consultation</p>
                            <p css={includesP}> <span style={{color: '#ababab', opacity: '0.7'}}>-</span> SEO</p>
                            <p css={includesP}> <span style={{color: '#ababab', opacity: '0.7'}}>-</span> Desktop & phone optimization</p>
                            <p css={includesP}> <span style={{color: '#ababab', opacity: '0.7'}}>-</span> Technical Set-up</p>
                            <p css={includesP}> <span style={{color: '#ababab', opacity: '0.7'}}>-</span> Asset creation [if required Price will vary]</p>
                            <p css={note}> <span style={{color: '#ababab', opacity: '0.7'}}>*</span> Purchaser is responsible for providing all content. All external links must be provided <span style={{color: '#ababab', opacity: '0.7'}}>*</span></p> 
                        </div>
                        <p>Example 01</p>
                    </div>
        
                    <div onClick={VirtualPopUpModule} >
                        <h2 style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}> <span style={{color: '#ababab', opacity: '0.7'}}>02</span> <Line></Line>Virtual pop-up store</h2>
                    </div>
                    <div style={{display: 'none'}} id="VirtualPopUpModule">
                        <p style={{width: '60%'}}>Notypo strives to bring a brand’s personality to life through unique shopping experiences outside of there regular website and provide a more tangible point of differentiation from its competitors.</p>
                        <p style={{width: '60%'}}>The duration of a virtual pop-up store can vary, depending on its purpose and goal. Some pop-ups are only around for a few days, while others stay for two weeks or even months.</p>
                        <p>Example 01</p>
                    </div>
        
                    <div onClick={WebVr} >
                        <h2 style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}> <span style={{color: '#ababab', opacity: '0.7'}}>02</span> <Line></Line>WebVR</h2>
                    </div>
                    <div style={{display: 'none'}} id="WebVr">
                        <p style={{width: '60%'}}>WebVR has become so well-known that it needs no introduction. However, developing VR apps is still a mystery to most people. Notypo offers an affordable entry point into the world of VR.</p>
                        <p>Example 01</p>
                    </div>
                </div>
                
			</Container>
		</Wrapper>  
	)
}

export default Services
