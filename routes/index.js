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

//probando solo con routes: NO FUNCIONA
/*router.get('/autor', function(req, res) {
  res.render('author', { title: 'Quiz' });
});*/


//usando quiz controller

router.get('/autor/author', quizController.author); //lo añado para que cargue la página de autor

router.get('/autor/construccion', quizController.construccion); //lo añado para que cargue la página en construccion

//rutas quizes definición. Fase DB
router.get ('/quizes', quizController.index);
router.get ('/quizes/:quizId(\\d+)', quizController.show);
router.get ('/quizes/:quizId(\\d+)/answer', quizController.answer);




module.exports = router;
