var path = require ('path');

//Cargar modelo ORM
var Sequelize = require ('sequelize');

//Usar BBDD SQlite

var sequelize = new Sequelize (null, null, null,
{
dialect: "sqlite", storage: "quiz.sqlite"
});

//Importar definición de tabla
var Quiz = sequelize.import (path.join (__dirname, 'quiz'));

exports.Quiz = Quiz; //exporta la definición de la tabla quiz

// crear e inicializar la tabla de preguntas en DB

sequelize.sync().success(function(){   // Este método será el que cree quiz.sqlite de forma automática al hacer npm start
	//success ejecuta el manejador de la tabla una vez creada
	Quiz.count().success(function(count){
		if (count===0){ //la tabla solo se inicia si está vacía
			Quiz.create({
				pregunta: 'Capital de Italia',
				respuesta: 'Roma'
			})
			.success (function() {
				console.log ('Base de datos inicializada')
			});
		};
	});
});