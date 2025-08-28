import React from 'react';

function Mapping1() {

    const number = [1,2,3,4]

    return (
        <div>
            <ul>
                {number.map(value => <li>{value}</li>)}
            </ul>
        </div>
    );
}

export default Mapping1;