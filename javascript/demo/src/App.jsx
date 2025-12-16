import React , {useState} from 'react';

function App(props) {
    const [value, setValue] = useState({num1:"",num2:"",sum:""})

    return (
        <div>
            <input onChange={(event)=>setValue(...value,{})}/>
        </div>
    );
}

export default App;