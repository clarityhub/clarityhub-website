/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Img from 'gatsby-image';

import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';

import WebsiteContainer from 'src/components/WebsiteContainer';
import { Heading2, Lead } from 'src/components/MarketingTypography';

const ImageWrapper = styled.div`
	padding: 1rem;
`;

const ExampleUsageContainer = styled.div`
    margin: 4rem 0;
`;

const HeaderWrapper = styled.div`
    margin-bottom: 1rem;
`;

const shiftedCard = css`
	width: 60%;

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		width: 100%;
	}
`;

const shiftedCardRight = css`
	/* margin-right: 0;
	margin-left: auto; */
	/* text-align: right; */
	width: 60%;

	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		width: 100%;
	}
`;

const shiftedCardHide = css`
	@media (max-width: ${breakpoints.smallMaxWidth}px) {
		display: none;
	}
`;

const LeadWrapper = styled.div`
    margin: 2rem auto 0;
    max-width: 660px;
`;

const Solutions = ({
	imageAlfred,
	imageCopilot,
	imageWatchman,
	imageAPI,
}) => (
	<ExampleUsageContainer>
		<WebsiteContainer>
			<HeaderWrapper>
				<Heading2 type="h2" center>Realtime Solutions for Your Business</Heading2>
			</HeaderWrapper>

			<LeadWrapper>
				<Lead style={{ textAlign: 'center' }}>
					Use our Natural Language APIs to build applications, analyze your chats, and
					discover insights about your customers!
				</Lead>
			</LeadWrapper>


			<Box direction="column" gap="large" padding={{ top: "large", bottom: "large" }}>
				<Box direction="row">
					<Box flex={1} css={shiftedCardHide}>
						<ImageWrapper>
							<Img fixed={imageWatchman.fixed} />
						</ImageWrapper>
					</Box>
					<Box padding="medium" css={shiftedCard}>
						<HeaderWrapper>
							<Typography type="h2" noMargin noPadding>
								Monitor Social Media
							</Typography>
						</HeaderWrapper>
						<Typography>
							Get insights about the types of tweets your Twitter account gets.<br/><br/>
							You can use our APIs to save time and instantly get what types of topics your
							users are talking about. No need to label tweets by hand and train your a 
							traditional machine learning model.
						</Typography>
					</Box>
				</Box>
				<Box direction="row">
					<Box padding="medium" css={shiftedCardRight}>
						<HeaderWrapper>
							<Typography type="h2" noMargin noPadding>Create Chatbots</Typography>
						</HeaderWrapper>
						<Typography>
							Quickly create question and answer chatbots to make life easier
							for your users.<br/><br/>
							Our APIs make it easy to answer questions using knowledgebase articles
							and other information you have already written.
						</Typography>
					</Box>
					<Box flex={1} css={shiftedCardHide}>
						<ImageWrapper>
							<Img fixed={imageAlfred.fixed} />
						</ImageWrapper>
					</Box>
				</Box>
				<Box direction="row">
					<Box flex={1} css={shiftedCardHide}>
						<ImageWrapper>
							<Img fixed={imageAPI.fixed} />
						</ImageWrapper>
					</Box>
					<Box padding="medium" css={shiftedCard}>
						<HeaderWrapper>
							<Typography type="h2" noMargin noPadding>Continue Building</Typography>
						</HeaderWrapper>
						<Typography>
							Bring your idea to life by using our Developer API to save time and money.
							<br/><br/>
							Try out ideas in minutes and take them to production knowing that our API
							will scale to meet your demands.
						</Typography>
					</Box>
				</Box>
			</Box>
			
		</WebsiteContainer>
	</ExampleUsageContainer>
);

export default Solutions;
