function is_username_valid(username) {
	var nameRegex = /^[a-zA-Z0-9]{0,9}$/;
	if(nameRegex.test(username)) {
		console.log()
		return true;
	} else {
		return false;
	}
}

function is_password_valid(password) {
	var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*@)(?=.{8,})/;
	if(passwordRegex.test(password)) {
		return true;
	} else {
		return false;
	}
}


is_username_valid('@Najibb');
is_username_valid('Ayu99v');
is_password_valid('p@ssW0rd#');
is_password_valid('DumbW4ysDev99!#');
