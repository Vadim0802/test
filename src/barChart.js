/*
Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран столбчатую диаграмму.
Функция принимает в качестве параметра последовательность чисел, длина которой равна количеству столбцов диаграммы.
Размер диаграммы по вертикали должен определяться входными данными.
*/
import _ from 'lodash';

const barChart = (seq) => {
  const bottom = Math.min(...seq, 0);
  const top = Math.max(...seq, 0);

  const lines = seq.map((num) => {
    const bar = (num > 0 ? '*' : '#').repeat(Math.abs(num));
    const bottomSpace = ' '.repeat(Math.min(num, 0) - bottom);
    const topSpace = ' '.repeat(top - Math.max(num, 0));

    return [...topSpace, ...bar, ...bottomSpace];
  });

  const chart = _.zip(...lines)
    .map((line) => line.join(''))
    .join('\n');

  console.log(chart);
}
barChart([6, 8, 8, 8, 8, 7, 6, 2, 6, 6, 8, 4, 6, 5, 2, 6, 7, 3, 7]);
