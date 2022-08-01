/** @jsx jsx */
import Img from 'gatsby-image';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

import { Columns, Column } from 'src/components/Columns';
import WebsiteContainer from 'src/components/WebsiteContainer';
import SwooshThree from 'src/components/SwooshThree';
import { Heading2 } from 'src/components/MarketingTypography';

const DevelopersContainer = styled.div`
    margin-bottom: 6rem;
    margin-top: 6rem;
`;

const HeadingContainer = styled.div`
    margin-bottom: 2rem;
`;

const ByDevelopersForDevelopers = ({ image }) => (
	<SwooshThree>
		<DevelopersContainer>
			<WebsiteContainer>
				<HeadingContainer>
					<Heading2 type="h2" color="white" center>
                        Built for Developers
					</Heading2>
				</HeadingContainer>
                
				<Columns column={['xs']} gutters={'large'} css={css`
                    align-items: center;
                    justify-items: center;
                `}>
					<Column>
						<Img fluid={image.fluid} />
					</Column>
					<Column>
						<Typography type="h3" color="white" css={css`
                            padding-top: 0;
                        `}>
                            Easy to Use
						</Typography>
						<Typography color="white">
                            Our APIs are built to be easy to use so you can focus on
                            creating new features instead of experimenting with machine learning
                            algorithms.
						</Typography>

						<Typography type="h3" color="white">
                            Powerful APIs
						</Typography>
						<Typography color="white">
                            Use pre-built models or train your own to fit your specific business needs.
                            We provide high level NLP and machine learning tools to discover insights about
                            your customers.
						</Typography>
					</Column>
				</Columns>
			</WebsiteContainer>
		</DevelopersContainer>
	</SwooshThree>
);

export default ByDevelopersForDevelopers;
