
//GET/quizes/question
exports.question=function(req, res){
	res.render('quizes/question', {pregunta:'Capital de Italia'});

};





//GET/quizes/answer

exports.answer = function (req, res){
	if(req.query.respuesta==='Roma'){
		
		res.render('quizes/answer', {respuesta:'Correcto'});  //corrección paréntesis
	} else{
		res.render('quizes/answer', {respuesta:'Incorrecto'});
	}
};



//GET/autor/author
exports.author=function(req, res){
    res.render('autor/author', {autoria: 'autor'});

};

//GET/construction
exports.construccion=function(req, res){
    res.render('autor/construccion', {contruccion: 'obras'});

};





