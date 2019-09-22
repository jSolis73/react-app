import React from 'react'
import './FinishedQuiz.css'

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
				<button
					onClick={props.onRetry}
				>Повторить</button>
			</div>
		</div>
	)
}

export default FinishedQuiz