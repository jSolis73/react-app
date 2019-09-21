import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
	state = {
		activeQuestion: 0,
		quiz: [
			{
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				id: 1,
				answers: [
					{text: 'Белый', id: 1},
					{text: 'Синий', id: 2},
					{text: 'Желтый', id: 3},
					{text: 'Черный', id: 4},
				]
			},
			{
				question: 'В каком году основали Санкт-Петербург?',
				rightAnswerId: 2,
				id: 2,
				answers: [
					{text: '1700', id: 1},
					{text: '1705', id: 2},
					{text: '1703', id: 3},
					{text: '1803', id: 4},
				]
			}
		]
	}

	onAnswerClickHandler = (answerId) => {
		console.log('Answer Id', answerId)
		this.setState({
			activeQuestion: this.state.activeQuestion + 1
		})
	}
	render() {
		return (
			<div className='Quiz'>
				<div className='mainQuiz'>
					<h1>Ответьте на вопрос</h1>
					<ActiveQuiz 
						answers={this.state.quiz[this.state.activeQuestion].answers}
						question={this.state.quiz[this.state.activeQuestion].question}
						onAnswerClick={this.onAnswerClickHandler}
						quizLength={this.state.quiz.length}
						answerNumber={this.state.activeQuestion + 1}
					/>
				</div>
			</div>
		)
	}
}

export default Quiz