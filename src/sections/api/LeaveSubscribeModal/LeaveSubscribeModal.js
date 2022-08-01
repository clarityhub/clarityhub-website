import React from 'react';
import Modal from '@clarityhub/unity-web/lib/components/Modals';
import { CardBody } from '@clarityhub/unity-web/lib/components/Card';
import LeaveIntent from '@clarityhub/unity-marketing/lib/interactions/LeaveIntent';

import RequestInviteForm from '../RequestInviteForm';

const LeaveSubscribeModal = () => (
	<LeaveIntent>
		{({ show, onDismiss }) => (
			<Modal open={show} onClose={onDismiss}>
				<CardBody>
					<RequestInviteForm />
				</CardBody>
			</Modal>
		)}
	</LeaveIntent>
);

export default LeaveSubscribeModal;
