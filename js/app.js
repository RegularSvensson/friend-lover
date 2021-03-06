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
		friendListView.init();
	},
	getCurrentFriend: function() {
		return model.currentFriend;
	},
	incrementCounter: function() {
		model.currentFriend.clickCount++;
		friendView.render();
	},
	setCurrentFriend: function(friend) {
		model.currentFriend = friend;
	},
	getFriends: function() {
		return model.friends;
	}
};

/* ======= View ======= */

var friendView = {
	init: function() {
		this.friendElem = document.getElementById('friend');
		this.friendNameElem = document.getElementById('friend-name');
		this.friendImageElem = document.getElementById('friend-img');
		this.countElem = document.getElementById('friend-count');

		this.friendImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
		});

		this.render();
	},

	render: function() {
		var currentFriend = octopus.getCurrentFriend();
		this.countElem.textContent = currentFriend.clickCount + " <3";
		this.friendNameElem.textContent = currentFriend.name;
		this.friendImageElem.src = currentFriend.imgSrc;
	}
};

var friendListView = {
	init: function() {
		this.friendListElem = document.getElementById('friend-list');

		this.render();
	},
	render: function() {
		var friend, elem, i;

		var friends = octopus.getFriends();

		this.friendListElem.innerHTML = '';

		for (i = 0; i < friends.length; i++) {
			friend = friends[i];

			elem = document.createElement('button');
			elem.textContent = friend.name;

			elem.addEventListener('click', (function(friendCopy) {
				return function() {
					octopus.setCurrentFriend(friendCopy);
					friendView.render();
				};
			})(friend));

			this.friendListElem.appendChild(elem);
		}
	}
};


octopus.init();
