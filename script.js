"use strict"

function doThings1() {
	return Promise.resolve("ok")
}

doThings1().then(res => {
	console.log(res)
})

async function myTest() {
	return "sprawdźmy"
}

async function runTest(){
    try{
        const result = await myTest()
        console.log(result);
    }
    catch{
        err=> console.log(err);
    }
}

runTest()