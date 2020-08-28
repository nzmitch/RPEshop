import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

import StoreContext from '~/context/StoreContext'
import { Wrapper, Container, stampWrapper, stampPath, Ul, Logo, MenuLink } from './styles'

const Footer = ({}) => {
        useEffect(() => {
            ;
            (function () {
                var throttle = function (type, name, obj) {
                    var obj = obj || window;
                    var running = false;
                    var func = function () {
                        if (running) {
                            return;
                        }
                        running = true;
                        requestAnimationFrame(function () {
                            obj.dispatchEvent(new CustomEvent(name));
                            running = false;
                        });
                    };
                    obj.addEventListener(type, func);
                };
                throttle("scroll", "optimizedScroll");
            })();

            var gear = document.getElementById("gear");

            // to use the script *without* anti-jank, set the event to "scroll" and remove the anonymous function.

            window.addEventListener("optimizedScroll", function () {
                gear.style.transform = "rotate(" + window.pageYOffset + "deg)";
            });
        })

    return (
        <Wrapper>
            <Container>
                <div css={Ul}>
                    <MenuLink to='/policies'>
                        <p>Twitter</p>
                    </MenuLink>
                    <MenuLink to='/policies'>
                        <p>Instagram</p>
                    </MenuLink>
                    <MenuLink to='/policies'>
                        <p>Dribble</p>
                    </MenuLink>
                </div>

                <div css={stampWrapper}>
                        <img css={Logo} style={{ width: '7em' }} src={'https://cdn.glitch.com/c995571b-8b75-4810-b967-1fb1b241a7c2%2FnotypoGlobe.png?v=1598083837005'}/>
                    <div css={stampPath}>
                        <img id="gear" style={{ width: '15em' }} src={'https://cdn.glitch.com/c995571b-8b75-4810-b967-1fb1b241a7c2%2Ftechculture.png?v=1598401406427'}/>
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Footer
