var express = require('express');
var router = express.Router();


var quizController= require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//GET Preguntas

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

//GET Autor

router.get('/autor/author', quizController.author); //lo añado para que cargue la página de autor

module.exports = router;
