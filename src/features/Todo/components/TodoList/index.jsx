import React from 'react';
import classnames from 'classnames';
import './styles.scss';

const TodoList = ({ todoList, onTodoClick }) => {
	const handleTodoClick = (todo, index) => {
		if(!onTodoClick) 
			return;
		onTodoClick(todo, index);
	}

	return (
		<div>
			<ul className="todo-list">
				{todoList.map((todo, index) => (
					<li 
						key={todo.id} 
						className={classnames({
							'todo-item': true,
							completed: todo.status === 'completed'
						})}
						onClick={() => handleTodoClick(todo, index)}
					>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
