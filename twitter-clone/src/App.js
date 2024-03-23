import React, { useState, useEffect } from 'react';
import { TWEETS_STORAGE } from './utils/constants';

//Libraries Import
import { Container, Snackbar } from '@mui/material';

//Components import
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import ListTweets from './components/ListTweets';

function App() {
	const [toastProps, setToastProps] = useState({
		open: false,
		text: null,
	});

	const [allTweets, setAllTweets] = useState([]);

	useEffect(() => {
		const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
		const allTweetsArray = JSON.parse(allTweetsStorage);

		setAllTweets(allTweetsArray);
	}, []);

	const deleteTweet = (index) => {
		allTweets.splice(index, 1);
		setAllTweets(allTweets);
		localStorage.setItem(TWEETS_STORAGE, allTweets);
	};

	return (
		<Container className='tweets-simulator' maxWidth={false}>
			<Header />
			<SendTweet setToastProps={setToastProps} allTweets={allTweets} />
			<ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
			<Snackbar
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={toastProps.open}
				autoHideDuration={10}
				message={<span id='message-id'> {toastProps.text} </span>}
			/>
		</Container>
	);
}

export default App;
