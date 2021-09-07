//Soal 2
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var waktu = 10000

readBooksPromise(waktu,books[0]).then((sisa) => {
    readBooksPromise(sisa,books[1]).then((sisa) => {
        readBooksPromise(sisa,books[2]).then((sisa) => {
            readBooksPromise(sisa,books[3]).then((sisa) => {}).catch(error => console.log(error))
        }).catch(error => console.log(error))
    }).catch(error => console.log(error))
}).catch(error => console.log(error))
