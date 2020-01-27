export default {
	getApi: (url) => new Promise(resolve => {
		setTimeout(() => {
			resolve(url + ': api data');
		}, 1000);
	}),
};