import React, {useEffect, useState} from 'react';
import './styles.scss';

const useRandomColor = () => {
    const [color, setColor] = useState('green');

    useEffect(() => {
        setInterval(() => {
            const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            setColor(newColor);
        }, 1000);

        return () => {
            clearInterval(setColor);
        }
    }, [])

    return color;
}

const ColorBox = () => {
    // const [color, setColor] = useState('green');

    // const handleColorChange = (color) => {
    //     const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    //     setColor(newColor);
    // }
    const color = useRandomColor();

    return (
        <div 
            className='colorBox' 
            style={{backgroundColor: color}} 
            //onClick={() => handleColorChange(color)}
        ></div>
    );
};

export default ColorBox;