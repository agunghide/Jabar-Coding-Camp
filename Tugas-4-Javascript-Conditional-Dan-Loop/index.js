//Soal 1

var nilai = 75

if(nilai >= 85){
    console.log("A")
} else if(nilai >= 75 && nilai < 85){
    console.log("B")
} else if(nilai >= 65 && nilai < 75){
    console.log("C")
} else if(nilai >= 55 && nilai < 65){
    console.log("D")
} else if(nilai < 55){
    console.log("E")
}

//Soal 2
var tanggal = 15;
var bulan = 3;
var tahun = 2000;

switch(bulan){
    case 1: { bulan = " Januari ";break;}
    case 2: { bulan = " Februari ";break;}
    case 3: { bulan = " Maret ";break;}
    case 4: { bulan = " April ";break;}
    case 5: { bulan = " Mei ";break;}
    case 6: { bulan = " Juni ";break;}
    case 7: { bulan = " Juli ";break;}
    case 8: { bulan = " Agustus ";break;}
    case 9: { bulan = " September ";break;}
    case 10: { bulan = " Oktober ";break;}
    case 11: { bulan = " November ";break;}
    case 12: { bulan = " Desember ";break;}
}

console.log(tanggal + bulan + tahun);

//Soal 3

var n = 7
var loop = 0
var hashtag = ""

while(loop < n){
    hashtag += "#"
    console.log(hashtag)
    loop++;
}

//Soal 4

var m = 10
var equal = ""

for (var index = 1; index <= m; index++) {
    if(index % 3 == 1){
        console.log(index + " - I love programming")
    } else if(index % 3 == 2){
        console.log(index + " - I love Javascript")
    } else if(index % 3 == 0){
        console.log(index + " - I love VueJS")
        equal += "==="
        console.log(equal)
    }
}