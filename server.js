const express = require('express')
const path = require('path')

const SpeakerService = require('./services/SpeakerService')
const FeedbackService = require('./services/FeedbackService')

const router = require('./routes')

const app = express()
const port = 3000

const speakerService = new SpeakerService;
const feedbackService = new FeedbackService;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'))

app.use(express.static(path.join(__dirname,'./static')))

app.use('/', router({
	speakerService,
	feedbackService
}))


app.listen(port, ()=>{
	console.log('server listening...')
})