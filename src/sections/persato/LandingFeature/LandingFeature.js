import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';

const LandingFeatureContainer = styled.div`
	margin-top: 0rem;
	flex: 1;
	display: flex;
	flex-direction: row;

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		margin-top: 8rem;
		margin-bottom: 4rem;
		flex-direction: column;

		${({ left }) => left && css`
			flex-direction: column-reverse;
		`}
	}
`;

const LandingFeature = ({ children, left = false }) => (
	<LandingFeatureContainer left={left}>
		{children}
	</LandingFeatureContainer>
);

export default LandingFeature;
