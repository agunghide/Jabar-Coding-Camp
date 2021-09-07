//Soal 1

var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var waktu = 10000

readBooks(waktu,books[0],(sisa) => {
    readBooks(sisa,books[1],(sisa) => {
        readBooks(sisa,books[2],(sisa) => {
            readBooks(sisa,books[3],(sisa) => {
                console.log(`Seluruh buku telah dibaca`)
            })
        })
    })
})