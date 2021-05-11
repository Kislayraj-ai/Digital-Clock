//* month and weekday names
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

//* functin to set time
function time() {
	let date = new Date();
	const hour = document.querySelector('.hour');
	const min = document.querySelector('.min');
	const sec = document.querySelector('.sec');

	let hours = date.getHours();
	let mins = date.getMinutes();
	let secs = date.getSeconds();

	hour.textContent = hours - 12;
	min.textContent = mins;
	sec.textContent = secs;
	console.log(date.getDate());
}
setInterval(time, 1000);

//* operations for date ,month and year
const day = document.getElementById('day');
const currentDate = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const newDate = new Date();
day.textContent = newDate.getDate();
currentDate.textContent = weekdays[newDate.getDay()];
month.textContent = months[newDate.getMonth() + 1];
year.textContent = newDate.getFullYear();
