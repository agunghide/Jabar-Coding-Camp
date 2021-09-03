//Soal 1

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"]
daftarHewan.sort()

for (var loop = 0; loop < daftarHewan.length; loop++) {
    console.log(daftarHewan[loop])    
}

//Soal 2

function introduce(data){
    return "Nama saya " + data.name + " umur saya " + data.age + " tahun, alamat saya di " + data.address + ", dan saya punya hobby yaitu " + data.hobby + "!"
}
 
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
 
var perkenalan = introduce(data)
console.log(perkenalan)

//Soal 3

function hitung_huruf_vokal(string) {
    var vokal = 0
    for (var loop = 0; loop < string.length; loop++) {
        var target = string[loop].toLowerCase()
        if(target == "a" || target == "i" || target == "u" || target == "e" || target == "o") {
            vokal++
        }
        
    }
    return vokal
}

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2)

//Soal 4
function hitung(nilai){
    return nilai * 2 - 2
}

console.log( hitung(0) )
console.log( hitung(1) )
console.log( hitung(2) )
console.log( hitung(3) )
console.log( hitung(5) )