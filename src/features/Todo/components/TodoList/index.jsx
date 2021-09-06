import React from 'react';

const TodoList = ({ todoList }) => {
	return (
		<div>
			<ul>
				{todoList.map(todo => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
