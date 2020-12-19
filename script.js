let userName = prompt('Enter your name: ');

userName !== '' && userName !== null
	? alert(`Hello, ${userName}!!!`)
	: alert(`Hello Guest`);

let userQuestion = prompt('Ask me whatever you want...');

userName == '' || userName == null
	? console.log(`Guest asked "${userQuestion}"`)
	: console.log(`${userName} asked "${userQuestion}"`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
	case 0:
		alert('It is certain');
		break;
	case 1:
		alert('It is decidedly so');
		break;
	case 2:
		alert('Reply hazy try again');
		break;
	case 3:
		alert('Cannot predict now');
		break;
	case 4:
		alert('Do not count on it');
		break;
	case 5:
		alert('My sources say no');
		break;
	case 6:
		alert('Outlook not so good');
		break;
	case 7:
		alert('Signs point to yes');
		break;
}
