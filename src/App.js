import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import AlbumFeature from './features/Album/index';
import ColorBox from './features/HookBasic/index';
import StateBasic from './features/StateBasic/index';
// import './styles.scss';
import TodoFeature from './features/Todo/index';
import NotFound from './components/NotFound/index';

const App = () => {
    return (
        <div className="App">
            Header
            {/* <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/todos">
                <p>Todo</p>
            </Link>
            <Link to="/albums">
                <p>Album</p>
            </Link>
            <Link to="/state">
                <p>State Basic</p>
            </Link>
            <Link to="/hook">
                <p>Custom hook</p>
            </Link> */}

            <p>Khi bấm sẽ có thêm class active</p>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todos"><p>Todo</p></NavLink>
            <NavLink to="/albums"><p>Album</p></NavLink>
            <NavLink to="/state"><p>State Basic</p></NavLink>
            <NavLink to="/hook"><p>Custom hook</p></NavLink>

            <Switch>
                <Redirect from="/home" to="/" exact/>
                <Redirect from="/album/:id" to="/todo/:id" exact/>

                <Route path="/" exact>Home</Route>
                <Route path="/todos" component={TodoFeature}/>
                <Route path="/albums" component={AlbumFeature}/>
                <Route path="/state" component={StateBasic}/>
                <Route path="/hook" component={ColorBox}/>

                <Route component={NotFound} />
            </Switch>
            <br/>
            Footer
        </div>
    );
};

export default App; 