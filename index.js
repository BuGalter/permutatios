const fs = require('fs');
const os = require('os');

/**
 * pemutations module.
 * @module testtask-permutations/index
 */

function generateNumber(n) {
  /**
   * The function returns an array that contains the start number.
   * @param {number} n - Number of digits in a number.
   * @return {Array<number>} number - The start number.
   */
  const repeatingDigit = 0;
  let number = [];
  for (let i = 0; i < n; i += 1) {
    number[i] = repeatingDigit;
  };
  for(let j = 1; j < (n + 1); j += 1) {
    number.push(j);
  };
  return number;
};

function writeFile(number, fileName) {
  /**
   * The function write to file number.
   * @param {Array<number>} number - Number.
   * @param {String} fileName - File name.
   */
  const newLine = os.EOL;
  try {
    fs.appendFileSync(fileName, `${newLine}${number.join('')}`);
  } catch(error) {
    console.log('Возникла проблема при записи в файл!');
    console.log(error.name);
    console.log(error.message);
    process.exit(1);
  };
};

function swap(number, i, j) {
  /**
   * The function to exchange two elements of an array.
   * @param {Array<number>} number - Number.
   * @param {number} i - The position of the array element to swap.
   * @param {number} j - The position of the array element to swap.
   */
  let s = number[i];
  number[i] = number[j];
  number[j] = s;
};

function nextPermutation(number, n) {
  /**
   * Function to generate the next permutation.
   * @param {Array<number>} number - Number.
   * @param {number} n - Number of digits in a number.
   * @returns {boolean} - Signals if there are more permutations.
   */
  let j = n - 2;
  // Проходим по массиву, если он отсортирован в обратном лексикографическом порядке,
  // значит больше перестановк нет. Иначе находим позицию первого символа для обмена.
  while (j != -1 && number[j] >= number[j + 1]) {
    j -= 1;
  };
  if (j == -1)
    return false; // подааем сигнал, что перестановок больше нет
  let k = n - 1;
  // Находим позицию второго символа для обмена.
  while (number[j] >= number[k]) {
    k -= 1;
  };
  swap(number, j, k); //Обмениваем их
  let l = j + 1; 
  let r = n - 1; 
  // Сортируем оставшуюся часть последовательности
  while (l < r) {
    swap(number, l++, r--);
  };
  return true;
};

function permutations(n) {
  /**
   * The function returns a text file that contains all permutations without repetitions,
   * n identical and different numbers from 1 to n.
   * @param {number} n - Number of digits in a number.
   * @return {number} numberLinesFile - The number of lines in the file. And file out.txt with
   * all permutations.
   */
  const fileName = 'out.txt';
  let numberLinesFile = 1; // Потому что начальную перестановку пишем вне цикла
  let number = generateNumber(n);
  let len = number.length;
  try {
    fs.writeFileSync(fileName, number.join(''));
  } catch(error) {
    console.log('Возникла проблема при записи в файл!');
    console.log(error.name);
    console.log(error.message);
    process.exit(1);
  };
  while (nextPermutation(number, len)) {
    writeFile(number, fileName);
    numberLinesFile += 1;
  };
  return numberLinesFile;
};

console.log(`Запись в файл завершенна. Количество записей: ${permutations(5)}`);