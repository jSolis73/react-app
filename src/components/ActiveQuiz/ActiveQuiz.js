import React from 'react'
import './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
	<div className="ActiveQuiz">
		<p className='Question'>
			<span>
				<strong>2.</strong>&nbsp;
				Как дела?
			</span>
			<small>3 из 15</small>
		</p>

		<AnswersList 
			answers={props.answers}
		/>
	</div>
)

export default ActiveQuiz