// 



Today

Team Acciojob  to  You (direct message) 15:29
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<!-- the entire body must be written by student -->
	<h1>Login Form</h1>
	<form onsubmit="handleSubmit()">
		<label for="username">Username:</label>
	<input placeholder="Username" id="username" type="text"/>
		<label for="password">Password:</label>
		
	<input placeholder="password" id="password" type="password"/>
	<input id="checkbox" type="checkbox"/>
	<label for="checkbox">Remember me:</label>
	<input id="submit" type="submit" value="Submit" />
	<button id="existing" type="submit"  hidden >Login as existing user</button>
	</form>
    <script type="text/javascript" src="./script.js">
</script>
</body>
</html>
Messages addressed to "Meeting Group Chat" will also appear in the meeting group chat in Team Chat

Team Acciojob  to  You (direct message) 15:30
//your JS code here. If required.
const username=document.getElementById("username");
const password=document.getElementById("password");
const remember=document.getElementById("checkbox");
const existingBtn=document.getElementById("existing");
const btn=document.getElementById("submit");
function handleSubmit() {
	this.event.preventDefault();
	if (remember.checked) {
		localStorage.setItem("username",username.value)
		localStorage.setItem("password",password.value);	
	}else {
		localStorage.removeItem("username")
		localStorage.removeItem("password");		
	}
	const alreadyUser=localStorage.getItem("username");
	const alreadyPassword=localStorage.getItem("password");
	console.log(alreadyPassword,alreadyUser,remember.checked)
if (alreadyPassword && alreadyUser) {
	existingBtn.hidden=false;
	
}else{
	existingBtn.hidden=true;
}
	
	alert("Logged in as username");
}