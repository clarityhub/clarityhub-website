import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComments, faLightbulb } from '@fortawesome/free-regular-svg-icons'; 
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'; 
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import colors from '@clarityhub/unity-core/lib/colors';

import LandingFeature from 'src/sections/persato/LandingFeature';
import ReadyToGetStarted from 'src/sections/persato/ReadyToGetStarted';
import BlogPosts from 'src/sections/persato/BlogPosts';

import App from '../components/App';
import Layout from '../components/Layout';
import Blob02 from '../components/Blobs/Blob02';
import Blob03 from '../components/Blobs/Blob03';
import Blob04 from '../components/Blobs/Blob04';
import Blob05 from '../components/Blobs/Blob05';
import SwooshOne from '../components/SwooshOne';
import CTA from '../components/CTA';
import { Heading, Heading2, Lead } from '../components/MarketingTypography';
import WebsiteContainer from '../components/WebsiteContainer';

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

const LandingPreviewContainer = styled.div`
    position: relative;
	height: 500px;
	margin-top: 6rem;

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		height: 20vw;
		margin-top: 24vw;
	}
`;

const LandingPreview = ({ children }) => (
	<WebsiteContainer>
		<LandingPreviewContainer>
		    {children}
		</LandingPreviewContainer>
	</WebsiteContainer>
);

const LandingPreviewDesktop = styled.div`
	position: absolute;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		transform: translate(0%, 0%);
		left: 25vw;
		top: -60%;
		width: 90vw;
	}

	@media (max-width: ${breakpoints.xsmallMaxWidth}px) {
		transform: translate(0%, 0%);
		left: 35vw;
		top: -60%;
		width: 118vw;
	}
`;

const LandingPreviewPhone = styled.div`
	position: absolute;
	width: 200px;
	bottom: -40px;
	right: -40px;

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		top: -60%;
		left: -8%;
		transform: translate(0%, 0%);
		width: 30vw;
	}

	@media (max-width: ${breakpoints.xsmallMaxWidth}px) {
		top: -60%;
		left: -10%;
		transform: translate(0%, 0%);
		width: 40vw;
	}
`;


const LandingFeatures = styled(Box)`
	margin-top: 4rem;
	width: 100%;
`;

const LandingFeatureAsideContainer = styled.div`
	flex: 1;
	padding: 4rem;
	align-self: center;
`;

const LandingFeatureAsideContent = styled.div`
	float: right;
	max-width: 600px;

	${({ left }) => left && css`
		float: left;
	`}

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		float: none;
		width: auto;
	}

	> * + * {
		margin-top: 2rem;
	}
`;

const LandingFeatureAside = ({ children, left = false }) => (
	<LandingFeatureAsideContainer>
		<LandingFeatureAsideContent left={left}>
			{children}
		</LandingFeatureAsideContent>
	</LandingFeatureAsideContainer>
);

const LandingFeatureImageContainer = styled.div`
	flex: 1;
	position: relative;
`;

const LandingFeatureImageBlob = styled.div`
	height: 700px;
	width: 50vw;
	position: absolute;
	top: 0;

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		height: 300px;
		width: 100%;
	}

	svg {
		position: absolute;
		max-height: 700px;
		max-width: 50vw;
		width: 100%;
		left: 0;

		${({ left }) => left && css`
			left: initial;
			right: 0;
		`}

		@media (max-width: ${breakpoints.smallMaxWidth}px) {
			max-height: 360px;
			max-width: 100%;
		}
	}
`;

const LandingFeatureImageImage = styled.div`
	position: absolute;

	top: 50%;
	transform: translate(0, -50%);
	width: 60vw;
	/* right: -12vw; */
	left: 2%;
	max-width: 900px;

	box-shadow: ${colors.shadow.default};

	${({ left }) => left && css`
		right: 2%;
		left: initial;
		/* left: -12vw; */
	`}

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		/* max-height: 320px; */
		max-width: 500px;
		width: 90%;
		left: 50%;
		right: auto;
		top: 52%;
		transform: translate(-50%, -50%);
	}
`;

const LandingFeatureImageHidden = styled.div`
	opacity: 0;

	height: 700px;
	width: 50vw;

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		height: 300px;
		width: 100%;
	}
`;

