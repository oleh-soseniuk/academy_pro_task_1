var $$addUser = document.getElementById('add-user');
var $$usersContainer = document.getElementById('users-container');

fetch('/api/user').then(function(response){
	if(response.ok) {
		return response.json();
	} 
}).then(function(users){
	renderUsers(users);
});

bindEventListeners();

function renderUsers(users){
	for (var i = 0; i < users.length; i++){
		$$usersContainer.appendChild(renderUser(users[i]));
	}
}

function renderUser(user = {}){
	var $userContainer = document.createElement('div');
	$userContainer.className = 'user-container';

	if (user._id){
		$userContainer.id = user._id

		var $userId = document.createElement('a');
		$userId.innerText = user._id;
		$userId.href = '/user/' + user._id;
		$userContainer.appendChild($userId);
	}

	var $userName = document.createElement('input');
	$userName.value = user.name || '';
	$userName.className = 'user-name'
	$userContainer.appendChild($userName);

	var $userSurname = document.createElement('input');
	$userSurname.value = user.surname || '';
	$userSurname.className = 'user-surname'
	$userContainer.appendChild($userSurname);

	var $saveUserButton = document.createElement('button');
	$saveUserButton.innerText = 'Save';
	$saveUserButton.className = 'save-user'
	$userContainer.appendChild($saveUserButton);

	var $deleteUserButton = document.createElement('button');
	$deleteUserButton.innerText = 'Delete';
	$deleteUserButton.className = 'delete-user'
	$userContainer.appendChild($deleteUserButton);
	return $userContainer;
}

function bindEventListeners(){

	$$addUser.addEventListener('click', function(){
		$$usersContainer.appendChild(renderUser());
	});

	document.addEventListener('click', function(event){
		if (event.target.className === 'save-user'){
			var userContainer = event.target.parentNode;
			var id = userContainer.id;
			if (id){
				sendEditUserReq(userContainer, id);
			} else {
				sendCreateUserReq(userContainer).then(function(response){
					if(response.ok) {
						return response.json();
					} 
				}).then(function(user){
					$$usersContainer.appendChild(renderUser(user));
				});
				userContainer.remove();
			}
		} else if (event.target.className === 'delete-user'){
			var userContainer = event.target.parentNode;
			var id = userContainer.id;
			
			sendDeleteUserReq(id).then(function(response){
				if(response.ok) {
					return;
				} 
			}).then(function(){
				userContainer.remove();
			});
		}
	});

}

function sendEditUserReq(userContainer, id){
	
	var name = userContainer.querySelector('.user-name').value;
	var surname = userContainer.querySelector('.user-surname').value;

	return fetch('/api/user/' + id, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			surname: surname
		})
	})
}

function sendDeleteUserReq(id){
	return fetch('/api/user/' + id, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

function sendCreateUserReq(userContainer){

	var name = userContainer.querySelector('.user-name').value;
	var surname = userContainer.querySelector('.user-surname').value;

	return fetch('/api/user/', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			surname: surname
		})
	})
}