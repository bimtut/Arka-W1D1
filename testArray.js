let arr = [
    {
        name: "Bima Putra",
        birth: "10 Agustus"
    },
    {
        name: "Ari Azhari",
        birth: "19 Januari"
    }
]

// membaca seluruh data dengan map
console.log(`menampilkan seluruh data yang ada dalam satu array menggunakan map`)
arr.map(x => console.log(x))

// nambah data
// menambah data di index terakhir
arr.push({
    name: "Telo Rambak",
    birth: "20 Maret"
})
console.log(`\nmenambahkan satu data pada index terakhir`)
console.log(arr)

// menambah data di index paling awal
arr.unshift({
    name: "Sate Bekicot",
    birth: "2 Februari"
})
console.log(`\nmenambahkan satu data pada index terkecil`)
console.log(arr)

//menambah dengan menggabungkan 2 array namun tidak merubah array lama, jadi bikin array baru aja
let secondArray = [{
    name: "Es Mony",
    birth: "9 September"
},
{
    name: "Bakpao Jogja",
    birth: "17 Agustus"
}]

let result = arr.concat(secondArray)
console.log(`\nmenggabungkan 2 buah array menjadi array baru`)
console.log(result)

// menambah secara custom dengan splice (ini juga bisa dipake ngurangin)
// syarat untuk menambah adalah argumen kedua diisi 0 lalu argumen selanjutnya diisi konten yang akan dimasukkan
let nasgor = {
    name: "Nasi Goreng",
    birth: "24 Mei"
}
let mie = {
    name: "Mie Ayam",
    birth: "9 Desember"
}
result.splice(3,0, nasgor, mie)
console.log(`\nmenambah data secara custom menggunakan SPLICE`)
console.log(result)

// menghapus
// menghapus data di index paling kecil
result.shift()
console.log(`\nmenghapus data dari index terkecil`)
console.log(result)

// menghapus data di index besar
result.pop()
console.log(`\nmenghapus data dari index terbesar`)
console.log(result)

// menghapus data secara custom
result.splice(1,2)
console.log(`\nmenghapus data secara custom pakai SPLICE`)
console.log(result)


// menghapus sekaligus replace/menambahkan data dengan splice 
let pizza = {
    name: "Pizza Gratis",
    birth: "8 Juni"
}
result.splice(2,1, pizza)
console.log(`\nmenghapus data sekaligus menambah (replace) pakai SPLICE`)
console.log(result)


// mengedit data
result[1].name = "BAKPIA PATHOK"
console.log(`\nMengedit data yang ada pada array`)
console.log(result)
