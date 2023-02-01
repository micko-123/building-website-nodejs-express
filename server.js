const express = require('express')
const path = require('path')

const SpeakersService = require('./services/SpeakerService')
const FeedbackService = require('./services/FeedbackService')

const router = require('./routes')

const app = express()
const port = 3000

const speakersService = new SpeakersService('./data/speakers.json');
const feedbackService = new FeedbackService('./data/feedback.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'))

app.use(express.static(path.join(__dirname,'./static')))

app.use('/', router({
	speakersService,
	feedbackService
}))


app.listen(port, ()=>{
	console.log('server listening...')
}) 