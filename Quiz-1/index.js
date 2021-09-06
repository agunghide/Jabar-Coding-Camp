//Soal 1 (1.Judul : Function Penghasil Tanggal Hari Esok)
function next_date(tanggal, bulan, tahun){
    var bulanStr
    
    if(bulan < 8){
        if(bulan % 2 == 1){ //Cek bulan Ganjil
            if(tanggal >= 31){ //Cek Tanggal 31
                tanggal = 1
                if(bulan >= 12){
                    bulan = 1
                    tahun++
                }else{
                    bulan++
                }
            }else{
                tanggal++
            }
        }else{
            if(tahun % 4 == 0){ // Cek Tahun Kabisat
                if(bulan==2){
                    if(tanggal >= 29){ //Cek tanggal 29
                        tanggal = 1
                        if(bulan >= 12){
                            bulan = 1
                            tahun++
                        }else{
                            bulan++
                        }
                    }else{
                        tanggal++
                    }
                }else{
                    if(tanggal >= 30){ //Cek tanggal 30
                        tanggal = 1
                        if(bulan >= 12){
                            bulan = 1
                            tahun++
                        }else{
                            bulan++
                        }
                    }else{
                        tanggal++
                    }
                }
            } else{
                if(bulan==2){
                    if(tanggal >= 28){ //Cek tanggal 28
                        tanggal = 1
                        if(bulan >= 12){
                            bulan = 1
                            tahun++
                        }else{
                            bulan++
                        }
                    }else{
                        tanggal++
                    }
                }else{
                    if(tanggal >= 30){ //Cek tanggal 30
                        tanggal = 1
                        if(bulan >= 12){
                            bulan = 1
                            tahun++
                        }else{
                            bulan++
                        }
                    }else{
                        tanggal++
                    }
                }
            }
        }
    }else{
        if(bulan % 2 == 1){ //Cek bulan Ganjil
            if(tanggal >= 30){ //Cek Tanggal 30
                tanggal = 1
                if(bulan >= 12){
                    bulan = 1
                    tahun++
                }else{
                    bulan++
                }
            }else{
                tanggal++
            }
        }else{
            if(tahun % 4 == 0){ // Cek Tahun Kabisat
                if(bulan==2){
                    if(tanggal >= 29){ //Cek tanggal 29
                        tanggal = 1
                        if(bulan >= 12){
                            bulan = 1
                            tahun++
                        }else{
                            bulan++
                        }
                    }else{
                        tanggal++
                    }
                }else{
                    if(tanggal >= 31){ //Cek tanggal 31
                        tanggal = 1
                        if(bulan >= 12){
                            bulan = 1
                            tahun++
                        }else{
                            bulan++
                        }
                    }else{
                        tanggal++
                    }
                }
            } else{
                if(bulan==2){
                    if(tanggal >= 28){ //Cek tanggal 28
                        tanggal = 1
                        if(bulan >= 12){
                            bulan = 1
                            tahun++
                        }else{
                            bulan++
                        }
                    }else{
                        tanggal++
                    }
                }else{
                    if(tanggal >= 31){ //Cek tanggal 31
                        tanggal = 1
                        if(bulan >= 12){
                            bulan = 1
                            tahun++
                        }else{
                            bulan++
                        }
                    }else{
                        tanggal++
                    }
                }
            }
        }

    }

    switch(bulan){ //Ubah Bulan Menjadi String
        case 1: { bulanStr = "Januari";break;}
        case 2: { bulanStr = "Februari";break;}
        case 3: { bulanStr = "Maret";break;}
        case 4: { bulanStr = "April";break;}
        case 5: { bulanStr = "Mei";break;}
        case 6: { bulanStr = "Juni";break;}
        case 7: { bulanStr = "Juli";break;}
        case 8: { bulanStr = "Agustus";break;}
        case 9: { bulanStr = "September";break;}
        case 10: { bulanStr = "Oktober";break;}
        case 11: { bulanStr = "November";break;}
        case 12: { bulanStr = "Desember";break;}
        default:{bulanStr = "Bulan Error"}
    }

    console.log(tanggal + " " + bulanStr + " " + tahun)
}

var tanggal = 29
var bulan = 2
var tahun = 2020

next_date(tanggal , bulan , tahun)

//Soal 2 (Judul : Function Penghitung Jumlah Kata)
function jumlah_kata(kalimat){
    var jumlah_kata = kalimat.split(' ')
    jumlah_kata = jumlah_kata.filter(function(item){
        return item != "";
     })
    console.log(jumlah_kata.length)
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = "Saya Iqbal"


jumlah_kata(kalimat_1)
jumlah_kata(kalimat_2)