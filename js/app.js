/* ======= Model ======= */

var model = {
	currentFriend: null,
	friends: [
		{
			clickCount: 0,
			name: 'Meron',
			imgSrc: 'img/meron.jpg'
		},
		{
			clickCount: 0,
			name: 'Isak',
			imgSrc: 'img/isak.jpg'
		},
		{
			clickCount: 0,
			name: 'Robban',
			imgSrc: 'img/robban.jpg'
		},
		{
			clickCount: 0,
			name: 'Tim',
			imgSrc: 'img/tim.jpg'
		},
		{
			clickCount: 0,
			name: 'Pontus',
			imgSrc: 'img/pontus.jpg'
		}
	]
};

/* ======= Octopus ======= */

var octopus = {
	init: function() {
		model.currentFriend = model.friends[0];

		friendView.init();
	},
	getCurrentFriend: function() {
		return model.currentFriend;
	},
	incrementCounter: function() {
		model.currentFriend.clickCount++;
		friendView.render();
	}
};
