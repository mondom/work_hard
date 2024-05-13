'use strict'

const bookCollection = {
	book1: {
		author: 'Author 1',
		year: 2000,
        type: 'detective story'
	},
	book2: {
		author: 'Autor 2',
		year: 2005,
        type: 'thriller'
	},
	book3: {
		author: 'Autor 3',
		year: 2010,
        type: 'romance'
	},
}

const selectData = (arrOfObj) => {
for(const book in arrOfObj){
    console.log(book);
    const bookDetails = arrOfObj[book]
    console.log(bookDetails.type);
}
}

selectData(bookCollection)

