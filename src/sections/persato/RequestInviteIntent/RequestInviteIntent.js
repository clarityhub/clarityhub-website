import React, { Fragment, useState } from 'react';
import Modal from '@clarityhub/unity-web/lib/components/Modals';
import { CardBody } from '@clarityhub/unity-web/lib/components/Card';

import RequestInviteForm from '../RequestInviteForm';

const RequestInviteIntent = ({ children }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const onClick = (e) => {
		e.preventDefault();
		setModalOpen(true);
	};

	const onClose = () => {
		setModalOpen(false);
	};

	return (
		<Fragment>
			<Modal open={isModalOpen} onClose={onClose}>
				<CardBody>
					<RequestInviteForm />
				</CardBody>
			</Modal>


			{children({ onClick })}
		</Fragment>
	);
};

export default RequestInviteIntent;
