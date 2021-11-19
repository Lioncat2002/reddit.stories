import fetch from 'node-fetch';
import mappings from './mappings.js';
const apiURL = 'https://api.reddit.com';
 const story= {

	
	/**
	 * @param {string} id - id of the reddit post
	 */
	async FetchPostbyID(id) {
		if (!id) {
			throw new Error('Please provide a Reddit Post ID!');
		}

		let data;
		let URL = `${apiURL}/comments/${id}`;
		const res = await fetch(URL).then((response) => response.json());

		if (!res) {
			throw new Error('An unexpected error occured :C try again');
		} else if (res.error) {
			throw new Error('Invalid Post ID!');
		} else {
			data = mappings.PostFormat(res[0].data.children[0].data, '');
		}
		return data;
	},
	/**
	 * @param {string} url - url of the reddit post
	 */
	 async FetchPostbyLink(url) {
		if (!url) {
			throw new Error('Please provide a Reddit Post url!');
		}

		let data;
		const URL = url+'.json';
		const res = await fetch(URL).then((response) => response.json());

		if (!res) {
			throw new Error('An unexpected error occured :C try again');
		} else if (res.error) {
			throw new Error('Invalid URL!');
		} else {
			data = mappings.PostFormat(res[0].data.children[0].data, '');
		}
		return data;
	},
	
};
export default story;