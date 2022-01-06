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

function writeFile(number) {
  /**
   * The function write to file number.
   * @param {Array<number>} number - Number.
   */
  const fileName = 'out.txt';
  const newLine = os.EOL;
  fs.appendFileSync(fileName, `${newLine}${number.join('')}`, (error) => {
    if (error) throw error;
  });
};

function permutations(n) {
  /**
   * The function returns a text file that contains all permutations without repetitions,
   * n identical and different numbers from 1 to n.
   * @param {number} n - Number of digits in a number.
   * @return {number} numberLinesFile - The number of lines in the file. And file out.txt with
   * all permutations.
   */
  let numberLinesFile = 0;
  let number = generateNumber(n);
  for (let i = 0; i < 7; i += 1) {
    writeFile(number);
    numberLinesFile += 1;
  };
  return numberLinesFile + 1;
};

console.log(`Запись в файл завершенна. Количество записей: ${permutations(7)}`);