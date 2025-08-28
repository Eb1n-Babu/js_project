import React from 'react';

function Mapping3(props) {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ];

    return (
        <div>
            <ul>
                {users.map((users => <li>{users.id}{users.name}</li>))}
            </ul>
        </div>
    );
}

export default Mapping3;