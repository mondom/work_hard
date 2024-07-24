"use strict"

function loadUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("A"); }, 1000)
    });
}

function loadBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("B"); }, 1500)
    });
}

function loadPets() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("C"); }, 2000)
    });
}

async function render() {
    const user = await loadUserData();
    const books = await loadBooks();
    const pets = await loadPets();
    return {user, books, pets}
}

async function showResult(){
    const result = await render()
    console.log(result);
}

showResult()


