import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Logo from '@clarityhub/unity-web/lib/components/svgs/Logo';
import colors from '@clarityhub/unity-core/lib/colors';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import { Menu, MenuItem } from '@clarityhub/unity-web/lib/components/Menu';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { WEBSITE_MAX_WIDTH } from 'src/designsystem/config';
import Link from '../GatsbyLink';

import { NAVBAR_HEIGHT } from './constants';
import MobileMenu from './MobileMenu';

// TODO Refactor magic numbers 
// TOOD refactor z-index
const Navbar = styled.nav(css`
    background: ${colors.gradient.default};
    color: ${colors.white.default};
    height: ${NAVBAR_HEIGHT}px;
    padding-top: 10px;
`, ({ stickyHeader }) => stickyHeader && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
`, ({ transparentToSolid }) => transparentToSolid && css`
    background: transparent;
    transition: background 0.3s ease;
`, ({ collapse }) => collapse && css`
    background: ${colors.notification.default};
    height: 65px;
`);

const PushDiv = styled.div`
    height: ${NAVBAR_HEIGHT}px;
`;

const LogoWrapper = styled.div`
    vertical-align: middle;

    a {
        align-items: center;
        border: 0;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
        margin-right: 40px;
        text-align: center;
        width: auto;
        
        border: 0;
        text-decoration: none;

        &:visited {
            border: 0;
        }
    }

    span {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-left: 15px;

       @media (max-width: 580px) {
           display: none;
       }
    }

    .h3 {
        font-size: 0.8rem;
    }

    img,
    svg  {
      height: 40px;
      width: auto;
    }
`;

const NavbarContent = styled.div(css`
    display: flex;
    margin: 20px auto 0;
    max-width: ${WEBSITE_MAX_WIDTH}px;
    transition: margin 0.3s ease;
    width: 100%;

    @media (max-width: ${WEBSITE_MAX_WIDTH + 40}px) {
        margin-left: 20px;
        margin-right: 20px;
        width: auto;
    }
`, ({ collapse }) => collapse && css`
    margin-top: 2px;
`);

const NavItems = styled.ul`
    align-items: center;
    display: flex;
    flex: 3;
    justify-content: center;
`;

const NavItem = styled.li`
    display: inline-block;
    flex: 1;
    text-align: center;

    & + & {
        margin-left: 25px;
    }
`;

const Gutter = styled.div`
    flex: 2;

    @media (max-width: 760px) {
        display: none;
    }
`;

const HideOnMobile = styled.div`
    @media(max-width: ${WEBSITE_MAX_WIDTH}px) {
        display: none;
    }
`;


const MobileOpen = styled.div`
	display: none;
	z-index: 1001;

	button {
        cursor: pointer;
		background: none;
		border: 0;
		color: white;
		padding: 0.4rem;
        font-size: 1.6rem;

        > * {
            vertical-align: middle;
        }

		&:active,
		&:focus {
			color: ${colors.dove.default};
		}
	}

	@media(max-width: ${WEBSITE_MAX_WIDTH}px) {
		display: block;
	}
`;

const MobileBackdrop = styled.button(
	css`
		display: none;
	`,
	({ isOpen }) => isOpen && css`
		display: block;
		position: fixed;
		z-index: 1002;
		border: 0;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;

		background-color: rgba(0,0,0,0.3);
	`,
);

class Header extends Component {
    state = {
    	isMobileOpen: false,
    	collapse: false,
    }

    componentDidMount() {
    	if (this.props.transparentToSolid) {
    		this._onScroll = this.onScroll.bind(this);
    		window.addEventListener('scroll', this._onScroll);
    	}
    }

    componentWillUnmount() {
    	window.removeEventListener('scroll', this._onScroll);
    }

    onScroll = () => {
    	const y = window.pageYOffset || document.documentElement.scrollTop;

    	if (y > 20) {
    		this.setState({
    			collapse: true,
    		});
    	} else {
    		this.setState({
    			collapse: false,
    		});
    	}
    }

    openMobileMenu = () => {
    	this.setState({
    		isMobileOpen: true,
    	});
    }

    closeMobileMenu = () => {
    	this.setState({
    		isMobileOpen: false,
    	});
    }

    render() {
    	const {
    		location,
    		stickyHeader = false,
    		transparentToSolid = false,
    		CTA,
    	} = this.props;
    	const { collapse, isMobileOpen } = this.state;

    	return (
    		<Fragment>
    			<Navbar stickyHeader={stickyHeader} transparentToSolid={transparentToSolid} collapse={collapse}>
    				<NavbarContent collapse={collapse}>
    					<MobileOpen>
    						<button onClick={this.openMobileMenu}>
    							<FontAwesomeIcon icon={faBars} />
    							{' '}
    							<Typography variant="heading" color="white" component="span">Clarity Hub</Typography>
    						</button>
    					</MobileOpen>

    					<MobileBackdrop
    						isOpen={isMobileOpen}
    						onClick={this.closeMobileMenu}
    					/>

    					<MobileMenu location={location} isOpen={isMobileOpen} />

    					<HideOnMobile>
    						<LogoWrapper>
    							<Link to="/" type="default">
    								<Logo />
    								<Typography variant="heading" color="white" component="span">Clarity Hub</Typography>
    							</Link>
    						</LogoWrapper>
    					</HideOnMobile>
    					<Gutter />
    					<NavItems>
    						<HideOnMobile>
    							{/* NOTE You will want to update the MobileMenu.js menu items as well */}
    							<NavItem>
    								<Menu
    									items={[
    										<MenuItem onClick={() => navigate('/use-cases/startups')}>For Startups</MenuItem>,
    										<MenuItem onClick={() => navigate('/use-cases/product-managers')}>For Product Managers</MenuItem>,
    										<MenuItem onClick={() => navigate('/use-cases/ux-researchers')}>For UX Researchers</MenuItem>,
    									]}
    								>
    									{({ open }) => <Link color="white" type="blockLink" variant="heading" onClick={(e) => {
    										e.preventDefault();
    										e.stopPropagation();
    										open();
    									}} to="#">Use Cases</Link>}
    								</Menu>
    							</NavItem>
    							<NavItem>
    								<Link color="white" type="blockLink" variant="heading" to="/pricing">
                                        Pricing
    								</Link>
    							</NavItem>
    						</HideOnMobile>
    						<NavItem style={{ textAlign: 'right' }}>
    							<CTA />
    						</NavItem>
    					</NavItems>
    				</NavbarContent>
    			</Navbar>
    			{stickyHeader && (
    				<PushDiv />
    			)}
    		</Fragment>
    	);
    }
}

export default Header;
