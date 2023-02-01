const express = require('express')
const router = express.Router()

module.exports = param =>{
	const { speakersService } = param

	router.get('/', async (req,res)=>{
		 const speakers = await speakersService.getList()
		 return res.json(speakers)
	});

	router.get('/:shortname', (req,res)=>{
		return res.send(`deatil page of ${req.params.shortname}`)
	});

	return router;

}