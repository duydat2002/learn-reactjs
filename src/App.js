import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
// import './styles.scss';
import TodoFeature from './features/Todo/index';
import AlbumFeature from './features/Album/index';
import StateBasic from './features/StateBasic/index';
import ColorBox from './features/HookBasic/index';

const App = () => {
    return (
        <div className="App">
            Header
            <Link to="/todo">
                <p>Todo</p>
            </Link>
            <Link to="/album">
                <p>Album</p>
            </Link>
            <Link to="/state">
                <p>State Basic</p>
            </Link>
            <Link to="/hook">
                <p>Custom hook</p>
            </Link>

            <p>Khi bấm sẽ có thêm class active</p>
            <NavLink to="/todo"><p>Todo</p></NavLink>
            <NavLink to="/album"><p>Album</p></NavLink>
            <NavLink to="/state"><p>State Basic</p></NavLink>
            <NavLink to="/hook"><p>Custom hook</p></NavLink>

            <Route path="/todo" component={TodoFeature}/>
            <Route path="/album" component={AlbumFeature}/>
            <Route path="/state" component={StateBasic}/>
            <Route path="/hook" component={ColorBox}/>
            <br/>
            Footer
        </div>
    );
};

export default App; 