import React, { useState } from 'react';
import './SendTweet.scss';
import { TWEETS_STORAGE } from '../../utils/constants';

//Libraries import
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import moment from 'moment';

//Component Import
import ModalContainer from '../ModalContainer';
import FormSendTweet from '../FormSendTweet';

export default function SendTweet(props) {
	const { setToastProps, allTweets } = props;

	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => {
		setIsOpenModal(true);
	};

	const closedModal = () => {
		setIsOpenModal(false);
	};

	const SendTweet = (event, formValue) => {
		event.preventDefault();
		const { name, tweet } = formValue;
		let allTweetsArray = [];

		if (allTweets) {
			allTweetsArray = allTweets;
		}

		if (!name || !tweet) {
			//console.log('Fields are obligatory');
			setToastProps({
				open: true,
				text: 'Fields are obligatory',
			});
		} else {
			formValue.time = moment();
			allTweetsArray.push(formValue);
			//localStorage funcion para realizar almacenajes locales. No se usa para el proyecto de la PES porque se utilizaran DBs
			localStorage.setItem(
				TWEETS_STORAGE,
				JSON.stringify(allTweetsArray)
			);
			console.log(
				`#Log_SendTweet: Tweet publicado correctamente. 
				Timestamp: ${formValue.time}. 
				Tweet Value: ${formValue.tweet}`
			);
			setToastProps({
				open: true,
				text: 'Tweet publicado correctamente',
			});
			closedModal();
		}

		allTweetsArray = [];
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
				<FormSendTweet SendTweet={SendTweet} />
			</ModalContainer>
		</div>
	);
}
