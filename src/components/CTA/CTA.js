import React from 'react';
import Button from '@clarityhub/unity-web/lib/components/Buttons';

import RequestInviteIntent from 'src/sections/persato/RequestInviteIntent';

const CTA = ({ text = 'Start Free Trial', ...props }) => (
	<RequestInviteIntent>
		{({ onClick }) => (
			<Button color="white" {...props} onClick={onClick}>
				{text}
			</Button>
		)}
	</RequestInviteIntent>
);

export default CTA;