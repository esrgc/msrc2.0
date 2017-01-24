var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next){
	res.locals.path = req.path.replace('/', '');
	console.log('Path: ....')
	console.log(res.locals.path);
	next();
});

/* GET home page. */
router.get('/', function(req, res){
	res.redirect('index');
});

//home page
router.get('/index', function(req, res){
	res.render('index', { title: 'Home'});	
});

//About
router.get('/about', function(req, res){
	res.render('about', { title: 'About'});	
});

//Test
router.get('/committees', function(req, res){
	res.render('committees', { title: 'Committees'});	
});

//contact
router.get('/partners', function(req, res){
	res.render('partners', { title: 'Partners'});	
});


module.exports = router;
