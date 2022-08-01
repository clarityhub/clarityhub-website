import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

import HeroSection from 'src/designsystem/HeroSection';
import Section from 'src/designsystem/Section';
import FluidContainer from 'src/designsystem/FluidContainer';

import ReadyToGetStarted from 'src/sections/persato/ReadyToGetStarted';

import App from 'src/components/App';
import Layout from 'src/components/Layout';
import CTA from 'src/components/CTA';
import { Heading, Lead } from 'src/components/MarketingTypography';
import navPullStyle from 'src/components/Header/navPullStyle';

const STARTUP_TEXT = {
	metaDescription: 'Use Clarity Hub in your startup to take customer interviews to the next level.',

	heading: 'For Startups',
	subheading: 'Your startup is talking with customers.',
	subheading2: 'Clarity Hub takes customer interviews to the next level.',

	productsHeading: 'Build Better Products',
	productsDescription1: 'The best products are built on understanding your customers.',
	productsDescription2: 'Clarity Hub gives you the tools to conduct customer interviews with ease.',
	productsDescription3: 'Record conversations, get transcriptions, and take notes – capture all of the data you gather during your interviews.',

	organizeHeading: 'Discover Insights',
	organizeDescription1: 'With all of your data in one place, we make it easy to tag and analyze your customer interviews.Truly understand your customers\' pain points, desires, and goals.',

	dataHeading: 'Work as a Team',
	dataDescription1: 'Share your notes with your team and empower everyone to discover more about your customers.',
	dataDescription2: 'Together, your team can use real - data to come up with the Next Big Thing.',
};

export default ({ location, data }) => {
	const {
		products,
		discover,
		collaborate,
	} = data;

	return (
		<App>
			<Layout location={location} stickyHeader transparentToSolid CTA={CTA}>
				<Helmet>
					<title>For Startups</title>
					<meta name="description" content={STARTUP_TEXT.metaDescription} />
				</Helmet>
				<HeroSection style={navPullStyle}>
					<Box margin={{ top: 'medium', bottom: 'xlarge' }}>
						<Heading type="h1" color="white" center>
							{STARTUP_TEXT.heading}
						</Heading>

						<Box margin={{ top: 'small' }}>
							<Lead color="white" center>
								{STARTUP_TEXT.subheading}
							</Lead>
							<Lead color="white" center>
								{STARTUP_TEXT.subheading2}
							</Lead>
						</Box>
					</Box>
				</HeroSection>

				<Box margin={{ top: 'large' }} />

				<Section>
					<Box margin={{ top: 'large', bottom: 'large' }}>
						<FluidContainer breakAt={['mobile']} flipDirectionOnBreak>
							<Box>
								<Box margin={{ bottom: 'small' }}>
									<Typography type="h3">
										{STARTUP_TEXT.productsHeading}
									</Typography>
								</Box>

								<Typography>
									{STARTUP_TEXT.productsDescription1}
								</Typography>

								<Typography>
									{STARTUP_TEXT.productsDescription2}
								</Typography>

								<Typography>
									{STARTUP_TEXT.productsDescription3}
								</Typography>
							</Box>
							<Box>
								<Box flex={1} style={{ width: '100%', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
									<Img fluid={products.childImageSharp.fluid} />
								</Box>
							</Box>
						</FluidContainer>
					</Box>
				</Section>

				<Section>
					<Box margin={{ top: 'large', bottom: 'large' }}>
						<FluidContainer breakAt={['mobile']}>
							<Box>
								<Box flex={1} style={{ width: '100%', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
									<Img fluid={discover.childImageSharp.fluid} />
								</Box>
							</Box>
							<Box>
								<Box margin={{ bottom: 'small' }}>
									<Typography type="h3">
										{STARTUP_TEXT.organizeHeading}
									</Typography>
								</Box>

								<Typography>
									{STARTUP_TEXT.organizeDescription1}
								</Typography>
							</Box>
						</FluidContainer>
					</Box>
				</Section>

				<Section>
					<Box margin={{ top: 'large', bottom: 'large' }}>
						<FluidContainer breakAt={['mobile']} flipDirectionOnBreak>
							<Box>
								<Box margin={{ bottom: 'small' }}>
									<Typography type="h3">
										{STARTUP_TEXT.dataHeading}
									</Typography>
								</Box>

								<Typography>
									{STARTUP_TEXT.dataDescription1}
								</Typography>
								<Typography>
									{STARTUP_TEXT.dataDescription2}
								</Typography>
							</Box>
							<Box>
								<Box flex={1} style={{ width: '100%', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
									<Img fluid={collaborate.childImageSharp.fluid} />
								</Box>
							</Box>
						</FluidContainer>
					</Box>
				</Section>

				<ReadyToGetStarted />
			</Layout>
		</App>
	);
};

export const query = graphql`
    query {
        products: file(relativePath: {
            eq: "build-better-products.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        discover: file(relativePath: {
            eq: "discover-insights.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        collaborate: file(relativePath: {
            eq: "collaborate.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
	}
`;