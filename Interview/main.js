// Create a registration system
var objPeople = [
	{
		username: 'meow',
		password: 'password25',
		Email: 'abc@xyz.com',
		Address: 'India',
		Phone: '8098996758'

	},
	{
		username: 'inu',
		password: 'password88',
		Email: 'xyz@abc.com',
		Address: 'India',
		Phone: '9401486575'
	},
]

// login functionality
function login() {
	// retreive data from username and store in username variable
	var username = document.getElementById('username').value
	// retreive data from password and store in password variable
	var password = document.getElementById('password').value

	// loop through all the user pbjects and confrim if the username and password are correct
	for(var i = 0; i < objPeople.length; i++) {
		// check to 
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + ' is logged in!!!')
			// stop the statement if result is found true - this was a return in the video, break is best practice here
			break
		} else {
			// error if username and password don't match
			console.log('incorrect username or password')
		}
	}
}

// register functionality
function registerUser() {
	var Validation = (function (){
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var digitReg = /^\d+$/;
	// store new users username
	var registerUsername = document.getElementById('newUsername').value
	// store new users password
	var registerPassword = document.getElementById('newPassword').value
	// store new users Email
	var registerEmail = document.getElementById('newEmail').value
	// store new users Address
	var registerAddress = document.getElementById('newAddress').value
	// store new users Number
	var registerPhone = document.getElementById('newPhone').value
	// store new user data in an object
});
	var newUser = {
		username: registerUsername,
		password: registerPassword,
		Email: registerEmail,
		Address: registerAddress,
		Phone: registerPhone
	}
	}

	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objPeople.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerUser == objPeople[i].username) {
			// alert user that the username is take
			alert('That username is alreat in user, please choose another')
			// stop the statement if result is found true
			break
			//check if new phone number is already taken
		} else if (registerPhone.length == 10) {
			// alert user that the password is to short
			alert('Phone number should be of 10 numbers')
			// stop the statement if result is found true
			break
		}
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 8) {
			// alert user that the password is to short
			alert('That is to short, include 8 or more characters')
			// stop the statement if result is found true
			break
		}
	}
	// push new object to the people array
	objPeople.push(newUser)
	// console the updated people array
	console.log(objPeople)
}