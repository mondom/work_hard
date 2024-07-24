"use strict"

function compressFile(file) {
	return new Promise(resolve => {
		const randomDelay = Math.floor(Math.random() * 2000) + 1000
		setTimeout(() => resolve("Skompresowano plik: " + file), randomDelay)
	})
}

const filesToCompress = [
	"obrazek.jpg",
	"dokument.docx",
	"muzyka.mp3",
	"video.mp4",
	"index.html",
]

async function compressFiles() {
	const compressFileArr = []

	for (const file of filesToCompress) {
		const result = await compressFile(file)
		compressFileArr.push(file)
		console.log(result)
	}
	return compressFileArr
}

compressFiles()
	.then(result => {
		console.log("----------------")
		console.log("Proces kompresji zakonczony.")
		console.log("Skompresowane pliki:")
		console.log(result)
	})
	.catch(err => {
		console.error("Wystąpił błąd podczas kompresji plików:", err)
	})


