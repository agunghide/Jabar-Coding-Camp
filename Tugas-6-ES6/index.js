//===================================================
//Soal 1 

const panjang = 24
const lebar = 2

//Rumus Luas (Luas = panjang x lebar)
const luas = () => {
    return panjang * lebar
}

//Rumus Keliling (Keliing = 2(panjang + lebar))
const keliling = () => {
    return 2 * (panjang + lebar)
}

console.log(`Luas Persegi Panjang : ${luas()}`)
console.log(`Keliling Persegi Panjang : ${keliling()}`)

//===================================================
//Soal 2

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => { console.log(`${firstName} ${lastName}`) }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()

//===================================================
//Soal 3

const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}


const {firstName,lastName,address,hobby} = newObject

// Driver code
console.log(firstName, lastName, address, hobby)

//===================================================
//Soal 4

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]

//Driver Code
console.log(combined)

//===================================================
//Soal 5

const planet = "earth" 
const view = "glass" 

var before = 'Lorem ' + view + ' dolor sit amet, ' + 'consectetur adipiscing elit, ' + planet 

const after = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}` 

console.log(after)