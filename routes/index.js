const express = require('express')
const router = express.Router()
const speakerRoute = require('./speakers')
const feedbackRoute = require('./feedback')

module.exports = param =>{
	router.get('/', (req,res)=>{
		return res.render('pages/index', {pageTitle: 'welcome'})
	})

	router.use('/speakers', speakerRoute(param))
	router.use('/feedback', feedbackRoute(param))

	return router;
}