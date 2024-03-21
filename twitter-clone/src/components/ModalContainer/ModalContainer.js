import React from 'react';
import './ModalContainer.scss';

import { Modal } from '@mui/material';

export default function ModalContainer(props) {
	const { isOpenModal, closedModal, children } = props;

	return (
		<Modal
			className='modal-container'
			open={isOpenModal}
			onClose={closedModal}
			closeAfterTransition
		>
			<div> {children} </div>
		</Modal>
	);
}
