import React from 'react';
import styled from '@emotion/styled';
import NewsletterForm from '@clarityhub/unity-marketing/lib/components/NewsletterForm';
import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';

const Wrapper = styled.div`
    margin-bottom: 2rem;
`;

const SignUpForm = () => (
	<FlexGridContainer size="xsmall">
		<Wrapper>
			<Card>
				<CardBody>
					<NewsletterForm />
				</CardBody>
			</Card>
		</Wrapper>
	</FlexGridContainer>
);

export default SignUpForm;
