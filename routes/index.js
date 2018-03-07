var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all customers */
router.get('/customers', function(req, res, next) {
	var db = require('../db');
	var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');

	Customer.find({}).lean().exec(function(e, docs) {
		res.json(docs);
		res.end();
	});
});

/* GET customer by id */
router.get('/customer/:id', function(req, res, next) {
	var db = require('../db');
	var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');

	Customer.find({_id: req.params.id }).lean().exec(function(e, docs) {
		res.json(docs);
		res.end();
	});
});

/* POST a new customer */
router.post('/customers', function(req, res, next) {
	var db = require('../db');
	var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');

	var newcustomer = new Customer({name: req.body.name, email: req.body.email});
	newcustomer.save(function(err) {
		if (err) {
			res.status(500).json({message: err.message});
			res.end();
			return
		}
		res.json(newcustomer);
		res.end();
	});
});

/* PUT a customer by id */
router.put('/customer/:id', function(req, res, next) {
	var db = require('../db');
	var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');

	Customer.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true}, function(err, doc) {
		if (err) {
			res.status(500).json({message: err.message});
			res.end();
			return
		}
		res.json(req.body);
		res.end();
	});
});

/* DELETE ONE customer by id */
router.delete('/customer/:id', function (req, res, next) {
    var db = require('../db');
    var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
    Customer.find({ _id: req.params.id }).remove(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json({success: true});
        res.end();
    });
});

module.exports = router;