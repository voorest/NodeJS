console.log(Vue);

const data = {
  hello: 'Hello world',
  isMarried: false,
  html: '<a href="#">link</a>',
  inputText: '123',
  isShow: false,
  fruits: [
    'apple',
    'pineaple',
    'tomatos',
    'bananas'
  ],
  login: '',
  age: '',
  users: [
    { name: 'Valera', age: 24},
    { name: 'Sasha', age: 19},
    { name: 'Olesya', age: 18},
  ]
}

f_click: function() {
  console.log('click');
  this.users.push({ name: this.login, age: this.age})
},
f_move: function() {
  console.log('move');
},
data.toDo = toDo.bind(data)

const vue = new Vue(
  {
    el: '#app', //init vue into selector
    data: data
  }
);
