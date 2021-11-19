const mappings = {
	PostFormat: function(data, type, image) {
		return {
			id: typeof data.id !== 'undefined' ? data.id : null,
            author: typeof data.author !== 'undefined' ? data.author : null,
			type: type,
			title: typeof data.title !== 'undefined' ? data.title : null,
			postLink: typeof data.id !== 'undefined' ? 'https://redd.it/' + data.id : null,
			text: typeof data.selftext !== 'undefined' ? data.selftext : null,
			thumbnail: typeof data.thumbnail !== 'undefined' ? data.thumbnail : null,
			subreddit: typeof data.subreddit !== 'undefined' ? data.subreddit : null,
			NSFW: typeof data.over_18 !== 'undefined' ? data.over_18 : null,
			spoiler: typeof data.spoiler !== 'undefined' ? data.spoiler : null,
		};
	},
};
export default mappings;