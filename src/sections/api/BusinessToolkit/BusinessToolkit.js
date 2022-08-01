import React from 'react';
// import Img from 'gatsby-image';
import styled from '@emotion/styled';
import Button from '@clarityhub/unity-web/lib/components/Buttons';

import { Flag } from 'src/components/Flags';
import WebsiteContainer from 'src/components/WebsiteContainer';
import { Heading2, Lead } from 'src/components/MarketingTypography';

import RequestInviteIntent from '../RequestInviteIntent';
import CodeExample from './CodeExample';

const CallToAction = styled.div`
    margin-top: 1rem;
`;

const Center = styled.div`
    text-align: center;
`;

// const ImageWrapper = styled.div`
//     max-width: 500px;
//     margin: 2rem auto;
//     text-align: center;
// `;

const LeadWrapper = styled.div`
    margin: 2rem auto 0;
    max-width: 660px;
`;

const BusinessToolkit = ({ image }) => (
	<WebsiteContainer>
		<Center>
			<Heading2 type="h2">
                Analyze Conversations in Real-Time
			</Heading2>

			<LeadWrapper>
				<Lead>
                    Clarity Hub builds powerful and flexible tools for
                    businesses to learn about their customers and engage with
                    them in meaningful ways.
				</Lead>
				<Lead>
                    Our machine learning and 
                    conversation APIs are designed to empower your business. Here's how it works:
				</Lead>
			</LeadWrapper>

			{/* <ImageWrapper>
				<Img fluid={image.fluid} />
			</ImageWrapper> */}
			<CodeExample/>

			<CallToAction>
				<RequestInviteIntent>
					{({ onClick }) => (
						<Button type="primary" onClick={onClick}>
							<Flag
								name={["config", "signup", "buttonSecondaryText"]}
								render={(flags) => flags.config.signup.buttonSecondaryText}
							/>
						</Button>
					)}
				</RequestInviteIntent>
			</CallToAction>
		</Center>
	</WebsiteContainer>
);


export default BusinessToolkit;
