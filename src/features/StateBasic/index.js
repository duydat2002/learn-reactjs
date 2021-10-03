import React, {useState} from 'react';
import './styles.scss';

const StateBasic = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(x => x - 1)}>decrease</button>
            <button onClick={() => setCount(x => x + 1)}>Increase</button>
        </div>
    );
};

export default StateBasic;