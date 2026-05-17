import React from 'react';

function Calculator(props) {
    const [value, setValue] = React.useState({num1:0, num2:0,sum:0});

    const onChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }
    return (
        <div>
            <input typeof={"number"} placeholder={"enter a number "} onChange={onChange} name={"num1"} />
            <input typeof={"number"} placeholder={"enter a number "} onChange={onChange} name={"num2"} />
            <button onClick={()=>setValue({...value,sum:value.num1+value.num2})}>+</button>
        </div>
    );
}

export default Calculator;