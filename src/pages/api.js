import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Button from '@clarityhub/unity-web/lib/components/Buttons';

import App from 'src/components/App';
import { Flag } from 'src/components/Flags';
import Layout from 'src/components/Layout';

import LeaveSubscribeModal from 'src/sections/api/LeaveSubscribeModal';
import RequestInviteIntent from 'src/sections/api/RequestInviteIntent';
import BusinessToolkit from 'src/sections/api/BusinessToolkit';
import ByDevelopersForDevelopers from 'src/sections/api/ByDevelopersForDevelopers';
import LandingCallout from 'src/sections/api/LandingCallout';
import Solutions from 'src/sections/api/Solutions';
import ReadyToGetStarted from 'src/sections/api/ReadyToGetStarted';
import ExampleUsage from 'src/sections/api/ExampleUsage';

const CTA = () => (
	<RequestInviteIntent>
		{({ onClick }) => (
			<Button color="white" onClick={onClick}>
				<Flag
					name={["config", "signup", "buttonText"]}
					render={(flags) => flags.config.signup.buttonText}
				/>
			</Button>
		)}
	</RequestInviteIntent>
);

export default ({ location, data }) => {
	return (
		<App>
			<Layout location={location} stickyHeader transparentToSolid CTA={CTA}> 
				<Helmet>
					<title>NLP and Machine Learning API Services</title>
					<meta name="description" content="NLP and Machine Learning made easy so your business can build conversational apps" />
				</Helmet>
				<LeaveSubscribeModal />
				<LandingCallout image={data.suggestion.childImageSharp} />
				<BusinessToolkit image={data.insights.childImageSharp} />
                
				<ByDevelopersForDevelopers image={data.developers.childImageSharp} />
				<Solutions
					imageAlfred={data.alfred.childImageSharp}
					imageCopilot={data.copilot.childImageSharp}
					imageWatchman={data.watchman.childImageSharp}
					imageAPI={data.api.childImageSharp}
				/>
				<ExampleUsage
					imageCreateAccount={data.createAccount.childImageSharp}
					imageTrainModel={data.trainModel.childImageSharp}
					imageAnalyzeMessages={data.analyzeMessages.childImageSharp}
				/>
				<ReadyToGetStarted />
		    </Layout>
		</App>
	);
};

export const query = graphql`
    query {
        alfred: file(relativePath: {
            eq: "alfred.png"
        }) {
            childImageSharp {
                fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        copilot: file(relativePath: {
            eq: "copilot.png"
        }) {
            childImageSharp {
                fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        watchman: file(relativePath: {
            eq: "watchman.png"
        }) {
            childImageSharp {
                fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        api: file(relativePath: {
            eq: "api.png"
        }) {
            childImageSharp {
                fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                }
            }
        }

        suggestion: file(relativePath: {
            eq: "understand-customers.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        insights: file(relativePath: {
            eq: "insights.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        intent: file(relativePath: {
            eq: "intent.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        topic: file(relativePath: {
            eq: "topics.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        sentiment: file(relativePath: {
            eq: "sentiment.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        developers: file(relativePath: {
            eq: "developers.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        createAccount: file(relativePath: {
            eq: "signup.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    
        trainModel: file(relativePath: {
            eq: "train.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    
        analyzeMessages: file(relativePath: {
            eq: "predict.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
