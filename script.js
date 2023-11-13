// DOM Elements
const queueElement = document.getElementById('queue')
const orderElement = document.getElementById('order')
const burgerElement = document.getElementById('burger')
const addOnElement = document.getElementById('addOn')

// Variables
const data = []
let i = 0

// Event Listeners
orderElement.addEventListener('click', () => {
	addOrder()
})

// Functions

const addOrder = () => {
	data.push({
		id: i++,
		burger: burgerElement.value,
		addOn: addOnElement.value,
	})
}
