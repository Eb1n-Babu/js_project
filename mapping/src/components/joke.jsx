import React from 'react';

function Joke(props) {

    const [jokes, setJokes] = React.useState('');

    const Fetchjoke = async () => {
        const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart");
        const data = await response.json();
        setJokes(data);
    }

    return (
        <div>
            <h1>{jokes.setup}</h1>
            <h1>{jokes.delivery}</h1>
            <button onClick={Fetchjoke}>BOTTON</button>
        </div>
    );
}

export default Joke;