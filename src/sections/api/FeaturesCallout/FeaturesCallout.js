import React from 'react';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';
import Button from '@clarityhub/unity-web/lib/components/Buttons';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

import { Flag } from 'src/components/Flags';
import WebsiteContainer from 'src/components/WebsiteContainer';
import RequestInviteIntent from 'src/intents/RequestInviteIntent';

const Swooshes = styled.div`
    background-color: #FCF7F7;
    padding: 100px 0 80px;
    position: relative;
    z-index: 0;

    @media (max-width: ${breakpoints.smallMaxWidth}px) {
        padding-top: 60px;
    }

    &:before {
        content: '';
        background-image: ${colors.gradient.default};
        display: flex;
        height: 236px;
        position: absolute;
        bottom: 280px;
        left: -1px;
        right: -1px;
        transform: skew(0, 2deg);
        top: -180px;
        width: 100%;
        z-index: 1;

        @media (max-width: ${breakpoints.smallMaxWidth}px) {
            bottom: 400px;
            height: 146px;
            top: -111px;
        }

        @media (min-width: $features__media--large) {
            top: -190px;
            transform: skew(0,0deg);
        }
    }

    &:after {
        content: '';
        background-color: #fff;
        z-index: 1;

        display: flex;
        height: 156px;
        position: absolute;
        bottom: -20px;
        left: -1px;
        right: -1px;
        transform: skew(0, 2deg);
        top: 430px;
        width: 100%;
    }
`;

const FeatureCalloutWrapper = styled.div`
    padding: 2rem 0 0;
    text-align: center;
`;

const ButtonWrapper = styled.div`
    padding: 3rem 0;
`;

const FeaturesCallout = () => (
	<Swooshes>
		<WebsiteContainer>
			<FeatureCalloutWrapper>
				<Typography type="h1">
                    Meaningful Insights
				</Typography>

				<Typography>Analyze messages with Clarity Hub and get insights, intent, keywords, sentiment and more.</Typography>

				<ButtonWrapper>
					<RequestInviteIntent>
						{({ onClick }) => (
							<Button type="primary" onClick={onClick}>
								<Flag
									name={["config", "signup", "buttonText"]}
									render={(flags) => flags.config.signup.buttonText}
								/>
							</Button>
						)}
					</RequestInviteIntent>
				</ButtonWrapper>
			</FeatureCalloutWrapper>
		</WebsiteContainer>
	</Swooshes>    
);

export default FeaturesCallout;
