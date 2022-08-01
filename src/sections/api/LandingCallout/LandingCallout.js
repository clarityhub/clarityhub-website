/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Button from '@clarityhub/unity-web/lib/components/Buttons';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';

import { Flag } from 'src/components/Flags';
import { Column, Columns } from 'src/components/Columns';
import SwooshOne from 'src/components/SwooshOne';
import { Heading, Lead } from 'src/components/MarketingTypography';
import WebsiteContainer from 'src/components/WebsiteContainer';

import RequestInviteIntent from '../RequestInviteIntent';

const CallToAction = styled.div`
    margin-top: 2rem;
`;

// TODO Refactor component
const SignUpForInviteButton = () => (
	<RequestInviteIntent>
		{({ onClick }) => (
			<Button type="white" onClick={onClick}>
				<Flag
					name={["config", "signup", "buttonText"]}
					render={(flags) => flags.config.signup.buttonText}
				/>
			</Button>
		)}
	</RequestInviteIntent>
);

const LandingCalloutContainer = styled.div`
    padding: 6rem 0 12rem;
	z-index: 1;

    @media (max-width: ${breakpoints.smallMaxWidth}px) {
        padding: 6rem 0 8rem;
    }
`;

const LandingCallout = ({ image }) => (
	<SwooshOne>
		<WebsiteContainer>
			<LandingCalloutContainer>
				<Columns css={css`
					align-items: center;
					justify-items: center;
				`}>
					<Column flex={1} css={css`
						flex-direction: column;
						justify-content: center;
						text-align: center;
					`}>
						<Heading type="h1" color="white" css={css`
							line-height: 3.5rem;
						`}>
							<b>Natural Language Understanding</b>
							<br/>
							without all the work
						</Heading>
						<Lead color="white">
							Build amazing customer experiences using our real-time Natural Language APIs.
						</Lead>

						<Box padding={{ top: 'xlarge' }}>
							<CallToAction>
								<SignUpForInviteButton />
							</CallToAction>
						</Box>
					</Column>
				</Columns>
			</LandingCalloutContainer>
		</WebsiteContainer>
	</SwooshOne>
);

export default LandingCallout;
