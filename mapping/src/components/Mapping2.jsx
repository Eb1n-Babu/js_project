import React from 'react';

function Mapping2(props) {

    const items = ['Apple', 'Banana', 'Cherry'];

    return (
        <div>
            <ul>
                {items.map(value =>(<li key={value}>{value}</li>))}
            </ul>
        </div>
    );
}

export default Mapping2;