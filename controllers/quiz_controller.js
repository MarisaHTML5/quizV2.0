var models = require ('../models/models.js');








//GET/quizes/answer

exports.answer = function (req, res){
	models.Quiz.findAll().then(function(quiz){   //cambios success por then
	if(req.query.respuesta === quiz[0].respuesta){
		
		res.render('quizes/answer', {respuesta:'Correcto'});  //corrección paréntesis
	} else{
		res.render('quizes/answer', {respuesta:'Incorrecto'});
	}
})
};



//GET/autor/author
exports.author=function(req, res){
    res.render('autor/author', {autoria: 'autor'});

};

//GET/construction
exports.construccion=function(req, res){
    res.render('autor/construccion', {contruccion: 'obras'});

};


//modificaciones y añadidos DB

//Autolad- factoriza el código si la ruta incluye :quiz id

exports.load =function (req, res, next, quizId){
	models.Quiz.find(quizId).then(
		function(quiz){
			if(quiz){
				req.quiz=quiz;
				next();
			} else { next(new Error ('No existe quizId=' + quizId));}
		}
		).catch(function(error){next(error);});
};

//GET/quizes/question
exports.question=function(req, res){
	models.Quiz.findAll().then(function(quiz){   //cambios success por then
		res.render('quizes/question', {pregunta:quiz[0].pregunta})
	})
	

};


// GET/quizes/:id

/*exports.show = function (req, res){
models.Quiz.find(req.params.quizId).then(function(quiz){
	res.render('quizes/show', {quiz:quiz});
})

};*/

//cambios autoload
exports.show = function (req, res){
	res.render('quizes/show', {quiz: req.quiz});


};


// GET/quizes/:id/answer
/*exports.answer = function (req, res){
models.Quiz.find(req.params.quizId).then(function(quiz){
	if(req.query.respuesta===quiz.respuesta){
	res.render('quizes/answer', {quiz:quiz, respuesta:'Correcto'});
} else{
	res.render ('quizes/answer',
		{quiz: quiz, respuesta:'Incorrecto'});
}
})

};*/

//cambios autoload
exports.answer = function (req, res){
	var resultado='Incorrecto';
	if(req.query.respuesta===req.quiz.respuesta){
	resultado='Correcto';
} 
	res.render ('quizes/answer',
		{quiz: req.quiz, respuesta: resultado});
};

//Get Quizes

exports.index = function (req, res) {
	models.Quiz.findAll().then (function(quizes){
		res.render('quizes/index.ejs', {quizes : quizes});

	}
	).catch(function(error) {next(error);}) //lo añado con el autoload
};







