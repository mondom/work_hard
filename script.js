'use strict'
const transactions = [
	{ name: 'Product A', price: 10, cost: 5, quantity: 20 },
	{ name: 'Product B', price: 8, cost: 4, quantity: 30 },
	{ name: 'Product C', price: 12, cost: 6, quantity: 15 },
]

function calculateTotalRevenue(transactions) {
	const total = transactions.reduce((acc, obj) => {
		const count = obj.price * obj.quantity
		acc += count
		return acc
	}, 0)
	return total
}

const resultTotal = calculateTotalRevenue.apply(null, [transactions])
console.log("Calkowite przychody:",resultTotal)

function findBestSellingProduct(transactions) {
	const bestSelling = transactions.reduce((max, curr) => {
		return max.quantity > curr.quantity ? max : curr
	}, 0)
	return bestSelling.name
}

const resultBestSelling = findBestSellingProduct.apply(null, [transactions])
console.log("Najlepiej sprzedajacy sie produkt:",resultBestSelling)

function findMostProfitableProduct(transactions) {
	const mostProfitable = transactions.reduce((maxProduct, currProduct) => {
		const maxProfit = (maxProduct.price - maxProduct.cost) * maxProduct.quantity
		const currProfit = (currProduct.price - currProduct.cost) * currProduct.quantity
		return currProfit > maxProfit ? currProduct : maxProduct;
	}, transactions[0])
	return mostProfitable.name

}

const mostProfitable = findMostProfitableProduct.apply(null, [transactions])
console.log("Najbardziej dochodowy produkt:",mostProfitable)
