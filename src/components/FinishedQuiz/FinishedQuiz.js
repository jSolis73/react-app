import React from 'react'
import './FinishedQuiz.css'
import Button from '../UI/Button.js'

const FinishedQuiz = props => {
	const successCount = Object.keys(props.results).reduce((total, key) => {
		if (props.results[key] === 'success') {
			total++
		}
		return total
	}, 0)
	function getResult(id) {
		if (props.results[id] === 'success') {return 'Правильно'}
		else {return 'Неправильно'}
	}
	return (
		<div className="FinishedQuiz">
			<ul>
				{ props.quiz.map((quizItem, index) => {
					return (
						<li
							key={index}
						>
							<strong>{index + 1}</strong>. &nbsp;
							{quizItem.question}
							<span> - {getResult(index)}</span>
						</li>
					)
				})}
			</ul>
			<p>правильно {successCount} из {props.quiz.length}</p>

			<div>
				<Button 
					onClick={props.onRetry}
				>
					Повторить
				</Button>

				<Button >
					Перейти в список тестов
				</Button>
			</div>
		</div>
	)
}

export default FinishedQuiz