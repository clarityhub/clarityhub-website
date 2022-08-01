import React from 'react';
import styled from '@emotion/styled';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';
import Button, { ButtonSet } from '@clarityhub/unity-web/lib/components/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';

import App from 'src/components/App';
import Layout from 'src/components/Layout';
import SwooshOne from 'src/components/SwooshOne';
import { Heading } from 'src/components/MarketingTypography';
import WebsiteContainer from 'src/components/WebsiteContainer';

const LandingCalloutContainer = styled.div`
    padding: 6rem 0 0;
    text-align: center;
	z-index: 1;

    @media (max-width: ${breakpoints.smallMaxWidth}px) {
        padding: 6rem 0 4rem;
    }
`;

const LandingCalloutText = styled.div`
    margin: auto;
    max-width: 500px;
`;

const LandingCallout = ({ children }) => (
	<SwooshOne>
		<WebsiteContainer>
			<LandingCalloutContainer>
				{children}
			</LandingCalloutContainer>
		</WebsiteContainer>
	</SwooshOne>
);

export default ({ location }) => {
	return (
		<App>
			<Layout location={location} stickyHeader transparentToSolid>
				<LandingCallout>
					<Heading type="h1" color="white">
						<b>You're In!</b>
					</Heading>

					<LandingCalloutText>
						<Typography color="white">
                            Thank you for joining the Clarity Hub open beta!<br/>
							Check your email (and possibly your spam folder) for your
							invite and instructions on how to onboard onto Clarity Hub.
						</Typography>
					</LandingCalloutText>
					
					<Box margin={{ top: 'xlarge' }}>
						<Card>
							<CardBody>
								<Typography type="h2" noMargin noPadding>
                                    Don't keep it a secret. Spread the word!
								</Typography>

								<Box margin={{ top: 'large', bottom: 'small' }}>

									<ButtonSet>
										<Button
											icon={<FontAwesomeIcon icon={faFacebook} />}
											component="a"
											type="primary"
											href="https://www.facebook.com/sharer/sharer.php?u=clarityhub.io" target="_blank" rel="noopener noreferrer">
                                            Share
										</Button>
										<Button
											icon={<FontAwesomeIcon icon={faTwitter} />}
											component="a"
											type="primary"
											href="https://twitter.com/intent/tweet?url=clarityhub.io&status=Get access to the Clarity Hub open beta. Streamline customer interviews and make product decisions as a team: https://clarityhub.io #productmanagement #openbeta #producttools" target="_blank" rel="noopener noreferrer">
                                            Tweet
										</Button>

										<Button
											icon={<FontAwesomeIcon icon={faLinkedin} />}
											component="a"
											type="primary"
											href="https://www.linkedin.com/shareArticle?mini=true&url=clarityhub.io&title=&summary=Get access to the Clarity Hub open beta. Streamline customer interviews and make product decisions as a team: https://clarityhub.io #productmanagement #openbeta #producttools&source=" target="_blank" rel="noopener noreferrer">
                                            Post
										</Button>
										<Button
											icon={<FontAwesomeIcon icon={faEnvelope} />}
											component="a"
											type="white"
											href="mailto:info@example.com?&subject=&body=clarityhub.io Get access to the Clarity Hub open beta. Streamline customer interviews and make product decisions as a team: https://clarityhub.io #productmanagement #openbeta #producttools" target="_blank" rel="noopener noreferrer">
                                            Email
										</Button>
									</ButtonSet>
								</Box>
							</CardBody>

						</Card>
					</Box>
				</LandingCallout>


				<Box margin="large"></Box>
			</Layout>
		</App>
	);
};

