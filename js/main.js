const button1 = document.querySelector('#b1')
const button2 = document.querySelector('#b2')
const button3 = document.querySelector('#b3')
const button4 = document.querySelector('#b4')

const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')

button1.addEventListener('click', function () {
	answer1.classList.toggle('active')
	answer2.classList.remove('active')
	answer3.classList.remove('active')
	answer4.classList.remove('active')
	button1.classList.toggle('clicked')
	button2.classList.remove('clicked')
	button3.classList.remove('clicked')
	button4.classList.remove('clicked')
})

button2.addEventListener('click', function () {
	answer2.classList.toggle('active')
	answer1.classList.remove('active')
	answer3.classList.remove('active')
	answer4.classList.remove('active')
	button2.classList.toggle('clicked')
	button1.classList.remove('clicked')
	button3.classList.remove('clicked')
	button4.classList.remove('clicked')
})

button3.addEventListener('click', function () {
	answer3.classList.toggle('active')
	answer2.classList.remove('active')
	answer1.classList.remove('active')
	answer4.classList.remove('active')
	button3.classList.toggle('clicked')
	button2.classList.remove('clicked')
	button1.classList.remove('clicked')
	button4.classList.remove('clicked')
})

button4.addEventListener('click', function () {
	answer4.classList.toggle('active')
	answer2.classList.remove('active')
	answer3.classList.remove('active')
	answer1.classList.remove('active')
	button4.classList.toggle('clicked')
	button2.classList.remove('clicked')
	button3.classList.remove('clicked')
	button1.classList.remove('clicked')
})
