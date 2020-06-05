const body = document.querySelector('body')

document.addEventListener('mousemove', e => {
	const bubbles = document.createElement('span')

	const x = e.offsetX
	const y = e.offsetY
	const size = Math.random() * 100
	const opacity = Math.random()

	bubbles.style.left = x + 'px'
	bubbles.style.top = y + 'px'
	bubbles.style.width = 20 + size + 'px'
	bubbles.style.height = 20 + size + 'px'
	bubbles.style.opacity = opacity

	setTimeout(() => {
		bubbles.remove()
	}, 3900)

	body.appendChild(bubbles)
})