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

const RESEARCH_TEXT = {
	metaDescription: 'Use Clarity Hub to streamline and elevate your UX Research.',

	heading: 'For UX Researchers',
	subheading1: 'Your customer conversations are full of insights.',
	subheading2: 'Use Clarity Hub to analyze actual customer feedback and form data-driven insights.',

	insightsHeading: 'Customer-centric Tools',
	insightsDescription1: 'Learn about your customers by using our audio recording tools that give you automatic transcripts.',

	organizeHeading: 'Data-driven Focus',
	organizeDescription1: 'Gather unstructured data like transcripts, audio recordings, and your own insights. Then turn that into structured data by using tags.',

	dataHeading: 'Share Results',
	dataDescription1: 'Collaborate with your team. Write up your insights using our rich-text editors and use real data to back up your insights and ideas.',
};

export default ({ location, data }) => {
	const {
		laptop,
		asData,
		collaborate,
	} = data;

	return (
		<App>
			<Layout location={location} stickyHeader transparentToSolid CTA={CTA}>
				<Helmet>
					<title>For UX Researchers</title>
					<meta name="description" content={RESEARCH_TEXT.metaDescription} />
				</Helmet>
				<HeroSection style={navPullStyle}>
					<Box margin={{ top: 'medium', bottom: 'xlarge' }}>
						<Heading type="h1" color="white" center>
							{RESEARCH_TEXT.heading}
						</Heading>

						<Box margin={{ top: 'small' }}>
							<Lead color="white" center>
								{RESEARCH_TEXT.subheading1}
							</Lead>
							<Lead color="white" center>
								{RESEARCH_TEXT.subheading2}
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
										{RESEARCH_TEXT.insightsHeading}
									</Typography>
								</Box>

								<Typography>
									{RESEARCH_TEXT.insightsDescription1}
								</Typography>
							</Box>
							<Box>
								<Box flex={1} style={{ width: '100%', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
									<Img fluid={laptop.childImageSharp.fluid} />
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
									<Img fluid={asData.childImageSharp.fluid} />
								</Box>
							</Box>
							<Box>
								<Box margin={{ bottom: 'small' }}>
									<Typography type="h3">
										{RESEARCH_TEXT.organizeHeading}
									</Typography>
								</Box>

								<Typography>
									{RESEARCH_TEXT.organizeDescription1}
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
										{RESEARCH_TEXT.dataHeading}
									</Typography>
								</Box>

								<Typography>
									{RESEARCH_TEXT.dataDescription1}
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
        laptop: file(relativePath: {
            eq: "two-people-laptop.png"
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

        asData: file(relativePath: {
            eq: "interviews-as-data.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
	}
`;