import React from 'react';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';

import { oneOfType, node, func, bool } from 'prop-types';
import ContentContainer from '../ContentContainer';

const Section = ({
	children,
	fullWidthContent = false,
	...props
}) => {
	let content = (
		<ContentContainer>
			{children}
		</ContentContainer>
	);

	if (fullWidthContent) {
		content = children;
	}

	return (
		<Box {...props}>
			{content}
		</Box>
	);
};

Section.propTypes = {
	children: oneOfType([node, func]).isRequired,
	fullWidthContent: bool,
};

export default Section;