import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

import { WEBSITE_MAX_WIDTH } from 'src/designsystem/config';
import colors from '@clarityhub/unity-core/lib/colors';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import CTA from '../CTA';

import Link from '../GatsbyLink';

const MobileLink = styled(Link)`
    color: ${colors.dark.default};
    font-size: 1.2rem;
    padding: 1.2rem;
    text-decoration: none;
    text-align: left;

    &:before {
        background: transparent !important;
    }

    &:visited {
        color: ${colors.dark.default} !important;
        text-decoration: none !important;
    }

    ${({ isActive }) => isActive && css`
        font-weight: 800;
    `}
`;

const MobileMenuStyled = styled.div`
    display: none;
    background: #ecf0f7;
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08), 0 2px 4px 0 rgba(50,50,93,0.11); */
    width: 80%;
    height: 100%;
	overflow: auto;
	z-index: 1001;

	@media(max-width: ${WEBSITE_MAX_WIDTH}px) {
        display: flex;
		position: fixed;
        padding: 1rem;
		left: -100%;
		top: 0;
		bottom: 0;
		transition: all 0.3s ease-out;
        align-items: center;
        align-content: center;

		width: 90%;
		max-width: 80%;
		z-index: 1003;

		${({ isOpen }) => isOpen && css`
			left: 0;
			right: auto;
		`}
	}
`;

const MobileMenu = ({ location, isOpen }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	return (
		<MobileMenuStyled isOpen={isOpen}>
			<div>
				<Typography type="h1" color="dark">Clarity Hub</Typography>

				<MobileLink 
					to="/"
					isActive={location.pathname === '/'}
					color="dark"
					type="blockLink"
					variant="heading"
				>
                    Home
				</MobileLink>
				<MobileLink 
					to="/pricing"
					isActive={location.pathname === '/pricing'}
					color="dark"
					type="blockLink"
					variant="heading"
				>
                    Pricing
				</MobileLink>

				<MobileLink 
					to="/use-cases/startups"
					isActive={location.pathname === '/use-cases/startups'}
					color="dark"
					type="blockLink"
					variant="heading"
				>
                    Use Case: Startups
				</MobileLink>
				<MobileLink 
					to="/use-cases/product-managers"
					isActive={location.pathname === '/use-cases/product-managers'}
					color="dark"
					type="blockLink"
					variant="heading"
				>
                    Use Case: Customer Interviews
				</MobileLink>
				<MobileLink 
					to="/use-cases/ux-researchers"
					isActive={location.pathname === '/use-cases/ux-researchers'}
					color="dark"
					type="blockLink"
					variant="heading"
				>
                    Use Case: UX Research
				</MobileLink>

				<Box margin={{ top: 'large' }}>
				    <CTA  />
				</Box>
			</div>

		</MobileMenuStyled>
	);
};

export default MobileMenu;
