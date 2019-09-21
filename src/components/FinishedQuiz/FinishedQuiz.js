import React from 'react'
import './FinishedQuiz.css'

const FinishedQuiz = props => {
	return (
		<div className="FinishedQuiz">
			<ul>
				<li>
					<strong>1. </strong>
					How are you
					<i className="" />
				</li>
				<li>
					<strong>2. </strong>
					How are you
					<i className="" />
				</li>
			</ul>
			<p>правильно 4 из 10</p>

			<div>
				<button>Повторить</button>
			</div>
		</div>
	)
}

export default FinishedQuiz