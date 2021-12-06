// console.log('Hello');

// Простой класс
/*
class Bike {
  constructor (model, color) {
    this.model = model;
    this.color = color;
    this.modification = false;
  }

  getDetails(){
    return this.model + ' bike has ' + this.color + ' color';
  }

  setMod(modification){
    this.modification = modification;
  }

  getMod(){
    if(this.modification)
      return this.model + ' bike has modification ' + this.modification;
    else
      return this.model + ' bike hasn\'t modification';
  }

}

let bike = new Bike("BMW", "white");
  // console.log(bike.getDetails());
  // console.log(bike.getMod());

let bike1 = new Bike("BMW2", "black");
  bike1.setMod('spider');
  // console.log(bike1.getDetails());
  // console.log(bike1.getMod());

// #########################################################################################################
// Вычисление факториала

const factorial = (n) => (n!=1) ? n * factorial(n-1): 1;


// ==============================
let arr = [1,2,22,33,12,333,12,11,4,5,8,5];


//Сортировка массива
arr.sort( (a,b) => b - a );
// [333, 33, 22, 12, 12, 11, 8, 5, 5, 4, 2, 1] по убыванию

arr.sort( (a,b) => a - b );
// [1, 2, 4, 5, 5, 8, 11, 12, 12, 22, 33, 333] по возрастания

arr.sort();
// [1, 11, 12, 12, 2, 22, 33, 333, 4, 5, 5, 8] по строковому

// Поиск минимального и максимального значения в массиве
function arrayMin(arr) {
  return arr.reduce(function (p, v) {
    return ( p < v ? p : v );
  });
}
function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}
const arrayMin1 = (arr) => arr.reduce( (p, v) =>  p < v ? p : v );
const arrayMax1 = (arr) => arr.reduce( (p, v) =>  p > v ? p : v );
const arrayMin2 = (arr) => Math.min(...arr);
const arrayMax2 = (arr) => Math.max(...arr);
console.log(arrayMin2(arr));
console.log(arrayMax2(arr));

// Сумма элементов массива
const arraSum = (arr) => arr.reduce( (a, b) => a + b);

// Поменять порядок элементов в массиве
arr.reverse(); // [5, 8, 5, 4, 11, 12, 333, 12, 33, 22, 2, 1]

// Удалить дубли из массива
console.log( [... new Set([1, 2, 3, 4, 3, 4, 5, 7, 6])] );
// ==============================

// ==============================
// Вычисление факториала
const factorial = (n) => (n!=1) ? n * factorial(n-1): 1;



/// ==============
const filterAdults = function(arr){
  const age = 18;
  let result = [];
  arr.forEach((el) => {
      // console.log(el);
      if(el.age >= age) result.push(el);
  });
  return result;
}
// const array1 = [{name: "ada", age: 40}​​​​​​, {name: "john", age: 15}​​​​​​, {name: "Anna", age: 25}​​​​​​];
const array1 = [{name: "Axe", age: 12}, {name: "John", age: 21}, {name: "Runi", age: 32}];
// const array1 = [​];

console.log(filterAdults(array1));

// Алгоритм 1: бинарный поиск
// выскоя скорость O(log n). Работает с только отсортированными массивами
//функция принимает получает отсортированный массив и значение. Если значение присутсвует в массиве, то функция возвращает его позицию

//let item = 7;
let arrTest = [1, 5, 7, 10, 13, 17, 20, 22];
//console.log(arr.length);

function binarySearch(arr, item = 1) {
    let low = 0;//нижняя позиция массива
    let hight = arr.length - 1;//верхняя позиция массива
    //console.log(hight);

    while (low <= hight) {
        let mid = Math.floor((low + hight) / 2); //находим середину и округляем до меньшего целого
        //console.log(mid);
        let guess = arr[mid]; //значение в позиции mid
        //console.log(guess);

        if (guess === item) {
            //console.log(mid);
            return mid;
            //break;
        } else if (guess > item) {
            hight = mid - 1; //чтобы добраться до 0 позиции в массиве
        } else if (guess < item) {
            low = mid + 1;
        }
    };
    return `Такого значения как ${item} нет в массиве!`;
}

console.log(binarySearch(arrTest, 17));
console.log(binarySearch(arrTest, 5));
console.log(binarySearch(arrTest, 0));
console.log(binarySearch(arrTest));

//работает со значением item по умолчанию
//пузырьковая сортировка
//Алгоритм очень прост в реализации, но малоэффективен
// Эффективность слабая («О» большое):
//        Наилучший вариант: O(n).
//         Средний и худший варианты: O(n²)

let arr = [5, 3, -2, 10, 20, 50, 30];

function bSort(arr) {

    for (let t = 0; t < arr.length - 1 - 1; t++){
        for (let i = 0; i < arr.length - 1; i++) {
            let left = arr[i];
            let right = arr[i + 1];

            if (left > right) {
                arr[i + 1] = left;
                arr[i] = right;
            }
        }
    }

    return arr;
}
console.log(bSort(arr));
//====================================
//пузырьковая сортировка (второй вариант, меньше нравится)
//решение с RSSchool  https://rolling-scopes-school.github.io/2021q3/#/stage0/materials/algorithms
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let t = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = t;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort(arr));
// ================================================

*/
