//Soal 2

var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var waktu = 4000

readBooksPromise(waktu,books[0]).then((sisa) => {

    if(sisa == 0) return false //Menghentikan Promise jika Sisa 0

    readBooksPromise(sisa,books[1]).then((sisa) => {

        if(sisa == 0) return false //Menghentikan Promise jika Sisa 0

        readBooksPromise(sisa,books[2]).then((sisa) => {
            
            if(sisa == 0) return false //Menghentikan Promise jika Sisa 0

            readBooksPromise(sisa,books[3]).then(sisa => {}).catch(sisa => {})

        }).catch(sisa => {
            readBooksPromise(sisa,books[3]).then((sisa) => {}).catch(sisa => {})
        })
    }).catch(sisa => {
        readBooksPromise(sisa,books[2]).then((sisa) => {}).catch(sisa => {})
    })
}).catch(sisa => {
    readBooksPromise(sisa,books[3]).then((sisa) => {}).catch(sisa => {})
})
