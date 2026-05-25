const promptSync = require('prompt-sync');

const prompt = promptSync();

// ==============================
// FUNCTION OPERASI
// ==============================

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if ((a | b) === 0) {
    throw new Error('Error: Tidak bisa membagi dengan 0');
  }

  return a / b;
}

function modulo(a, b) {
  if ((a | b) === 0) {
    throw new Error('Error: Tidak bisa modulo dengan 0');
  }

  return a % b;
}

function pangkat(a, b) {
  return a ** b;
}

// ==============================
// VALIDASI INPUT ANGKA
// ==============================

function inputAngka(pesan) {
  while (true) {
    const inputUser = prompt(pesan);

    // konversi tipe data
    const angka = Number(inputUser);

    // validasi angka
    if (!isNaN(angka)) {
      return angka;
    }

    console.log('Error: Input harus berupa angka!');
  }
}

// ==============================
// ANALISIS HASIL
// ==============================

function analisisHasil(hasil) {
  console.log('\n========== ANALISIS HASIL ==========');

  // typeof
  console.log(`Tipe data : ${typeof hasil}`);

  // positif / negatif / nol
  if (hasil > 0) {
    console.log('Kategori  : Positif');
  } else if (hasil < 0) {
    console.log('Kategori  : Negatif');
  } else {
    console.log('Kategori  : Nol');
  }

  // integer / desimal
  console.log(
    `Bentuk     : ${Number.isInteger(hasil) ? 'Integer' : 'Desimal'}`
  );

  // genap / ganjil
  if (Number.isInteger(hasil)) {
    const status = hasil % 2 === 0 ? 'Genap' : 'Ganjil';

    console.log(`Bilangan   : ${status}`);
  } else {
    console.log('Bilangan   : Bukan integer');
  }

  // operator logika && ||
  const validNumber = typeof hasil === 'number' && !isNaN(hasil);

  console.log(`Valid      : ${validNumber ? 'Ya' : 'Tidak'}`);

  console.log('====================================\n');
}

// ==============================
// PROGRAM UTAMA
// ==============================

while (true) {
  console.log('===== KALKULATOR JAVASCRIPT =====');
  console.log('+  -> Penjumlahan');
  console.log('-  -> Pengurangan');
  console.log('*  -> Perkalian');
  console.log('/  -> Pembagian');
  console.log('%  -> Modulo');
  console.log('** -> Pangkat');
  console.log('=================================\n');

  // input user
  const angka1 = inputAngka('Masukkan angka pertama: ');

  // gunakan ??
  const operator = prompt('Masukkan operator: ') ?? '';

  const angka2 = inputAngka('Masukkan angka kedua: ');

  let hasil;

  try {
    // switch operator
    switch (operator) {
      case '+':
        hasil = tambah(angka1, angka2);
        break;

      case '-':
        hasil = kurang(angka1, angka2);
        break;

      case '*':
        hasil = kali(angka1, angka2);
        break;

      case '/':
        hasil = bagi(angka1, angka2);
        break;

      case '%':
        hasil = modulo(angka1, angka2);
        break;

      case '**':
        hasil = pangkat(angka1, angka2);
        break;

      default:
        throw new Error('Error: Operator tidak valid!');
    }

    // tampilkan hasil
    console.log(`\n Hasil: ${hasil}`);

    // analisis hasil
    analisisHasil(hasil);
  } catch (error) {
    // error message
    console.log(` ${error.message}`);
  }

  // lanjut atau tidak
  const lanjut = prompt('Ingin lanjut? (yes/no): ')?.toLowerCase() ?? 'yes';

  // case-insensitive
  if (lanjut === 'no') {
    console.log('\nProgram dihentikan.');
    break;
  }

  console.log('\n');
}
