
//GET/quizes/question
exports.question=function(req, res){
	res.render('quizes/question', {pregunta:'Capital de Italia'});

};

/*function removeAccents(word){
    word = word.replace(/[ÀÁÂÄ]/g,"A");
    word = word.replace(/[àáâä]/g,"a");
    word = word.replace(/[ÈÉÊË]/g,"E");
    word = word.replace(/[èéêë]/g,"e");
    word = word.replace(/[ÌÍÎÏ]/g,"I");
    word = word.replace(/[ìíîï]/g,"i");
    word = word.replace(/[ÒÓÔÖ]/g,"O");
    word = word.replace(/[òóôö]/g,"o");
    word = word.replace(/[ÙÚÛÜ]/g,"U");
    word = word.replace(/[ùúûü]/g,"u");
    return word;
}
*/


//GET/quizes/answer
exports.answer = function (req, res){
	if(req.query.respuesta==='Roma'){
		
		res.render('quizes/answer', {respuesta:'Correcto'});  //corrección paréntesis
	} else{
		res.render('quizes/answer', {respuesta:'Incorrecto'});
	}
};

//quitando acentos
/*exports.answer = function (req, res){
    if(req.query.respuesta==='Roma'){
        if(removeAccents(req.query.respuesta).toUpperCase() === removeAccents('Roma').toUpperCase()){
        res.render('quizes/answer', {respuesta:'Correcto'})};  //corrección paréntesis
    } else{
        res.render('quizes/answer', {respuesta:'Incorrecto'});
    }
};
*/

//GET/autor/author
exports.author=function(req, res){
    res.render('autor/author', {autoria: 'marisa'});

};



