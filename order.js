const orders = [
	{ produkt: "Telewizor", cena: 1500 },
	{ produkt: "Smartfon", cena: 800 },
	{ produkt: "Laptop", cena: 2000 },
	{ produkt: "Słuchawki", cena: 150 },
]

function calculateTotalOrder() {
	let sum = 0
	// for (const order of orders) {
	// 	const price = order.cena
	// 	sum = sum + price
	// }
	// for (let i = 0; i < orders.length; i++) {
    //    sum += orders[i].cena
    // }

    // orders.forEach(order => {
    //     sum+=order.cena
    // })

    // orders.map(order => {
    //     sum+=order.cena
    // })
	console.log(sum)
	return sum
}

export { calculateTotalOrder }



