/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';

import { Columns, Column } from 'src/components/Columns';
import WebsiteContainer from 'src/components/WebsiteContainer';

const MachineLearningImage = styled.div`
    background: url('/images/chatter.png'), url('/images/large-stars.png');
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-size: 40%, 90%;
    height: 200px;
    margin: 20px auto 0;
    max-width: ${breakpoints.maxWidth}px;

    @media (max-width: ${breakpoints.smallMaxWidth}px) {
        background: url('/images/large-stars.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 150%;
        position: absolute;
        top: -90px;
        width: 100%;
        z-index: 0;
    }
`;

const FeaturesCallout = () => (
	<WebsiteContainer>
		<Typography type="h2" center>
            Simple Machine Learning APIs
		</Typography>

		<MachineLearningImage />

		<Columns gutters>
			<Column css={css`
                display: flex;
            `}>
				<Card css={css`
                    border-top: 7px solid #A589B3;
                    flex: 1;
                `}>
					<CardBody>
						<Typography type="h3" center>
                            Intent
						</Typography>
        
                        Image
        
                        Description
					</CardBody>
				</Card>
			</Column>
			<Column css={css`
                display: flex;
            `}>
				<Card css={css`
                    border-top: 7px solid #87B9F3;
                    flex: 1;
                    margin-top: 20px;
                    margin-bottom: -20px;

                    @media (max-width: $features__media--small) {
                        margin-bottom: 0;
                    }
                `}>
					<CardBody>
						<Typography type="h3" center>
                            Sentiment
						</Typography>
        
                        Image
        
                        Description
					</CardBody>
				</Card>
			</Column>
			<Column css={css`
                display: flex;
            `}>
				<Card css={css`
                    border-top: 7px solid #FFA69D;
                    flex: 1;
                `}>
					<CardBody>
						<Typography type="h3" center>
                            Keywords
						</Typography>
        
                        Image
        
                        Description
					</CardBody>
				</Card>
			</Column>
		</Columns>
	</WebsiteContainer>
);

export default FeaturesCallout;
