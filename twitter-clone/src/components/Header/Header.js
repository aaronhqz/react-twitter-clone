import React from 'react';
import TwitterLogo from '../../assets/img/twitter-logo.png';

import './Header.scss';

export default function Header() {
	return (
		<div className='header'>
			<img src={TwitterLogo} alt='Twitter Logo' />
			<h1>Twitter Clone and Simulator</h1>
		</div>
	);
}
