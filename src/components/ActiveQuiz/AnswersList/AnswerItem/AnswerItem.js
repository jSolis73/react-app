import React from 'react'
import './AnswerItem.css'

const AnswerItem = props => {
	if (props.state) {
		return (
			<li 
				className={props.state}
				onClick={() => props.onAnswerClick(props.answer.id)}
			>
				{ props.answer.text }
			</li>
		)
	} else {
		return (
			<li 
				className="AnswerItem"
				onClick={() => props.onAnswerClick(props.answer.id)}
			>
				{ props.answer.text }
			</li>
		)
	}
	
}

export default AnswerItem