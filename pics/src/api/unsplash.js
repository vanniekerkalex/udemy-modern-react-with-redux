import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: "Client-ID FfOIUlgSzZSaoVFZCh00dBDY4b6CNvnCf_kJG3MHGBU",
	},
});