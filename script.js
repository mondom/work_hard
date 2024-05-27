'use strict'

function test() {
    const zamowienia = [
        {
            klient: "Jan Kowalski",
            produkty: [
                { nazwa: "Telefon", cena: 1500 },
                { nazwa: "Klawiatura", cena: 200 },
                { nazwa: "Myszka", cena: 50 },
            ],
        },
        {
            klient: "Anna Nowak",
            produkty: [
                { nazwa: "Laptop", cena: 2500 },
                { nazwa: "Monitor", cena: 1000 },
            ],
        },
        {
            klient: "Tomasz Krakowiak",
            produkty: [
                { nazwa: "Karta graficzna", cena: 2100 },
                { nazwa: "Procesor", cena: 1500 },
                { nazwa: "Pamiec RAM", cena: 800 },
            ],
        },
    ];
 
    const wartosciZamowien = zamowienia.map((zamowienie) => {
        const wartosc = zamowienie.produkty.reduce(
            (suma, produkt) => suma + produkt.cena,
            0
        );
        return {
            klient: zamowienie.klient,
            wartoscZamowienia: wartosc,
        };
    });
 
    wartosciZamowien.forEach((zamowienie) => {
        console.log(
            "[Klient]",
            zamowienie.klient,
            "[Wartosc zamowienia]",
            zamowienie.wartoscZamowienia
        );
    });
}
 
test();