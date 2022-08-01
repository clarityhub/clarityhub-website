/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Button from '@clarityhub/unity-web/lib/components/Buttons';

import { Flag } from 'src/components/Flags';
import { Column, Columns } from 'src/components/Columns';
import WebsiteContainer from 'src/components/WebsiteContainer';
import SwooshTwo from 'src/components/SwooshTwo';
import { Heading2, Lead } from 'src/components/MarketingTypography';

import RequestInviteIntent from '../RequestInviteIntent';

const Container = styled.div`
    margin: 100px 0;
    width: 100%;
`;

const Center = styled.div`
    text-align: center;
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
                            Ready to get started?
						</Heading2>
						<Lead>
							<Flag
								name={["config", "signup", "description"]}
								render={(flags) => flags.config.signup.description}
							/>
						</Lead>
					</Column>
					<Column>
						<Center>
							<RequestInviteIntent>
								{({ onClick }) => (
									<Button type="primary" onClick={onClick}>
										<Flag
											name={["config", "signup", "buttonSecondaryText"]}
											render={(flags) => flags.config.signup.buttonSecondaryText}
										/>
									</Button>
								)}
							</RequestInviteIntent>
						</Center>
					</Column>
				</Columns>
			</Container>
		</WebsiteContainer>
	</SwooshTwo>
);

export default ReadyToGetStarted;
