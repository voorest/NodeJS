//Используя цепочку Promise согласно таблицы http://prntscr.com/oxzs7j. Организовать вывод в консоль такой порядок цифр
//" 0 1 3 6 8 9 12 ", " 0 2 3 6 7 9 12". Где 0 - это значение которое выводится в сallback - ф-ии которая передается в Promise.
// ------------------- PROMISE -------------------
const promise = new Promise((resolve, reject) => {
  const str = '0';
	resolve('при resolved '+ str);
	//reject('при rejected '+ str);
});
promise
  .then((str) => {
    str = str + ' 1';
    return Promise.resolve(str);
  }, (str) => {
    str = str + ' 2';
    return Promise.reject(str);
  })
  .then((str) => {
    str = str + ' 3';
    return Promise.resolve(str);
  }, (str) => {
    str = str + ' 3';
    return Promise.reject(str);
  })
  .then((str) => {
    str = str + ' 6';
    return Promise.reject(str);
  }, (str) => {
    str = str + ' 6';
    return Promise.resolve(str);
  })
  .then((str) => {
    str = str + ' 7';
    return Promise.resolve(str);
  }, (str) => {
    str = str + ' 8';
    return Promise.resolve(str);
  })
  .then((str) => {
    str = str + ' 9';
    return Promise.reject(str);
  }, (str) => {
    str = str + ' 10';
    return Promise.reject(str);
  })
  .then((str) => {
    str = str + ' 11';
    console.log(str);
  }, (str) => {
    str = str + ' 12';
    console.log(str);
  });
