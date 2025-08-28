import React from 'react';

function FunA(props) {

    const[value, setValue] = React.useState({num1:0, num2:0, num3:0, num4:0});

    const onChange = (e) => {
        setValue({...value,[e.target.name]: e.target.value});
    }
    return (
        <div>
            <input placeholder='num1' onChange={onChange} name='num1' />
            <h1>{value.num1}</h1>
        </div>
    );
}

export default FunA;