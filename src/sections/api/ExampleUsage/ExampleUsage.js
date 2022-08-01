/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Card, {
	CardBody,
	CardImage,
} from '@clarityhub/unity-web/lib/components/Card';

import { Columns, Column } from 'src/components/Columns';
import WebsiteContainer from 'src/components/WebsiteContainer';
import { Heading2 } from 'src/components/MarketingTypography';

const ExampleUsageContainer = styled.div`
    margin: 4rem 0;
`;

const HeaderWrapper = styled.div`
    margin-bottom: 1rem;
`;

const ExampleUsage = ({
	imageCreateAccount,
	imageTrainModel,
	imageAnalyzeMessages,
}) => (
	<ExampleUsageContainer>
		<WebsiteContainer>
			<HeaderWrapper>
				<Heading2 type="h2" center>Getting Started is Easy</Heading2>
			</HeaderWrapper>

			<Columns column={['sm', 'xs']} gutters>
				<Column css={css`
                    display: flex;
                `}>
					<Card css={css`
                        flex: 1;
                    `}>
						<CardImage src={imageCreateAccount.fluid.src} />
						<CardBody>
							<HeaderWrapper>
								<Typography type="h3">Create an Account</Typography>
							</HeaderWrapper>
							<Typography>
                                Create an account and get an access token.
							</Typography>
						</CardBody>
					</Card>
				</Column>
				<Column css={css`
                    display: flex;
                `}>
					<Card css={css`
                        flex: 1;
                    `}>
						<CardImage src={imageTrainModel.fluid.src} />
						<CardBody>

							<HeaderWrapper>
								<Typography type="h3">
                                    Train Your Model
								</Typography>
							</HeaderWrapper>

							<Typography>
                                Create a model of your conversations with labelled or unlabelled data, or use a pre-made model.
							</Typography>
						</CardBody>
					</Card>
				</Column>
				<Column css={css`
                    display: flex;
                `}>
					<Card css={css`
                        flex: 1;
                    `}>
						<CardImage src={imageAnalyzeMessages.fluid.src} />
						<CardBody>

							<HeaderWrapper>
								<Typography type="h3">
                                    Analyze Messages
								</Typography>
							</HeaderWrapper>
							<Typography>
                                Get intents, keywords, sentiment and more from new messages.
							</Typography>
						</CardBody>
					</Card>
				</Column>
			</Columns>
		</WebsiteContainer>
	</ExampleUsageContainer>
);

export default ExampleUsage;
