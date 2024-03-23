import React, { useState } from 'react';
import './FormSendTweet.scss';

//Libraries import
import { FormControl, FormGroup, TextField, Button } from '@mui/material';

export default function FromSendTweet(props) {
	const { SendTweet } = props;
	//useState para almacenar la información cuando se envía un tweet
	const [formValue, setFormValue] = useState({
		name: '',
		tweet: '',
	});

	/* onFormChange
	 * Funcion para creacion de tweets y los guarda en los componentes.
	 *
	 *  */
	const onFormChange = (event) => {
		setFormValue({
			// los tres puntos cargan todos los todos los props del objecto.
			...formValue,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div className='form-send-tweet'>
			<h2 className='from-send-tweet__title'>Enviar Tweet</h2>
			<form
				className='form-send-tweet__from'
				onSubmit={(event) => SendTweet(event, formValue)}
				onChange={onFormChange}
			>
				<FormControl>
					<FormGroup>
						<TextField
							className='form-send-tweet__from-name'
							type='text'
							name='name'
							placeholder='Nombre de Usuario'
							margin='normal'
						></TextField>
					</FormGroup>

					<FormGroup>
						<TextField
							className='form-send-tweet__from-textarea'
							name='tweet'
							multiline
							rows='6'
							placeholder='Got something to tweet?'
							margin='normal'
						></TextField>
					</FormGroup>

					<FormGroup>
						<Button
							className='form-send-tweet__enviar-tweet'
							type='submit'
						>
							Enviar Tweet
						</Button>
					</FormGroup>
				</FormControl>
			</form>
		</div>
	);
}
