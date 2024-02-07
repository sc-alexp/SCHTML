.container {
  position: relative;
}

.vertical-center {
  margin: auto;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

body {
}

h1 {
	font-family: Nimbus Sans,sans-serif;
	font-size:24px;
	color: white;
	transition: 0.3s;
}

h1:hover {
	opacity: 0.5;
}

.isulogo {
	filter: brightness(0) invert(1);
	transition: 0.3s;
}

.isulogo:hover {
	opacity: 0.5;
}

p {
	font-family: Nimbus Sans,sans-serif;
	
	padding: 0px;
	margin: 0px;
}

.btn-group button {
  background-color: lightgray;
  color: black;
  border: none;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 1px;
  cursor: pointer;
  float: left;
  font-family: Nimbus Sans,sans-serif;
  font-size: 18px;
}

.btn-group button:hover {
  background-color: darkgray;
}

.btn-group button:active {
  transform: translateY(2px);
}

textarea {
	width: 600px;
	height: 200px;
	border-radius: 5px;
	border-width: 3px;
	border-color: lightgray;
	box-shadow: 0px 0px 30px lightgray;
	resize: none;
	font-family: Lato, Arial, sans-serif;
	font-size: 14px;
}

.submit-btn {
	padding: 10px 15px;
	font-size: 24px;
	text-align: center;
	cursor: pointer;
	outline: none;
	color: white;
	background-color: #C8102E;
	border: none;
	border-radius: 15px;
	box-shadow: 0 9px #520713;
	transition: 0.1s;
}

.submit-btn:active {
	color: lightgreen;
	background-color: #7A0A1D;
	box-shadow: 0 5px #520713, 0px 0px 25px lightgreen, 0px 0px 100px lightgreen;
	text-shadow: 0px 0px 10px lightgreen;
	transform: translateY(4px);
}

.submit-btn:hover {
	color: lightgreen;
}

.reset-btn {
	padding: 5px 10px;
	font-size: 12px;
	text-align: center;
	cursor: pointer;
	outline: none;
	color: white;
	background-color: #C8102E;
	border: none;
	border-radius: 15px;
	box-shadow: 0 3px #520713;
	transition: 0.1s;
}

.reset-btn:active {
	color: red;
	background-color: #7A0A1D;
	box-shadow: 0 0px #520713, 0px 0px 25px red, 0px 0px 100px red;
	text-shadow: 0px 0px 10px red;
	transform: translateY(3px);
}

.reset-btn:hover {
	color: red;
}
