var express = require('express'); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require('fs');// fs -- обтект который дает возможность читать файлы(например json)
var app = express();
var bodyParser = require('body-parser');// 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs

//Настройки
//(https://overcoder.net/q/7302/%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-body-parser-%D1%81-express)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 3333; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< PORT 3333

app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});
//===================================end config

//http://localhost:3333/set-user-info (post)
// POST method route

app.post('/set-user-info', function (req, res) {
	const { login, password, secretKey} = req.body;
	var newUser = JSON.stringify(req.body);

	fs.readFile('users.json', 'utf-8', function(req, users) {

		if (newUser && secretKey === JSON.parse(users).secretKey){
			res.status(301).send("Пользователь уже существует");
		}	else {
			console.log (newUser,users)
			fs.writeFile('users.json',newUser,function() {
				console.log ('Успешно записанный файл')
				res.status(200).send("ok");
			});
		}

	})
})
