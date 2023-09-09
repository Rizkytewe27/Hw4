// Fungsi untuk menghasilkan array dengan 100 nilai random antara 1 sampai 50
function generateRandomArray() {
  const randomArray = [];
  for (let i = 0; i < 100; i++) {
    const randomValue = Math.floor(Math.random() * 50) + 1;
    randomArray.push(randomValue);
  }
  return randomArray;
}

// Fungsi untuk memisahkan array menjadi array genap dan ganjil
function pisahArray(arr) {
  const genap = [];
  const ganjil = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      genap.push(arr[i]);
    } else {
      ganjil.push(arr[i]);
    }
  }
  return [genap, ganjil];
}

// Fungsi untuk menghitung min, max, total, dan rata-rata dari sebuah array
function kalkulasi(arr) {
  let min = arr[0];
  let max = arr[0];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    total += value;

    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  }

  const rataRata = total / arr.length;
  return [min, max, total, rataRata];
}

// Generate array dengan 100 nilai random
const randomArray = generateRandomArray();

// Pisahkan array menjadi array genap dan ganjil
const [genap, ganjil] = pisahArray(randomArray);

// Hitung statistik untuk array genap dan ganjil
const [minGenap, maxGenap, totalGenap, rataRataGenap] = kalkulasi(genap);
const [minGanjil, maxGanjil, totalGanjil, rataRataGanjil] = kalkulasi(ganjil);

// Menampilkan hasil
console.log("Array dengan jumlah index 100:", randomArray);
console.log("Array genap dengan jumlah index 50:", genap);
console.log("Array ganjil dengan jumlah index 50:", ganjil);

console.log("Statistik Array Genap:");
console.log("Min:", minGenap);
console.log("Max:", maxGenap);
console.log("Total:", totalGenap);
console.log("Rata-rata:", rataRataGenap);

console.log("Statistik Array Ganjil:");
console.log("Min:", minGanjil);
console.log("Max:", maxGanjil);
console.log("Total:", totalGanjil);
console.log("Rata-rata:", rataRataGanjil);

// Membandingkan statistik
console.log("Perbandingan Statistik:");
if (minGenap > minGanjil) {
  console.log("Min lebih besar pada Array Genap");
} else {
  console.log("Min lebih besar pada Array Ganjil");
}

if (maxGenap > maxGanjil) {
  console.log("Max lebih besar pada Array Genap");
} else {
  console.log("Max lebih besar pada Array Ganjil");
}

if (totalGenap === totalGanjil) {
  console.log("Total memiliki nilai yang sama pada kedua array");
} else if (totalGenap > totalGanjil) {
  console.log("Total lebih besar pada Array Genap");
} else {
  console.log("Total lebih besar pada Array Ganjil");
}

if (rataRataGenap > rataRataGanjil) {
  console.log("Rata-rata lebih besar pada Array Genap");
} else {
  console.log("Rata-rata lebih besar pada Array Ganjil");
}