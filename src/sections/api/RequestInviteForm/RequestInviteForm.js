import React, { Component, Fragment } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from '@emotion/styled';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import { bool, func } from 'prop-types';

import { Flag } from 'src/components/Flags';

import Form from './Form';
import { URL } from './config';

const HeaderWrapper = styled.div`
    margin-bottom: 2rem;
`;

class RequestInviteForm extends Component {
    static propTypes = {
    	children: func,
    	simple: bool,
    }

    render() {
    	const { children, simple } = this.props;

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
    					{status !== 'success' && !simple && (
    						<Fragment>
    							<HeaderWrapper>
    								<Typography center type="h2" noMargin noPadding>
    									<Flag
    										name={["config", "signup", "buttonText"]}
    										render={(flags) => flags.config.signup.buttonText}
    									/>
    								</Typography>
    							</HeaderWrapper>
    							<Typography center type="text">
    								<Flag
    									name={["config", "signup", "description"]}
    									render={(flags) => flags.config.signup.description}
    								/>
    							</Typography>
    						</Fragment>
    					)}
    					<Form {...{ subscribe, status, message, simple }} />
    				</Fragment>
    			)}
    		/>
    	);
    }
}

export default RequestInviteForm;
