import React, { useState } from 'react';
import './SendTweet.scss';

//Libraries import
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import moment from 'moment';

//Component Import
import ModalContainer from '../ModalContainer';
import FromSendTweet from '../FormSendTweet';
import FormSendTweet from '../FormSendTweet';

export default function SendTweet() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => {
		setIsOpenModal(true);
	};

	const closedModal = () => {
		setIsOpenModal(false);
	};

	return (
		<div className='send-tweet'>
			<Fab
				className='send-tweet__open-modal'
				color='primary'
				aria-label='Add'
				onClick={openModal}
			>
				<AddIcon />
			</Fab>

			<ModalContainer isOpenModal={isOpenModal} closedModal={closedModal}>
				<FormSendTweet>
					<h1>Prueba de contenido</h1>
				</FormSendTweet>
			</ModalContainer>
		</div>
	);
}
