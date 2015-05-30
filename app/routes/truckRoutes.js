var express = require('express');

var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/foodTruckAPI');

var Truck = require('../models/truckModel');
var router = express.Router();

router.route('/trucks')
	.get(function(request, response) {
		Truck.find(function (error, trucks) {
			if (error) {
				response.status(400).send(error);
			} else {
				response.json(trucks);
			}
		});
	});

router.route('/:truckId')
	.get(function(request, response) {
		Truck.findById(request.params.truckId, function (error, truck) {
			if (error) {
				response.status(400).send(error);
			} else {
				response.json(truck);
			}
		});
	})
	.delete(function(request, response) {
		Truck.findById(request.params.truckId, function (error, truck) {
			if (error) {
				response.status(400).send(error);
			} else {
				truck.remove(function (error) {
					if (error) {
						response.status(400).send(error);
					} else {
						response.status(200).send('removed');
					}
				});
			}
		});
	});

module.exports = router;