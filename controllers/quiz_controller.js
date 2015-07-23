var models = require('../models/models.js');

// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
  models.Quiz.find(quizId).then(
    function(quiz) {
      if (quiz) {
        req.quiz = quiz;
        next();
      } else { next(new Error('No existe quizId=' + quizId)); }
    }
  ).catch(function(error) { next(error);});
};

// GET /quizes
//modificación para crear texto a buscar (añadirmos el condicional, en else dejamos la función primitiva)

exports.index = function(req, res) {
  if(req.query.search !== undefined) {
    var search = ('%' + req.query.search + '%').replace(/\s/g, '%');
    models.Quiz.findAll({where: ["lower(pregunta) like ?",search.toLowerCase()], order: 'pregunta ASC'}).then(
      function(quizes) {
        res.render('quizes/index', { quizes: quizes});
      }
    ).catch(function(error) {next(error);})
  }
  else {
    models.Quiz.findAll().then(
    function(quizes) {
      res.render('quizes/index', { quizes: quizes});
    }
  ).catch(function(error) { next(error);})
  }
};

// GET /quizes/:id (question)
exports.show = function(req, res) {
  res.render('quizes/show', { quiz: req.quiz});
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
    var resultado = 'Incorrecto';
  if (req.query.respuesta === req.quiz.respuesta) {
    resultado = 'Correcto';
  }
  res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});
};

//GET/autor/author
exports.author=function(req, res){
    res.render('autor/author', {autoria: 'autor'});

};

//GET/construction
exports.construccion=function(req, res){
    res.render('autor/construccion', {contruccion: 'obras'});

};


//GET /QUIZES/ NEW
exports.new = function (req, res){
  var quiz = models.Quiz.build( //crea objeto quizz
    {pregunta: "Pregunta", respuesta:"Respuesta"});
  res.render('quizes/new', {quiz: quiz});
};

//POST QUIZES/CREATE
exports.create = function (req, res){
  var quiz= models.Quiz.build(req.body.quiz);
  //guarda en DB los campos pregun y reso de quiz
  quiz.save({fields:["pregunta", "respuesta"]}).then(function(){
    res.redirect('/quizes')
  }) //Redirecciona a la lista de preguntas
};