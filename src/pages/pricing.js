import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';

import HeroSection from 'src/designsystem/HeroSection';
import Section from 'src/designsystem/Section';
import FluidContainer from 'src/designsystem/FluidContainer';

import PricingExplorer from 'src/sections/persato/PricingExplorer';
import ReadyToGetStarted from 'src/sections/persato/ReadyToGetStarted';

import App from '../components/App';
import Layout from '../components/Layout';
import CTA from '../components/CTA';
import { Heading, Heading2, Lead } from '../components/MarketingTypography';
import navPullStyle from '../components/Header/navPullStyle';

const PRICING_TEXT = {
	metaDescription: 'Try Clarity Hub free for 14 days and turn your user research into data that powers your business decisions',

	heading: 'Clarity Hub Pricing',
	subheading: 'Try free for 14 days.',
	subheading2: 'Turn your user research and customer interviews into valuable data for your business.',

	cta: 'Start Your Free Trial',
	ctaText: 'Your free trial gives you all the features of the Premium plan. Upgrade at any time.',

	faq: 'Frequently Asked Questions',

	faqTrialHeading: `How does the trial work?`,
	faqTrialSection1: `Feel free to try out Clarity Hub for 2 weeks with all of the Premium features.
You can invite your team, create interviews, record audio, and get transcripts.`,
	faqTrialSection2: `Once your trial is over, your workspace will be in read-only mode. You can view your interviews and transcripts, but you won't be able to edit them.`,

	faqBillingHeading: `How does billing work?`,
	faqBillingSection1: `You can either setup yearly billing or monthly billing.
You will receive an invoice at the start of each billing cycle.
You can manage your plan and your payment details once you have set up a workspace.`,
	faqBillingSection2: `If you add or remove members when you have a plan already purchased
we will prorate that user and either charge or credit the next billing cycle.
If you remove a user, you will be credited the prorated amount for that user
and that credit will be applied on the next billing cycle.
If you add a user, you will receive a charge on the next monthly
billing cycle for the prorated amount for that user.`,
};

export default ({ location, data }) => {
	const {
		laptop,
	} = data;

	return (
		<App>
			<Layout location={location} stickyHeader transparentToSolid CTA={CTA}>
				<Helmet>
					<title>Pricing</title>
					<meta name="description" content={PRICING_TEXT.metaDescription} />
				</Helmet>
				<HeroSection style={navPullStyle}>
					<Box margin={{ top: 'medium', bottom: 'medium' }}>
						<Heading type="h1" color="white" center>
							{PRICING_TEXT.heading}
						</Heading>

						<Box margin={{ top: 'small' }}>
							<Lead color="white" center>
								{PRICING_TEXT.subheading}
							</Lead>
							<Lead color="white" center>
								{PRICING_TEXT.subheading2}
							</Lead>
						</Box>
					</Box>
				</HeroSection>

				<Section>
					<Box margin={{ top: 'large' }}>
						<PricingExplorer />
					</Box>

					<Box margin={{ top: 'large', bottom: 'large' }}>
						<div style={{ textAlign: 'center' }}>
							<CTA text={PRICING_TEXT.cta} type="primary" center />
						</div>

						<Box margin={{ top: 'small' }}>
							<Typography center>
								{PRICING_TEXT.ctaText}
							</Typography>
						</Box>
					</Box>
				</Section>

				<Box margin={{ top: 'large' }}>
					<Section>
						<Heading2 center>
							{PRICING_TEXT.faq}
						</Heading2>

						<Box margin={{ top: 'small', bottom: 'small' }} style={{ maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
							<Img fluid={laptop.childImageSharp.fluid} />
						</Box>
		
						<Box margin={{ top: 'medium', bottom: 'medium' }}>
							<FluidContainer breakAt={['mobile']}>
								<Card>
									<CardBody>
										<Box margin={{ bottom: 'small' }}>
											<Typography type="h3">
												{PRICING_TEXT.faqTrialHeading}
											</Typography>
										</Box>

										<Typography>
											{PRICING_TEXT.faqTrialSection1}
										</Typography>

										<Typography>
											{PRICING_TEXT.faqTrialSection2}
										</Typography>
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<Box margin={{ bottom: 'small' }}>
											<Typography type="h3">
											
												{PRICING_TEXT.faqBillingHeading}
											</Typography>
										</Box>

										<Typography>
											{PRICING_TEXT.faqBillingSection1}
										</Typography>

										<Typography>
											{PRICING_TEXT.faqBillingSection2}
										</Typography>
									</CardBody>
								</Card>
							</FluidContainer>
						</Box>
					</Section>

				</Box>

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
	}
`;