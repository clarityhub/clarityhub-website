import React from 'react';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';

import Section from '../Section';

const HeroStyled = styled.div`
    background: ${colors.gradient.default};
    width: 100%;
`;

const HeroSection = ({ style, ...props }) => {
	return (
		<HeroStyled style={style}>
			<Section {...props} />
		</HeroStyled>
	);
};

HeroSection.propTypes = Section.propTypes;

export default HeroSection;