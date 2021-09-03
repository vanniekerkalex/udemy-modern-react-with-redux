import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
	
	if (!song) {
		return <div>Select a song!</div>
	}

	return (
		<div>
			<h2>Selected song:</h2>
			<p>
				Title: {song.title}
				<br />
				Duration: {song.duration}
			</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state.selectedSong);
	return {
		song: state.selectedSong,
	};
};

export default connect(mapStateToProps)(SongDetail);