const LandingFeatureImage = ({ left = false, image, blob: Blob }) => (
	<LandingFeatureImageContainer>
		<LandingFeatureImageHidden>
			<Blob />
		</LandingFeatureImageHidden>
		<LandingFeatureImageBlob left={left}>
			<Blob/>
		</LandingFeatureImageBlob>
		<LandingFeatureImageImage left={left}>
			<Img fluid={image.childImageSharp.fluid} />
		</LandingFeatureImageImage>
	</LandingFeatureImageContainer>
);

const LandingFeatureAsideDescription = styled(Typography)`
	max-width: 400px;
`;

export default ({ location, data }) => {
	const {
		productHighlights,
		productHighlightsBrowser,
		productHighlightsPhone,
		productDashboard,
		productInterviewRecording,
		productInterviewWithComments,
	} = data;

	return (
		<App>
			<Layout location={location} stickyHeader transparentToSolid CTA={CTA}>
				<LandingCallout>
					<Heading type="h1" color="white">
                        Understand Your Customers,<br/>Build Better Products
					</Heading>

					<LandingCalloutText>
						<Lead color="white">
							Clarity Hub brings all your customer interview data together for you
							to organize, analyze, and make decisions.
						</Lead>
					</LandingCalloutText>

					<Box padding={{ top: 'xlarge' }}>
						<div>
							<CTA />
						</div>
					</Box>
					<LandingPreview>
						<LandingPreviewDesktop>
							<Img fluid={productHighlightsBrowser.childImageSharp.fluid} />
						</LandingPreviewDesktop>

						<LandingPreviewPhone>
							<Img fluid={productHighlightsPhone.childImageSharp.fluid} />
						</LandingPreviewPhone>
					</LandingPreview>
				</LandingCallout>

				<LandingFeatures>
					<LandingFeature>
						<LandingFeatureAside>
							<FontAwesomeIcon size="3x" icon={faLightbulb} />

							<Heading2>
								Your <b>Workspace</b> for Research
							</Heading2>

							<Typography>
								Gain insights about your customers, gather data, and organize it to build better products that your customers will love.
							</Typography>
						</LandingFeatureAside>

						<LandingFeatureImage
							blob={Blob05}
							image={productDashboard}
						/>
					</LandingFeature>

					<LandingFeature left>
						<LandingFeatureImage
							left
							blob={Blob03}
							image={productInterviewWithComments}
						/>

						<LandingFeatureAside left>
							<FontAwesomeIcon size="3x" icon={faComments} />
							
							<Heading2>
								<b>Collaborate</b> with Your Team
							</Heading2>

							<Typography>
								Chat with your team about insights, interviews, and product decisions.
							</Typography>
						</LandingFeatureAside>
					</LandingFeature>


					<LandingFeature>
						<LandingFeatureAside>
							<FontAwesomeIcon size="3x" icon={faMicrophone} />

							<Heading2>
								<b>Streamline</b> Customer Interviews
							</Heading2>

							<Typography>
								Do customer interviews with confidence, knowing that can you play back the recording
								at any time, or search the transcript at your convenience.
							</Typography>
						</LandingFeatureAside>

						<LandingFeatureImage
							blob={Blob04}
							image={productInterviewRecording}
						/>
					</LandingFeature>

					<LandingFeature left>
						<LandingFeatureImage
							left
							blob={Blob02}
							image={productHighlights}
						/>
						<LandingFeatureAside left>
							<FontAwesomeIcon size="3x" icon={faThumbsUp} />

							<Heading2>
								Make Decisions with <b>Confidence</b>
							</Heading2>

							<LandingFeatureAsideDescription>
								Use Clarity Hub to cut through the noise and make decisions based on customer evidence.
							</LandingFeatureAsideDescription>
						</LandingFeatureAside>
						
					</LandingFeature>
				</LandingFeatures>
				
				<ReadyToGetStarted />

				<BlogPosts />
			</Layout>
		</App>
	);
};

export const query = graphql`
    query {
        productHighlightsBrowser: file(relativePath: {
            eq: "product-highlights-browser.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 1800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        productHighlightsPhone: file(relativePath: {
            eq: "product-highlights-phone.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        productHighlights: file(relativePath: {
            eq: "product-highlights.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        productDashboard: file(relativePath: {
            eq: "product-dashboard.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        productInterviewRecording: file(relativePath: {
            eq: "product-interview-recording.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        productInterviewWithComments: file(relativePath: {
            eq: "product-interview-with-comments.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
