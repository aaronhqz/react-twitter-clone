import React from 'react';
import './FormSendTweet.scss';

//Libraries import
import { FormControl, FormGroup, TextField, Button } from '@mui/material';

export default function FromSendTweet(props) {
	const {} = props;

	return (
		<div className='form-send-tweet'>
			<h2 className='from-send-tweet__enviar-tweet'>Enviar Tweet</h2>
			<form className='form-send-tweet__from'>
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
