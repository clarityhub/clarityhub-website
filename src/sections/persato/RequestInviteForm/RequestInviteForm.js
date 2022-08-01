import React, { Component, Fragment } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from '@emotion/styled';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import { bool, func } from 'prop-types';

import Form from './Form';
import { URL } from './config';

const HeaderWrapper = styled.div`
    margin-bottom: 2rem;
`;

class RequestInviteForm extends Component {
    static propTypes = {
    	children: func,
    	noText: bool,
    	simple: bool,
    }

    render() {
    	const { children, noFocus, noText, simple } = this.props;

    	if (children) {
    		return (
    			<MailchimpSubscribe
    				url={URL}
    				render={({ subscribe, status, message }) => (
    					<Fragment>
    						{children && children({
    							subscribe, status, message, Form: ({ children, ...rest }) => (
    								<Form
    									{...{ subscribe, status, message, simple }}
    									{...rest}
    									noFocus={noFocus}
    									children={children}
    								/>
    							),
    						})}
    					</Fragment>
    				)}
    			/>
    		);
    	}

    	return (
    		<MailchimpSubscribe
    			url={URL}
    			render={({ subscribe, status, message }) => (
    				<Fragment>
    					{status !== 'success' && !noText && !simple && (
    						<Fragment>
    							<HeaderWrapper>
    								<Typography center type="h2" noMargin noPadding>
    									Start Your Free Trial
    								</Typography>
    							</HeaderWrapper>
    							<Typography center type="text">
									Once you sign up, you will get an email
									with instructions on how to onboard onto
									Clarity Hub.
    							</Typography>
    						</Fragment>
    					)}
    					<Form noFocus={noFocus} {...{ subscribe, status, message, simple }} />
    				</Fragment>
    			)}
    		/>
    	);
    }
}

export default RequestInviteForm;
