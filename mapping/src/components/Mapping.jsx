import React from 'react';

function Mapping(props) {

    const number = [1,2,3,4,5,6,7,88,9]

    const double = number.map(value => value*2)

    return (
        <div>
            <h1>hello</h1>
            <ul>
                {double.map(value => <li key={value}>{value}</li>)}
            </ul>
        </div>
    );
}

export default Mapping;