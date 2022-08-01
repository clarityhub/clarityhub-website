import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Badge from '@clarityhub/unity-web/lib/components/Badge';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';

import HeroSection from 'src/designsystem/HeroSection';
import Section from 'src/designsystem/Section';
import FluidContainer from 'src/designsystem/FluidContainer';

import App from 'src/components/App';
import Layout from 'src/components/Layout';
import CTA from 'src/components/CTA';
import { Heading, Lead } from 'src/components/MarketingTypography';
import navPullStyle from 'src/components/Header/navPullStyle';

const ABOUT_TEXT = {
	metaDescription: 'Empowering you to build better products.',

	heading: 'About Us',
	subheading: 'Empowering you to build better products',

	story1: 'Building products that people love is hard',
	story2: 'Doing customer discovery helps us build better products, but collecting and sharing customer interviews is difficult.',
	story3: 'We make it easy for teams to conduct interviews and synthesis data together.',
	story4: 'Our goals are to:',
	storyItem1: 'Simplify user research and build what your customers want',
	storyItem2: 'Empower teams to build confidently',
};

function chunk(arr, len) {
	const chunks = [];
	let	i = 0;
	const n = arr.length;

	while (i < n) {
		chunks.push(arr.slice(i, i += len));
	}

	return chunks;
}

export default ({ location, data }) => {
	const {
		productQuestions,
		avatarClaire,
		avatarIvan,
		avatarAnna,
		avatarCarlo,
		awsActivate,
		stripeAtlas,
		ventureDevils,
		startupSchool,
	} = data;

	const team = [
		{
			image: avatarClaire,
			name: 'Claire Bot',
			title: 'AI Assistant',
			description: `
			Powering  Clarity Hub with
			AI transcriptions,
			suggestions, notifications, and more.
			`,
		},
		{
			image: avatarIvan,
			name: 'Ivan M',
			title: 'CEO',
			description: `
			Working hard to develop the long-term vision and deliver
			new features.
			`,
		},
		{
			image: avatarAnna,
			name: 'Anna L',
			title: 'VP of Product',
			description: `
			Doing customer discovery, interviewing customers, and developing Clarity Hub.
			`,
		},
		{
			image: avatarCarlo,
			name: 'Carlo S',
			title: 'Software Engineer',
			description: `
			Writing, testing, and delivering features for Clarity Hub.
			`,
		},
	];

	return (
		<App>
			<Layout location={location} stickyHeader transparentToSolid CTA={CTA}>
				<Helmet>
					<title>For Product Managers</title>
					<meta name="description" content={ABOUT_TEXT.metaDescription} />
				</Helmet>
				<HeroSection style={navPullStyle}>
					<Box margin={{ top: 'medium', bottom: 'xlarge' }}>
						<Heading type="h1" color="white" center>
							{ABOUT_TEXT.heading}
						</Heading>

						<Box margin={{ top: 'small' }}>
							<Lead color="white" center>
								{ABOUT_TEXT.subheading}
							</Lead>
						</Box>
					</Box>
				</HeroSection>


				<Section>
					<Box margin={{ top: 'large', bottom: 'small' }} style={{ maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
						<Img fluid={productQuestions.childImageSharp.fluid} />
					</Box>

					<Lead center>
						{ABOUT_TEXT.story1}
					</Lead>
					<Box margin={{ top: 'small' }}>
						<Typography center>
							{ABOUT_TEXT.story2}
						</Typography>
						<Typography center>
							{ABOUT_TEXT.story3}
						</Typography>
						{/* <Typography center>
							{ABOUT_TEXT.story4}
							<br/>
							<br/>
							<ul>
								<li center>
									– {ABOUT_TEXT.storyItem1}
								</li>
								<li center>
									– {ABOUT_TEXT.storyItem2}
								</li>
							</ul>
						</Typography> */}
					</Box>
				</Section>

			
				<Section>
					<Box>
						<Typography type="h2" center>
							The Team
						</Typography>
					</Box>
					<Box margin={{ top: 'large', bottom: 'large' }}>
						{
							chunk(team, 2).map((group, i) => {
								return (
									<Box margin={{ bottom: 'medium' }}>
										<FluidContainer key={i} breakAt={['mobile']} flipDirectionOnBreak>
											{
												group.map((item, j) => {
													return (
														<Card key={j}>
															<CardBody>
																<div style={{ margin: 'auto', height: '150px', maxWidth: '150px' }}>
																	<Img fluid={item.image.childImageSharp.fluid} />
																</div>

																<Box>
																	<Typography type="h3">
																		{item.name}
																	</Typography>
																	<Box margin={{ top: 'small', bottom: 'small' }}>
																		<div>
																			<Badge type="success">
																				{item.title}
																			</Badge>

																		</div>
																	</Box>
																	<Typography>
																		{item.description}
																	</Typography>
																</Box>
															</CardBody>
														</Card>
													);
												})
											}
										</FluidContainer>
									</Box>
								);
							})
						}
						
					</Box>
				</Section>

				<Section>
					<Box>
						<Typography type="h2" center>
							Special Thanks
						</Typography>
					</Box>
					<Box margin={{ top: 'large', bottom: 'large' }}>
						<FluidContainer breakAt={['mobile']} style={{ alignItems: 'center' }}>
							<Box>
								<div style={{ maxWidth: '150px' }}>
									<Img fluid={awsActivate.childImageSharp.fluid} />
								</div>
							</Box>
							<Box>
								<div style={{ maxWidth: '150px' }}>
									<Img fluid={stripeAtlas.childImageSharp.fluid} />
								</div>
							</Box>
							<Box>
								<div style={{ maxWidth: '150px' }}>
									<Img fluid={ventureDevils.childImageSharp.fluid} />
								</div>
							</Box>
							<Box>
								<div style={{ maxWidth: '150px' }}>
									<Img fluid={startupSchool.childImageSharp.fluid} />
								</div>
							</Box>
						</FluidContainer>
					</Box>
				</Section>
			</Layout>
		</App>
	);
};

export const query = graphql`
    query {
        productQuestions: file(relativePath: {
            eq: "products-questions.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        avatarClaire: file(relativePath: {
            eq: "avatar-claire.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
	
        avatarIvan: file(relativePath: {
            eq: "avatar-ivan.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
	
        avatarAnna: file(relativePath: {
            eq: "avatar-anna.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
	
        avatarCarlo: file(relativePath: {
            eq: "avatar-carlo.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
	
        awsActivate: file(relativePath: {
            eq: "logo-aws-activate.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
	
        stripeAtlas: file(relativePath: {
            eq: "logo-stripe-atlas.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
	
        ventureDevils: file(relativePath: {
            eq: "logo-venture-devils.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        startupSchool: file(relativePath: {
            eq: "logo-startup-school.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
	}
`;