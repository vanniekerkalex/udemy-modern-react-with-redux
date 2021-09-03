import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'No scrubs', duration: '4:05' },
		{ title: 'Macarena', duration: '3:15' },
		{ title: 'All the way', duration: '3:25' },
		{ title: 'Can\'t touch this!', duration: '4:55' },
		{ title: 'Hemel op aarde', duration: '2:45' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
})