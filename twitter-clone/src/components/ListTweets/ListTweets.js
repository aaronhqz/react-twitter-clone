import React from 'react';
import './ListTweets.scss';

//Libraries import
import { Grid } from '@mui/material';

//Component import
import Tweet from '../Tweet';

export default function ListTweets(props) {
	const { allTweets, deleteTweet } = props;

	/* 	Intento de hacer las cosas bonitas
	console.log('#LOG_ListTweets_allTweets: ' + allTweets); */

	if (!allTweets || allTweets.length === 0) {
		return (
			<div className='list-tweets-empty'>
				<h2>No hay Tweets</h2>
			</div>
		);
	}

	return (
		<Grid container spacing={2} className='list-tweets'>
			{/* Arrow function con paréntesis en vez de llaves para iniciar el return sin necesidad de escribir return. */}
			{allTweets.map((tweet, index) => (
				<Grid key={index} item xs={4}>
					<Tweet
						tweet={tweet}
						index={index}
						deleteTweet={deleteTweet}
					></Tweet>
				</Grid>
			))}
		</Grid>
	);
}
