import React from 'react';
import './Tweet.scss';

//libraries import
import { Card, CardContent } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import moment from 'moment';

export default function Tweet(props) {
	const {
		tweet: { name, tweet, time },
		index,
		deleteTweet,
	} = props;

	// console.log(tweet);
	return (
		<Card className='tweet'>
			<CardContent>
				<div className='tweet__header'>
					<h5> {name} </h5>
					<Delete onClick={() => deleteTweet(index)} />
				</div>
				<p> {tweet} </p>
				<div className='tweet__date-add-tweet'>
					{moment(time).format('DD/MM/YYYY HH:mm')}
				</div>
			</CardContent>
		</Card>
	);
}
