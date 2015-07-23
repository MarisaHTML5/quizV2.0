var express = require('express');
var router = express.Router();


var quizController= require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//GET Preguntas: Esto ya no sirve con DB

/*router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);*/

//GET Autor

//probando solo con routes: NO FUNCIONA
/*router.get('/autor', function(req, res) {
  res.render('author', { title: 'Quiz' });
});*/


//Autoload de comandos con :quizID

router.param('quizId', quizController.load);


//usando quiz controller

router.get('/autor/author', quizController.author); //lo añado para que cargue la página de autor

router.get('/autor/construccion', quizController.construccion); //lo añado para que cargue la página en construccion

//rutas quizes definición. Fase DB
router.get ('/quizes', quizController.index);
router.get ('/quizes/:quizId(\\d+)', quizController.show);
router.get ('/quizes/:quizId(\\d+)/answer', quizController.answer);
//añadir para creación de preguntas por parte del usuario
router.get('/quizes/new', quizController.new);
router.post('/quizes/create', quizController.create);



module.exports = router;
