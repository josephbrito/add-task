import React from 'react';
import './Task.css'
import {useHistory} from 'react-router-dom';

const Task = ({ task, handleTaskClick, handleTaskDeletion })=>{
	const histrory = useHistory();

	const handleTaskDetailsClick = ()=>{
		histrory.push(`/${task.title}`)
	}

	return <div className="task-container" style={task.completed ? {borderLeft:"6px solid dodgerblue"} : {}}>
		<div className="task-title" onClick={()=> handleTaskClick(task.id)}>
				{task.title}
		</div>

		<div className="buttons-container">
				<button className="remove-task-button" onClick={()=> handleTaskDeletion(task.id)}>X</button>
					<button className="see-task-details-button" onClick={handleTaskDetailsClick}>ℹ️</button>
		</div>
	</div>
}

export default Task;
