import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components/TodoList/index';

const ListPage = () => {

    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        //console.log(params);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search])

    const handleTodoClick = (todo, index) => {
        // console.log(todo, index);

        const newTodoList = [...todoList];
        
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        }

        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        //setFilteredStatus('all');
        const queryParams = {status: 'all'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const handleShowCompletedClick = () => {
        //setFilteredStatus('completed');
        const queryParams = {status: 'completed'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const handleShowNewClick = () => {
        //setFilteredStatus('new');
        const queryParams = {status: 'new'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const renderTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
    }, [todoList, filteredStatus])

    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowNewClick}>Show New</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
            </div>
        </div>
    );
};

export default ListPage;