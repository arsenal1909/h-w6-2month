// Функция для вычисления среднего арифметического числа из массива
function average(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

// Функция для копирования массива и применения callback функции к каждому элементу
function copy(array, callback) {
  let copiedArray = [];

  for (let i = 0; i < array.length; i++) {
    copiedArray.push(callback(array[i]));
  }

  return copiedArray;
}

// Тестовый массив
let mass = [2, 3, 4];

// Вычисление среднего арифметического числа
let averageNumber = average(mass);

// Копирование массива с применением функции возведения в квадрат
let mass2 = copy(mass, function(num) {
  return num ** 2;
});

console.log(mass);// [2, 3, 4]
console.log(averageNumber);//  3
console.log(mass2);//  [4, 9, 16]
