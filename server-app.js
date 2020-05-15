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

	req.body.login = 'Valera';
	req.body.password = '123';
	req.body.secretKey = '@gh5';

	let filePath = './users.json';
	let response = []
	response = req.body;
	const jsonString = JSON.stringify(response);

	try {
	  if (fs.existsSync(filePath)) {
			console.log('Читаем файл ', filePath);
			var contents = fs.readFileSync(filePath, 'utf8');
			var file = JSON.parse(contents);
			if (file.login == 'Valera' && file.secretKey == '@gh5') {
				console.log('Такой пользователь '+file.login+' существует. 301');
				res.status(301).send(response);
			} else {
				addUser();
			}
	  } else {
			console.log('Файл не существует');
			addUser();
		}
	} catch(err) {
	  console.error(err)
	}

	function addUser() {
		fs.writeFile(filePath, jsonString, (err) => {
				if (err) console.log('Error writing file:', err)
				res.status(200).send('OK');
		})
	}

});
