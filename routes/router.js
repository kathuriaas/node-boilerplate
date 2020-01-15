var express = require('express');
var router = express.Router();

//Get home page
router.get('/', function(req,res){
	res.render('home_view' , { title : "Home Page" });
});

//Get about page
router.get('/about', function(req,res){
        res.render('about_view' , { title : "About Page" });
});


module.exports = router;