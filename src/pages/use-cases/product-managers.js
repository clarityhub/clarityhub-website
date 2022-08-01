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

const INTERVIEW_TEXT = {
	metaDescription: 'Use Clarity Hub to record your customer interviews and build insights on data.',

	heading: 'For Product Managers',
	subheading: 'Turn your customer interviews into data to drive business decisions.',
    
	description1: 'Your customer interviews are valuable.',
	description2: 'Record audio and get automatic transcriptions so you can remember your entire conversation.',

	insightsHeading: 'Capture Insights',
	insightsDescription1: 'Write down notes while recording your customer interviews.',
	insightsDescription2: 'Our rich - text editor lets you capture all of your thoughts.',

	organizeHeading: 'Organize Your Interviews',
	organizeDescription1: 'Pull out direct quotes from your transcripts to highlight important problems your customers are having.Or maybe you want the team to see some positive feedback that you customer mentioned!',

	dataHeading: 'Turn Interviews Into Data',
	dataDescription1: 'Use our tagging system to tag text in your transcripts or notes.',
	dataDescription2: 'Make it easy to find all the pains your customers are having with your navigation; or gather all the feedback that you collected about your product\'s onboarding.You can turn all of your text into tagged data.',
};

export default ({ location, data }) => {
	const {
		laptop,
		insights,
		organize,
		asData,
	} = data;

	return (
		<App>
			<Layout location={location} stickyHeader transparentToSolid CTA={CTA}>
				<Helmet>
					<title>For Product Managers</title>
					<meta name="description" content={INTERVIEW_TEXT.metaDescription} />
				</Helmet>
				<HeroSection style={navPullStyle}>
					<Box margin={{ top: 'medium', bottom: 'xlarge' }}>
						<Heading type="h1" color="white" center>
							{INTERVIEW_TEXT.heading}
						</Heading>

						<Box margin={{ top: 'small' }}>
							<Lead color="white" center>
								{INTERVIEW_TEXT.subheading}
							</Lead>
							
						</Box>
					</Box>
				</HeroSection>

				<Section>
					<Box margin={{ top: 'large', bottom: 'small' }} style={{ maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
						<Img fluid={laptop.childImageSharp.fluid} />
					</Box>
                
					<Typography type="h2" center>
						{INTERVIEW_TEXT.description1}
					</Typography>
					<Lead center>
						{INTERVIEW_TEXT.description2}
					</Lead>
				</Section>

				<Box margin={{ top: 'large' }} />
                
				<Section>
					<Box margin={{ top: 'large', bottom: 'large' }}>
						<FluidContainer breakAt={['mobile']} flipDirectionOnBreak>
							<Box>
								<Box margin={{ bottom: 'small' }}>
									<Typography type="h3">
										{INTERVIEW_TEXT.insightsHeading}
									</Typography>
								</Box>

								<Typography>
									{INTERVIEW_TEXT.insightsDescription1}
								</Typography>

								<Typography>
									{INTERVIEW_TEXT.insightsDescription2}
								</Typography>
							</Box>
							<Box>
								<Box flex={1} style={{ width: '100%', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
								    <Img fluid={insights.childImageSharp.fluid} />
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
									<Img fluid={organize.childImageSharp.fluid} />
								</Box>
							</Box>
							<Box>
								<Box margin={{ bottom: 'small' }}>
									<Typography type="h3">
										{INTERVIEW_TEXT.organizeHeading}
									</Typography>
								</Box>

								<Typography>
									{INTERVIEW_TEXT.organizeDescription1}
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
										{INTERVIEW_TEXT.dataHeading}
									</Typography>
								</Box>

								<Typography>
									{INTERVIEW_TEXT.dataDescription1}
								</Typography>
								<Typography>
									{INTERVIEW_TEXT.dataDescription2}
								</Typography>
							</Box>
							<Box>
								<Box flex={1} style={{ width: '100%', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
									<Img fluid={asData.childImageSharp.fluid} />
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

        insights: file(relativePath: {
            eq: "capture-insights.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        organize: file(relativePath: {
            eq: "organize-data.png"
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