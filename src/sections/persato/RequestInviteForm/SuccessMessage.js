import React from 'react';
import styled from '@emotion/styled';
import Button from '@clarityhub/unity-web/lib/components/Buttons';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

import NewsletterSvg from './NewsletterSvg';

const SuccessWrapper = styled.div`
    text-align: center;

    h3 {
        padding-top: 2rem !important;
        padding-bottom: 2rem !important;
    }

    a {
        white-space: normal;
    }
`;

const ButtonWrapper = styled.div`
    > * {
        margin-top: 2rem;
    }
`;

const IconWrapper = styled.div`
    text-align: center;

    svg {
        max-height: 160px;
        width: auto;
        margin: 0 auto;
    }
`;

const SuccessMessage = () => (
	<SuccessWrapper>
		<IconWrapper>
			<NewsletterSvg />
		</IconWrapper>
		<Typography type="h3">
            Thanks for signing up!
		</Typography>

		<Typography>
            You'll be one of the first to know when we launch.
		</Typography>

		<Typography>
            Until then, you can read up on why powering your customer success team with AI can help them delight customers.
		</Typography>

		<ButtonWrapper>
			<Button
				component="a"
				buttonType="button"
				type="primary"
				block
				href="https://medium.com/clarityhub/powering-your-customer-success-team-with-ai-5c0a38a5cab8"
				target="_blank"
			>
                Learn How to Power Your Team with AI
			</Button>

			<Button
				component="a"
				buttonType="button"
				type="default"
				size="small"
				block
				href="https://stellar.clarityhub.io/"
				target="_blank"
			>
                Join Our Newsletter
			</Button>
		</ButtonWrapper>

		{/* <LinkButton href="https://stellar.clarityhub.io/" target="_blank">
            Read Our Blog
		</LinkButton> */}
	</SuccessWrapper>
);

export default SuccessMessage;
