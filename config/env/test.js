module.exports = {
	db: 'mongodb://localhost/mean-book-test',
	sessionSecret: 'Your Application Session Secret',
	viewEngine: 'ejs',
	facebook: {
		clientID: 'Application Id',
		clientSecret: 'Application Secret',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'LdeN1bOFM6hCF1yq0xWxxw',
		clientSecret: 'N0CbxEl4En03oqYg1lWP2vBgxiurJUgb9wDPCzRRgI',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: 'LdeN1bOFM6hCF1yq0xWxxw',
		clientSecret: 'N0CbxEl4En03oqYg1lWP2vBgxiurJUgb9wDPCzRRgI',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};