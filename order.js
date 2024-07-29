const orders = [
	{ produkt: "Telewizor", cena: 1500 },
	{ produkt: "Smartfon", cena: 800 },
	{ produkt: "Laptop", cena: 2000 },
	{ produkt: "Słuchawki", cena: 150 },
]

function calculateTotalOrder() {
	let sum = 0
	for (const order of orders) {
		const price = order.cena
		sum += price
	}

	return sum
}

export { calculateTotalOrder }
