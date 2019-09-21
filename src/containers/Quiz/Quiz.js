import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
	state = {
		quiz: [
			{
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				answers: [
					{text: 'Белый', id: 1},
					{text: 'Синий', id: 2},
					{text: 'Желтый', id: 3},
					{text: 'Черный', id: 4},
				]
			}
		]
	}

	onAnswerClickHandler = (answerId) => {
		console.log('Answer Id', answerId)
	}
	render() {
		return (
			<div className='Quiz'>
				<div className='mainQuiz'>
					<h1>Ответьте на вопрос</h1>
					<ActiveQuiz 
						answers={this.state.quiz[0].answers}
						question={this.state.quiz[0].question}
						onAnswerClick={this.onAnswerClickHandler}
					/>
				</div>
			</div>
		)
	}
}

export default Quiz