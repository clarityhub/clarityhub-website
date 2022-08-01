/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import { Column, Columns } from 'src/components/Columns';
import WebsiteContainer from 'src/components/WebsiteContainer';
import SwooshTwo from 'src/components/SwooshTwo';
import { Heading2, Lead } from 'src/components/MarketingTypography';

import RequestInviteForm from '../RequestInviteForm';

const Container = styled.div`
    margin: 100px 0;
    width: 100%;
`;

const Center = styled.div`
    text-align: center;
	width: 100%;
`;

const ReadyToGetStarted = () => (
	<SwooshTwo>
		<WebsiteContainer>
			<Container>
				<Columns column={['sm', 'xs']} gutters css={css`
                    align-items: center;
                `}>
					<Column>
						<Heading2 type="h2">
                            Start Interviewing
						</Heading2>
						<Lead>
							Start your free trial and organize your interviews,
							insights, and data.
						</Lead>
					</Column>
					<Column>
						<Center>
							<RequestInviteForm noText noFocus />
						</Center>
					</Column>
				</Columns>
			</Container>
		</WebsiteContainer>
	</SwooshTwo>
);

export default ReadyToGetStarted;
