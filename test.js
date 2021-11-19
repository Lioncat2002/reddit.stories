import story from './reddit/stories.js'
/**
 * Showing the eample usage
 */
story
	//.FetchPostbyID(
	//	"g17pmr"
	//		)
	.FetchPostbyLink(
		"https://www.reddit.com/r/freehorrorstories/comments/g17pmr/creepy_pasta_true_story_wanted_for_podcast_episode"
		
	)
	.then((data) => {
		console.log('FetchPost Example:');
		console.log(data);
	}); 
