const express = require('express')
const router = express.Router()

module.exports = param =>{
	const { feedbackService } = param

	router.get('/', async(req,res)=>{
		const feedback = await feedbackService.getList()
		return res.json(feedback)
	});

	router.post('/:shortname', (req,res)=>{
		return res.send(`feedback form`)
	});

	return router;

}