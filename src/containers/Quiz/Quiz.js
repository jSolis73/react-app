import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
	state = {
		quiz: []
	}
	render() {
		return (
			<div className='Quiz'>
				<div className='mainQuiz'>
					<h1>Quiz</h1>
					<ActiveQuiz />
				</div>
			</div>
		)
	}
}

export default Quiz